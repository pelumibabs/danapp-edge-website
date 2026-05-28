import { useTheme } from '../contexts/ThemeContext'

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Working with Danapp Edge was a game changer. They took our rough idea and turned it into a polished, production-ready product faster than we thought possible. Truly impressive execution.",
    name: 'Oshodi David',
    role: 'CEO, Kewbot',
    initials: 'OD',
    image: '/testimonial-1.png',
    stars: 4,
  },
  {
    id: 2,
    quote: "The attention to detail in the UI and the speed of delivery were unmatched. Our platform launched on time and our users immediately noticed the quality. Danapp Edge sets the bar high.",
    name: 'Sarah Adenike',
    role: 'Co-founder, FinEdge',
    initials: 'SA',
    image: '/testimonial-2.png',
    stars: 5,
  },
  {
    id: 3,
    quote: "From strategy to deployment, the team was sharp, communicative and genuinely invested in our success. Our user retention jumped 40% within a month of launch. Highly recommend.",
    name: 'Michael Ayodeji',
    role: 'CTO, TechVentures',
    initials: 'MA',
    image: '/testimonial-3.png',
    stars: 5,
  },
  {
    id: 4,
    quote: "They didn't just build what we asked for — they challenged our thinking and delivered something better. The product is clean, fast, and exactly what our customers needed.",
    name: 'Adaeze Nwosu',
    role: 'Product Lead, Paystack',
    initials: 'AN',
    image: '/testimonial-4.png',
    stars: 5,
  },
  {
    id: 5,
    quote: "We had a tight deadline and a complex scope. Danapp Edge handled it with professionalism we rarely see. The result was a product we are genuinely proud to show our investors.",
    name: 'Tunde Fashola',
    role: 'Founder, BuildBridge',
    initials: 'TF',
    image: '/testimonial-5.png',
    stars: 5,
  },
  {
    id: 6,
    quote: "Exceptional team. They understood our vision immediately, communicated clearly at every step, and delivered ahead of schedule. The quality of work speaks for itself — stunning.",
    name: 'Chioma Osei',
    role: 'CEO, GrowthLab',
    initials: 'CO',
    image: '/testimonial-6.png',
    stars: 4,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="w-5 h-5 fill-current"
          style={{ color: i <= count ? '#F59E0B' : 'rgba(128,128,128,0.20)' }}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09L5.64 12.5.902 8.09l5.57-.81L10 2.5l2.528 4.78 5.57.81-4.738 4.41 1.518 5.59z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t, isDark }: { t: typeof TESTIMONIALS[0]; isDark: boolean }) {
  return (
    <div
      className="flex flex-col gap-5 rounded-2xl p-6"
      style={{
        width: 380,
        backgroundColor: isDark ? '#1A1A1A' : '#FFFFFF',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
        boxShadow: isDark ? 'none' : '0 2px 20px rgba(0,0,0,0.05)',
        flexShrink: 0,
      }}
    >
      <StarRating count={t.stars} />

      <blockquote
        className="text-sm leading-relaxed flex-1"
        style={{
          color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)',
          display: '-webkit-box',
          WebkitLineClamp: 4,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        } as React.CSSProperties}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}` }}
      >
        <div
          className="w-11 h-11 rounded-full overflow-hidden shrink-0 flex items-center justify-center relative"
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(124,58,237,0.15))',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.06)'}`,
          }}
        >
          <span className="text-xs font-bold" style={{ color: '#7C3AED' }}>{t.initials}</span>
          <img
            src={t.image}
            alt={t.name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
          />
        </div>

        <div>
          <p className="text-sm font-semibold" style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}>
            {t.name}
          </p>
          <p className="text-xs mt-0.5" style={{ color: isDark ? 'rgba(255,255,255,0.40)' : 'rgba(0,0,0,0.45)' }}>
            {t.role}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  /* Duplicate cards so the marquee loop is seamless */
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: isDark ? '#000000' : '#FDFCFF' }}
    >
      {/* ── Paper plane — bursting toward the right edge ── */}
      <img
        src="/paper-plane-dark.png"
        alt=""
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          right: '-12%',
          width: '36%',
          transform: 'translateY(-50%) rotate(-25deg)',
          opacity: isDark ? 0.10 : 0.06,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      <div className="container-base">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-4">
            <span className="text-gradient-process-our">What people are</span>{' '}
            <span className="text-gradient-why">saying</span>
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed mb-8"
            style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}
          >
            Real feedback from clients who trusted us to deliver.
          </p>

          {/* ── Social proof bar ── */}
          <div className="inline-flex items-center gap-4">
            {/* Overlapping avatars */}
            <div className="flex">
              {TESTIMONIALS.slice(0, 4).map((t, i) => (
                <div
                  key={t.id}
                  className="w-10 h-10 rounded-full overflow-hidden relative flex items-center justify-center"
                  style={{
                    marginLeft: i === 0 ? 0 : -12,
                    zIndex: 10 - i,
                    background: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(124,58,237,0.15))',
                    border: `2px solid ${isDark ? '#000000' : '#FDFCFF'}`,
                  }}
                >
                  <span className="text-[10px] font-bold" style={{ color: '#7C3AED' }}>{t.initials}</span>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
                  />
                </div>
              ))}
            </div>

            {/* Stars + label */}
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 fill-current" style={{ color: '#F59E0B' }} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09L5.64 12.5.902 8.09l5.57-.81L10 2.5l2.528 4.78 5.57.81-4.738 4.41 1.518 5.59z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-semibold" style={{ color: isDark ? 'rgba(255,255,255,0.80)' : '#0F172A' }}>
                4.9/5 based on client reviews
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ── Auto-scrolling carousel — full bleed, no container clipping ── */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4"
          style={{
            width: 'max-content',
            animation: 'marquee 40s linear infinite',
            paddingLeft: '1rem',
          }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} isDark={isDark} />
          ))}
        </div>
      </div>

    </section>
  )
}
