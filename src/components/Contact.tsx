import { useState } from 'react'

const PARTNERS = [
  { initials: 'TV', name: 'TechVentures' },
  { initials: 'FE', name: 'FinEdge' },
  { initials: 'KB', name: 'Kewbot' },
]

const SPARKLES = [
  { top: '4%',  left: '8%',  size: 2,   dur: 2.6, delay: 0.2  },
  { top: '12%', left: '28%', size: 1.5, dur: 3.1, delay: 1.0  },
  { top: '6%',  left: '52%', size: 2,   dur: 2.4, delay: 0.5  },
  { top: '22%', left: '72%', size: 1.5, dur: 3.3, delay: 1.8  },
  { top: '18%', left: '44%', size: 1.5, dur: 2.8, delay: 0.8  },
  { top: '35%', left: '6%',  size: 2,   dur: 2.2, delay: 2.1  },
  { top: '42%', left: '88%', size: 2,   dur: 3.0, delay: 0.3  },
  { top: '55%', left: '18%', size: 1.5, dur: 2.7, delay: 1.5  },
  { top: '62%', left: '60%', size: 2,   dur: 2.5, delay: 0.9  },
  { top: '70%', left: '38%', size: 1.5, dur: 3.2, delay: 1.3  },
  { top: '78%', left: '80%', size: 2,   dur: 2.9, delay: 2.4  },
  { top: '85%', left: '12%', size: 1.5, dur: 2.3, delay: 0.6  },
  { top: '90%', left: '50%', size: 2,   dur: 2.8, delay: 1.9  },
  { top: '95%', left: '76%', size: 1.5, dur: 3.0, delay: 0.4  },
  { top: '30%', left: '33%', size: 1.5, dur: 2.6, delay: 2.2  },
  { top: '48%', left: '55%', size: 2,   dur: 3.4, delay: 0.7  },
  { top: '8%',  left: '90%', size: 1.5, dur: 2.1, delay: 1.6  },
  { top: '66%', left: '94%', size: 2,   dur: 2.7, delay: 1.1  },
  { top: '38%', left: '66%', size: 1.5, dur: 3.1, delay: 0.3  },
  { top: '82%', left: '30%', size: 2,   dur: 2.4, delay: 2.0  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((err) => ({ ...err, [e.target.name]: '' }))
  }

  const fieldBorder = (field: string) =>
    errors[field] ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.10)'

  const inputStyle = (field: string): React.CSSProperties => ({
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: `1px solid ${fieldBorder(field)}`,
    color: '#FFFFFF',
    width: '100%',
    height: 48,
    borderRadius: 12,
    padding: '0 16px',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.2s',
  })

  const textareaStyle = (field: string): React.CSSProperties => ({
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: `1px solid ${fieldBorder(field)}`,
    color: '#FFFFFF',
    width: '100%',
    borderRadius: 12,
    padding: '12px 16px',
    fontSize: 14,
    outline: 'none',
    resize: 'none',
    transition: 'border-color 0.2s',
  })

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#090014' }}
    >
      {/* ── Grid ── */}
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-20" />

      {/* ── Shimmer dots ── */}
      <div className="absolute inset-0 pointer-events-none">
        {SPARKLES.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: s.top, left: s.left,
              width: s.size, height: s.size,
              backgroundColor: 'rgba(255,255,255,0.50)',
              animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container-base relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-52 items-start">

          {/* ── Left: copy — pushed down ── */}
          <div style={{ paddingTop: 48 }}>
            {/* Metallic heading — always dark section so apply gradient directly */}
            <h2
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight mb-5 whitespace-nowrap"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 30%, #7A7A7A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              Schedule a quick call
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.58)' }}>
              An award-winning digital agency specializing in software development, web development, UI/UX design, AI solutions and IT consultancy.
            </p>

            {/* Trusted by strip */}
            <div
              className="flex items-center gap-5 rounded-2xl px-5 py-4 mb-10"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <span className="text-sm shrink-0" style={{ color: 'rgba(255,255,255,0.45)' }}>Trusted by:</span>
              <div className="flex items-center gap-6">
                {PARTNERS.map((p) => (
                  <div key={p.initials} className="flex items-center gap-2 opacity-60 hover:opacity-90 transition-opacity">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold"
                      style={{ backgroundColor: 'rgba(124,58,237,0.25)', border: '1px solid rgba(124,58,237,0.30)', color: '#C4B5FD' }}
                    >
                      {p.initials}
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-2">
              <span style={{ color: 'rgba(255,255,255,0.50)', fontSize: 18 }}>✨</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>
                An award-winning digital agency specializing in software
              </span>
            </div>
          </div>

          {/* ── Right: form card — dark glass, bleeds to right edge ── */}
          <div
            className="rounded-2xl p-6 sm:p-8 lg:-mr-[140px]"
            style={{
              backgroundColor: 'rgba(8,4,20,0.85)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 32px 64px rgba(0,0,0,0.60)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                  style={{ backgroundColor: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.30)' }}
                >
                  ✅
                </div>
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="text-sm max-w-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-2 text-sm font-semibold px-6 py-2.5 rounded-full transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'rgba(255,255,255,0.10)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.18)' }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.70)' }}>Full Name</label>
                  <input
                    type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder="Enter full name"
                    style={inputStyle('name')}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.65)')}
                    onBlur={(e) => (e.target.style.borderColor = fieldBorder('name'))}
                  />
                  {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.70)' }}>Email Address</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="Enter email address"
                    style={inputStyle('email')}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.65)')}
                    onBlur={(e) => (e.target.style.borderColor = fieldBorder('email'))}
                  />
                  {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.70)' }}>Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Enter message here" rows={5}
                    style={textareaStyle('message')}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(124,58,237,0.65)')}
                    onBlur={(e) => (e.target.style.borderColor = fieldBorder('message'))}
                  />
                  {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl font-bold text-sm transition-opacity hover:opacity-90 active:scale-[0.98] mt-1"
                  style={{ backgroundColor: '#FFFFFF', color: '#09090E' }}
                >
                  Schedule a call
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
