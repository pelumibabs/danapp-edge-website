import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://danappedge.com",
  "https://www.danappedge.com",
];

function corsHeaders(origin: string | null) {
  const allowed =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

// Auto-injected by Supabase — no manual secret needed.
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

  let body: { name?: unknown; email?: unknown; message?: unknown; token?: unknown };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
    });
  }

  const { name, email, message, token } = body;

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    typeof message !== "string" || !message.trim() ||
    typeof token !== "string" || !token
  ) {
    return new Response(JSON.stringify({ error: "Missing or invalid fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
    });
  }

  // Verify Turnstile token — pass the caller's IP for extra signal when available.
  const ip = req.headers.get("cf-connecting-ip") ?? undefined;
  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: Deno.env.get("TURNSTILE_SECRET_KEY"),
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    },
  );

  const verification = await verifyRes.json();
  if (!verification.success) {
    return new Response(JSON.stringify({ error: "Verification failed" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
    });
  }

  // Insert — error detail stays server-side, never reaches the client.
  const { error: insertError } = await supabase
    .from("contact_submissions")
    .insert({
      name: name.trim().slice(0, 200),
      email: email.trim().slice(0, 254),
      message: message.trim().slice(0, 5000),
    });

  if (insertError) {
    console.error("Insert error:", insertError.message);
    return new Response(JSON.stringify({ error: "Submission failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
});
