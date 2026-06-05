import { useTheme } from '../contexts/ThemeContext'

const TEAM_MEMBERS = [
  { name: 'Adewale David Oluwatobi', role: 'Product designer', initials: 'AD', color: '#8032E5' },
  { name: 'Adenike Sarah Ibukunlola', role: 'Software engineer', initials: 'AS', color: '#FD5E3C' },
  { name: 'Adewale David Oluwatobi', role: 'Backend', initials: 'AD', color: '#22C55E' },
]


function CommPill({ icon, label, iconBg }: { icon: React.ReactNode; label: string; iconBg: string }) {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 1px 6px rgba(0,0,0,0.07)',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </span>
      <span className="text-[10px] font-medium" style={{ color: '#1A1A1A' }}>{label}</span>
    </div>
  )
}




export default function WhyChooseUs() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const fgPrimary = isDark ? '#FFFFFF' : '#0D0D0D'
  const fgSecondary = isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.62)'
  const fgMuted = isDark ? 'rgba(255,255,255,0.38)' : 'rgba(0,0,0,0.42)'

  const cardStyle = (bg: string, border: string): React.CSSProperties => ({
    backgroundColor: bg,
    border: `1px solid ${border}`,
    borderRadius: 20,
  })

  const cards = {
    exceptional: cardStyle(
      isDark ? '#170034' : '#FAF6FD',
      isDark ? 'rgba(128,50,229,0.28)' : 'rgba(128,50,229,0.12)',
    ),
    vision: cardStyle(
      isDark ? '#330900' : '#FDEFEC',
      isDark ? 'rgba(200,60,60,0.28)' : 'rgba(200,60,60,0.12)',
    ),
    mission: cardStyle(
      isDark ? '#330900' : '#FDEFEC',
      isDark ? 'rgba(200,60,60,0.28)' : 'rgba(200,60,60,0.12)',
    ),
    projects: cardStyle(
      isDark ? '#002918' : '#E8F8E9',
      isDark ? 'rgba(34,197,94,0.22)' : 'rgba(34,197,94,0.15)',
    ),
    dedication: cardStyle(
      isDark ? '#00153D' : '#F5F8FF',
      isDark ? 'rgba(59,130,246,0.22)' : 'rgba(59,130,246,0.15)',
    ),
    expertise: cardStyle(
      isDark ? '#0B003F' : '#FAF6FD',
      isDark ? 'rgba(128,50,229,0.22)' : 'rgba(128,50,229,0.12)',
    ),
  }

  return (
    <section
      id="why-us"
      className="py-12 sm:py-20 lg:py-28"
      style={{ backgroundColor: isDark ? '#000000' : '#FDFCFF' }}
    >
      <div className="container-base">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-3 sm:mb-4">
            <span style={{ color: isDark ? 'rgba(255,255,255,0.45)' : '#0D0D0D' }}>Why </span>
            <span className="text-gradient-why">choose us</span>
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed sm:whitespace-nowrap" style={{ color: fgSecondary }}>
            Real-world examples of how we have helped companies achieve their marketing objectives.
          </p>
        </div>

        {/* Bento — two flex columns so bottoms align naturally */}
        <div className="flex flex-col lg:flex-row gap-4">

          {/* ══ Left column (2/3) ══ */}
          <div className="flex flex-col gap-4 lg:w-[65%] 2xl:w-auto 2xl:flex-[2]">

            {/* ── 1. Exceptional Communication — 770×381 ── */}
            <div
              className="flex flex-col xl:flex-row overflow-hidden shrink-0 sm:h-[479px] xl:h-[381px]"
              style={cards.exceptional}
            >
              <div className="flex flex-col justify-between pt-4 px-5 pb-3 xl:p-8 shrink-0 xl:w-[42%] xl:h-full">
                <div className="flex flex-col gap-1.5 xl:gap-5 mt-1 xl:mt-6">
                  <h3 className="text-base xl:text-[28px] xl:text-[32px] font-bold leading-[1.2]">
                    <span style={{ color: fgPrimary }}>Exceptional </span>
                    <span style={{ color: '#8032E5' }}>Communication</span>
                  </h3>
                  <p className="text-xs xl:text-sm font-medium leading-relaxed xl:leading-loose" style={{ color: fgSecondary }}>
                    At Danapp Edge, we prioritize clear,
                    effective communication to align with
                    your goals
                  </p>
                </div>
                <a
                  href="mailto:info@danappedge.com"
                  className="inline-flex items-center gap-2 text-xs xl:text-sm font-bold transition-opacity hover:opacity-70 mt-5 xl:mt-0 mb-0 xl:mb-6"
                  style={{ color: isDark ? '#FFFFFF' : '#8032E5' }}
                >
                  Contact us
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9.5 4.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="relative overflow-hidden mx-3 mb-3 mt-0 xl:ml-0 xl:m-3 h-[220px] sm:flex-1 sm:h-auto">
                <img src="/comm-illustration.png" alt="" className="w-full h-full object-cover" style={{ borderRadius: 14 }} />
              </div>
            </div>

            {/* ── Sub-row: Our Mission + Projects/Dedication ── */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">

              {/* ── 3. Our Mission ── */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col sm:min-h-[620px] overflow-hidden xl:overflow-visible" style={cards.mission}>
                <div className="flex items-start justify-center min-h-[160px] sm:flex-1 sm:min-h-0" style={{ marginLeft: -24, marginRight: -24, marginTop: -40 }}>
                  <img
                    src={isDark ? '/mission-dark.png' : '/mission-light.png'}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base xl:text-xl font-bold mb-2 xl:mb-3" style={{ color: fgPrimary }}>Our Mission</h3>
                  <p className="text-xs xl:text-sm font-medium leading-relaxed" style={{ color: fgSecondary }}>
                    At Danapp Edge, we envision a future where digital transformation is not just a service but a catalyst for global growth
                  </p>
                </div>
              </div>

              {/* ── 4. Projects + Dedication stacked ── */}
              <div className="flex flex-col gap-4 flex-1">

                {/* Projects completed */}
                <div className="flex-1 flex flex-col overflow-hidden p-4 sm:p-6" style={cards.projects}>
                  {/* Label + 300+ — centered, positioned above icons */}
                  <div className="flex-1 flex flex-col items-center justify-end pb-8 lg:pb-16 2xl:pb-8">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#5F7660" strokeWidth="1.8" strokeLinecap="round"/>
                        <rect x="2" y="7" width="20" height="14" rx="2.5" stroke="#5F7660" strokeWidth="1.8"/>
                        <path d="M12 12v4M10 14h4" stroke="#5F7660" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                      <p style={{
                        color: '#5F7660',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: '24px',
                        letterSpacing: '-0.03em',
                      }}>Projects completed</p>
                    </div>
                    <p
                      className="text-[60px] sm:text-[96px] font-bold text-center leading-none"
                      style={isDark ? {
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(180deg, #FFFFFF 30%, #7A7A7A 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        display: 'block',
                      } : {
                        color: '#0A360D',
                        fontFamily: 'Inter, sans-serif',
                        letterSpacing: '-0.02em',
                      }}>300+</p>
                  </div>
                  {/* Icons — edge-to-edge */}
                  <img
                    src={isDark ? '/tech-icons-dark.png' : '/tech-icons.png'}
                    alt="Technologies"
                    className="block shrink-0 w-full sm:-mx-4 sm:-mb-4 sm:w-[calc(100%+32px)]"
                    style={{ maxWidth: 'none' }}
                  />
                </div>

                {/* Dedication Beyond */}
                <div className="flex-1 relative overflow-hidden flex flex-col" style={cards.dedication}>

                  {/* Swooping ribbon — S-curve, top-right to bottom-left */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 379 306"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                  >
                    <path
                      d="M 370 -10 C 480 100, -80 210, 20 340"
                      stroke={isDark ? 'rgba(99,130,230,0.10)' : '#E6EDFE'}
                      strokeWidth="48"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Heart illustration — top left */}
                  <div className="relative z-10 p-6 pb-0">
                    <img
                      src={isDark ? '/dedication-dark.png' : '/dedication-light.png'}
                      alt=""
                      className="w-[85px] h-[85px] object-contain"
                      style={{ animation: 'breathe-scale 2.8s ease-in-out infinite' }}
                    />
                  </div>

                  <div className="flex-1 min-h-[36px]" />

                  {/* Text — bottom */}
                  <div className="relative z-10 pl-4 pr-3 pt-0 pb-4 sm:pb-6">
                    <h3 className="text-base xl:text-xl font-bold mb-2 xl:mb-3" style={{ color: fgPrimary }}>Dedication Beyond</h3>
                    <p className="text-xs lg:text-[10px] xl:text-sm font-medium leading-relaxed" style={{ color: fgSecondary }}>
                      It's our unwavering dedication to your success that truly sets us apart. Your goals are our goals, and your satisfaction is our measure of achievement.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* ══ Right column (1/3) ══ */}
          <div className="flex flex-col gap-4 lg:w-[35%] 2xl:w-auto 2xl:flex-[1]">

            {/* ── 2. Our Vision — 479px fixed ── */}
            <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-10 lg:pb-4 2xl:pb-10 flex flex-col shrink-0 sm:h-[479px]" style={cards.vision}>
              <div className="flex items-center justify-center min-h-[160px] sm:flex-1 sm:min-h-0">
                <img
                  src={isDark ? '/light-bulb-dark.png' : '/light-bulb-light.png'}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base xl:text-xl font-bold mb-2 xl:mb-3" style={{ color: fgPrimary }}>Our Vision</h3>
                <p className="text-xs xl:text-sm font-medium leading-relaxed" style={{ color: fgSecondary }}>
                  At Danapp Edge, we envision a future where digital transformation is not just a service but a catalyst for global growth
                </p>
              </div>
            </div>

            {/* ── 5. Unparalleled Expertise — flex-1 fills remaining height ── */}
            <div className="flex-1 p-6 flex flex-col gap-4 relative overflow-hidden" style={cards.expertise}>

              {/* Paper plane — behind avatars, large so built-in dotted trail reaches left edge */}
              <img
                src={isDark ? '/paper-plane-dark.png' : '/paper-plane-light.png'}
                alt=""
                className="absolute pointer-events-none"
                style={{
                  width: 'calc(100% + 48px)',
                  marginLeft: -24,
                  top: '28%',
                  zIndex: 1,
                  transform: 'rotate(10deg)',
                  transformOrigin: 'right center',
                }}
              />

              {/* Creative avatar cluster — above the plane */}
              <div className="flex-1 flex items-center justify-center" style={{ position: 'relative', zIndex: 5 }}>
                <div className="flex items-end justify-center">
                  {/* Blue guy — left */}
                  <div style={{
                    width: 108, height: 108, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                    border: `3px solid ${isDark ? 'rgba(255,255,255,0.14)' : '#FFFFFF'}`,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                    position: 'relative', zIndex: 1, marginRight: -24,
                  }}>
                    <img src="/blue-guy.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  {/* Pink lady — center, largest & elevated */}
                  <div style={{
                    width: 140, height: 140, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                    border: `3px solid ${isDark ? 'rgba(255,255,255,0.20)' : '#FFFFFF'}`,
                    boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
                    position: 'relative', zIndex: 3, marginBottom: 22,
                  }}>
                    <img src="/pink-lady.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  {/* Green guy — right */}
                  <div style={{
                    width: 108, height: 108, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                    border: `3px solid ${isDark ? 'rgba(255,255,255,0.14)' : '#FFFFFF'}`,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.14)',
                    position: 'relative', zIndex: 2, marginLeft: -24,
                  }}>
                    <img src="/green-guy.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>

              {/* Title + subtitle — BOTTOM */}
              <div
                className="mt-auto relative z-10 bg-[var(--expertise-bg)] sm:bg-transparent rounded-b-[18px]"
                style={{ '--expertise-bg': isDark ? '#0B003F' : '#FAF6FD' } as React.CSSProperties}
              >
                <h3 className="text-base xl:text-xl font-bold mb-2 xl:mb-3" style={{ color: fgPrimary }}>Unparalleled Expertise</h3>
                <p className="text-xs xl:text-sm font-medium leading-relaxed" style={{ color: fgSecondary }}>
                  Danapp Edge boasts a team of seasoned professionals, each an expert in their respective field.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
