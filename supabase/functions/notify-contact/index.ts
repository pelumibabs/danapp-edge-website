import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://danappedge.com",
  "https://www.danappedge.com",
];

function escapeHtml(str: unknown): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function corsHeaders(origin: string | null) {
  const allowed =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

// Auto-injected by Supabase into every Edge Function — no manual secret needed.
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

serve(async (req) => {
  const origin = req.headers.get("origin");

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // This function is invoked by a Database Webhook on INSERT to
  // contact_submissions. The payload shape is { type, table, record, ... }.
  // `record` is the newly inserted row, already persisted — it is the durable
  // record. Email delivery is best-effort; failures are logged to the row, not
  // surfaced to the caller.
  let record: Record<string, unknown> | null = null;

  try {
    const body = await req.json();
    record = body?.record ?? null;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
    });
  }

  if (!record?.id || !record?.name || !record?.email || !record?.message) {
    return new Response(JSON.stringify({ error: "Invalid payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
    });
  }

  const rowId = record.id as string;

  const name = escapeHtml(record.name).slice(0, 200);
  const email = escapeHtml(record.email).slice(0, 254);
  const message = escapeHtml(record.message).slice(0, 5000);
  const submittedAt = escapeHtml(record.created_at);

  let emailOk = false;
  let emailError: string | null = null;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
      },
      body: JSON.stringify({
        from: "notifications@danappedge.com",
        to: "info@danappedge.com",
        subject: `New Contact: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${message}</p>
          <p><strong>Submitted at:</strong> ${submittedAt}</p>
        `,
      }),
    });

    if (res.ok) {
      emailOk = true;
    } else {
      const body = await res.text();
      emailError = `Resend ${res.status}: ${body}`.slice(0, 500);
    }
  } catch (err) {
    emailError = (err instanceof Error ? err.message : String(err)).slice(0, 500);
  }

  // Write delivery status back to the row. Never throws outward — the webhook
  // must always receive a 2xx or Supabase will retry indefinitely.
  if (emailOk) {
    await supabase
      .from("contact_submissions")
      .update({ email_sent: true, email_sent_at: new Date().toISOString() })
      .eq("id", rowId);
  } else {
    await supabase
      .from("contact_submissions")
      .update({ email_error: emailError })
      .eq("id", rowId);
  }

  return new Response(
    JSON.stringify({ ok: true, email_sent: emailOk }),
    {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
    },
  );
});
