import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const STEPS = [
  {
    title: 'Discover',
    subtitle: 'Research, analyse and define project goals.',
    tags: ['Research & Analysis', 'Business Goals', 'User Personas'],
  },
  {
    title: 'Design',
    subtitle: 'Craft intuitive, pixel-perfect interfaces.',
    tags: ['Wireframing', 'Prototyping', 'UI/UX'],
  },
  {
    title: 'Develop',
    subtitle: 'Build scalable, high-performance solutions.',
    tags: ['Engineering', 'QA Testing', 'Code Review'],
  },
  {
    title: 'Deliver',
    subtitle: 'Deploy, monitor and support growth.',
    tags: ['Deployment', 'Analytics', 'Ongoing Support'],
  },
]

/* ── Inline SVG illustrations for each step ── */
function StepIllustration({ step, active, isDark }: { step: number; active: boolean; isDark: boolean }) {
  const stroke = active ? '#FFFFFF' : isDark ? '#4A4A4A' : '#CCCCCC'
  const accent1 = active ? '#FD5E3C' : isDark ? '#3A3A3A' : '#BBBBBB'
  const accent2 = active ? '#C5A5EE' : isDark ? '#3A3A3A' : '#BBBBBB'
  const fillBg = active ? 'rgba(255,255,255,0.10)' : 'rgba(128,128,128,0.04)'

  /* Discover — magnifying glass with dots */
  if (step === 0) return (
    <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
      <circle cx="50" cy="50" r="30" stroke={stroke} strokeWidth="5" fill={fillBg} />
      <line x1="73" y1="73" x2="100" y2="100" stroke={stroke} strokeWidth="8" strokeLinecap="round" />
      <circle cx="43" cy="43" r="5" fill={accent1} />
      <circle cx="57" cy="38" r="3.5" fill={accent2} opacity="0.85" />
      <circle cx="60" cy="56" r="4.5" fill={accent1} opacity="0.75" />
      <circle cx="44" cy="59" r="3" fill={accent2} opacity="0.65" />
      <circle cx="50" cy="50" r="18" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" />
    </svg>
  )

  /* Design — pencil + palette circles */
  if (step === 1) return (
    <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
      <rect x="51" y="10" width="18" height="70" rx="4" stroke={stroke} strokeWidth="4" fill={fillBg} />
      <rect x="51" y="10" width="18" height="14" rx="3" fill={stroke} opacity="0.3" />
      <path d="M51 80 L60 100 L69 80Z" fill={accent2} />
      <line x1="51" y1="32" x2="69" y2="32" stroke={stroke} strokeWidth="2" opacity="0.4" />
      <circle cx="26" cy="82" r="9" stroke={accent1} strokeWidth="3" fill="none" />
      <circle cx="26" cy="82" r="3.5" fill={accent1} />
      <circle cx="50" cy="108" r="7" stroke={accent2} strokeWidth="3" fill="none" />
      <circle cx="50" cy="108" r="3" fill={accent2} />
      <circle cx="94" cy="82" r="9" stroke={accent2} strokeWidth="3" fill="none" />
      <circle cx="94" cy="82" r="3.5" fill={accent2} />
    </svg>
  )

  /* Develop — code brackets + slash */
  if (step === 2) return (
    <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
      <path d="M44 25 L14 60 L44 95" stroke={stroke} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M76 25 L106 60 L76 95" stroke={stroke} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="72" y1="15" x2="48" y2="105" stroke={accent1} strokeWidth="5.5" strokeLinecap="round" />
      <circle cx="18" cy="42" r="3" fill={stroke} opacity="0.4" />
      <circle cx="102" cy="42" r="3" fill={stroke} opacity="0.4" />
    </svg>
  )

  /* Deliver — rocket */
  return (
    <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
      <path d="M60 8 C42 26 37 56 41 82 L60 92 L79 82 C83 56 78 26 60 8Z" stroke={stroke} strokeWidth="4.5" fill={fillBg} />
      <circle cx="60" cy="52" r="10" stroke={stroke} strokeWidth="3" fill={accent2} opacity={active ? 0.75 : 0.4} />
      <path d="M50 87 Q46 106 60 103 Q74 106 70 87" fill={accent1} opacity="0.85" />
      <path d="M41 70 L26 88 L41 82Z" fill={stroke} opacity="0.5" />
      <path d="M79 70 L94 88 L79 82Z" fill={stroke} opacity="0.5" />
      <circle cx="60" cy="108" r="2.5" fill={accent1} opacity="0.5" />
      <circle cx="60" cy="116" r="1.5" fill={accent1} opacity="0.3" />
    </svg>
  )
}

const glassEdges = [
  'inset 0 1px 0 rgba(255,255,255,0.38)',
  'inset 1px 0 0 rgba(255,255,255,0.16)',
  'inset -1px 0 0 rgba(255,255,255,0.08)',
  'inset 0 -1px 0 rgba(255,255,255,0.06)',
  '0 24px 64px rgba(70,15,144,0.38)',
].join(', ')

const glassEdgesMobile = [
  'inset 0 1px 0 rgba(255,255,255,0.38)',
  'inset 1px 0 0 rgba(255,255,255,0.16)',
  'inset -1px 0 0 rgba(255,255,255,0.08)',
  'inset 0 -1px 0 rgba(255,255,255,0.06)',
].join(', ')

export default function Process() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section
      id="process"
      className="pt-10 pb-6 lg:py-28"
      style={{ backgroundColor: isDark ? '#000000' : '#FFFFFF' }}
    >
      <div className="container-base">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-4">
            <span className="text-gradient-process-our">Our</span>
            {' '}
            <span className="text-gradient-process-word">process</span>
          </h2>
          <p
            className="text-sm leading-relaxed max-w-3xl mx-auto"
            style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}
          >
            At Danapp Edge, we are at the forefront of technology, driving innovation and delivering cost-effective solutions that empower businesses to overcome challenges and unlock the full spectrum of customer value.
          </p>
        </div>

        {/* ── Desktop: expanding horizontal cards ── */}
        {/* paddingTop: 26 gives room for the number badge that straddles each card's top edge */}
        <div className="hidden lg:flex gap-3" style={{ paddingTop: 26 }}>
          {STEPS.map((step, idx) => {
            const isActive = idx === activeIdx

            /* Active card: glass + smoothly blended gradient */
            const activeStyle = {
              background: isDark
                ? 'linear-gradient(155deg, #1E0660 0%, #150448 10%, #0E0230 22%, #090018 38%, #090014 58%, #090014 100%)'
                : 'linear-gradient(155deg, #C5A5EE 0%, #B07AE8 10%, #9861E0 22%, #7B42C8 36%, #5E20A2 50%, #460F90 64%, #3B0D78 80%, #2E0A5E 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.22)',
              boxShadow: glassEdges,
            }

            const inactiveStyle = {
              /* Matches section background — glass border is the only differentiator */
              background: isDark ? '#000000' : '#FFFFFF',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)'}`,
              boxShadow: isDark
                ? 'inset 0 1px 0 rgba(255,255,255,0.07), inset 1px 0 0 rgba(255,255,255,0.04)'
                : 'inset 0 1px 0 rgba(255,255,255,0.60), inset 1px 0 0 rgba(255,255,255,0.30)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }

            return (
              /* Wrapper carries the flex-grow so the badge moves with the card */
              <div
                key={step.title}
                className="relative"
                style={{
                  flexGrow: isActive ? 3.5 : 1,
                  flexShrink: 1,
                  flexBasis: 0,
                  minWidth: 0,
                  transition: 'flex-grow 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* ── Number badge — sits centred on the card's top edge ── */}
                <div
                  className="absolute left-1/2 z-20 flex items-center justify-center font-bold"
                  style={{
                    top: 0,
                    transform: 'translate(-50%, -50%)',
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: isDark ? '#111111' : '#FFFFFF',
                    border: `1.5px solid ${isActive
                      ? 'rgba(197,165,238,0.55)'
                      : isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.10)'}`,
                    boxShadow: isActive
                      ? '0 0 0 4px rgba(70,15,144,0.18)'
                      : isDark ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
                    fontSize: 14,
                    lineHeight: 1,
                    color: '#FD5E3C',
                  }}
                >
                  {idx + 1}
                </div>

                {/* ── Card ── */}
                <div
                  className="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                  style={{
                    height: 520,
                    transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                    ...(isActive ? activeStyle : inactiveStyle),
                  }}
                  onMouseEnter={() => setActiveIdx(idx)}
                >
                  {isActive ? (
                    <>
                      {/* ── Decorative background layer ── */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">

                        {/* Shimmer sparkle dots */}
                        {([
                          { top: '7%',  left: '78%', size: 2.5, dur: 2.2, delay: 0   },
                          { top: '4%',  left: '90%', size: 1.5, dur: 3.1, delay: 0.9 },
                          { top: '22%', left: '94%', size: 2,   dur: 2.7, delay: 1.5 },
                          { top: '40%', left: '88%', size: 1.5, dur: 2.4, delay: 0.3 },
                          { top: '58%', left: '92%', size: 2,   dur: 3.0, delay: 1.9 },
                          { top: '74%', left: '80%', size: 1.5, dur: 2.6, delay: 0.7 },
                          { top: '88%', left: '88%', size: 2,   dur: 2.9, delay: 1.2 },
                          { top: '12%', left: '8%',  size: 1.5, dur: 2.8, delay: 1.0 },
                          { top: '30%', left: '4%',  size: 2,   dur: 3.3, delay: 0.5 },
                          { top: '65%', left: '6%',  size: 1.5, dur: 2.5, delay: 1.7 },
                          { top: '82%', left: '14%', size: 2,   dur: 2.1, delay: 0.2 },
                          { top: '48%', left: '50%', size: 1.5, dur: 3.4, delay: 2.0 },
                          { top: '18%', left: '38%', size: 1.5, dur: 2.6, delay: 0.4 },
                          { top: '35%', left: '62%', size: 2,   dur: 3.0, delay: 1.1 },
                          { top: '52%', left: '28%', size: 1.5, dur: 2.3, delay: 1.8 },
                          { top: '70%', left: '44%', size: 2,   dur: 2.8, delay: 0.6 },
                          { top: '14%', left: '56%', size: 1.5, dur: 3.2, delay: 1.3 },
                          { top: '91%', left: '32%', size: 2,   dur: 2.4, delay: 0.8 },
                          { top: '6%',  left: '44%', size: 1.5, dur: 2.9, delay: 2.1 },
                          { top: '60%', left: '70%', size: 2,   dur: 3.1, delay: 0.1 },
                          { top: '44%', left: '18%', size: 1.5, dur: 2.7, delay: 1.6 },
                          { top: '78%', left: '58%', size: 2,   dur: 3.3, delay: 0.9 },
                          { top: '26%', left: '74%', size: 1.5, dur: 2.5, delay: 2.3 },
                          { top: '96%', left: '60%', size: 1.5, dur: 2.2, delay: 1.4 },
                        ] as const).map((dot, i) => (
                          <div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                              top: dot.top, left: dot.left,
                              width: dot.size, height: dot.size,
                              backgroundColor: 'rgba(255,255,255,0.35)',
                              animation: `twinkle ${dot.dur}s ease-in-out ${dot.delay}s infinite`,
                            }}
                          />
                        ))}

                        {/* Paper plane with dotted trail — same asset as WhyChooseUs expertise card */}
                        <img
                          src="/paper-plane-dark.png"
                          alt=""
                          style={{
                            position: 'absolute',
                            bottom: '26%',
                            left: '-32%',
                            width: '62%',
                            transform: 'rotate(12deg)',
                            transformOrigin: 'left center',
                            opacity: 0.18,
                          }}
                        />

                        {/* Box 1 — upper area, bleeds off right edge */}
                        <div style={{
                          position: 'absolute',
                          top: '31%',
                          right: -18,
                          width: 108,
                          height: 34,
                          borderRadius: 10,
                          border: '1px solid rgba(255,255,255,0.10)',
                          backgroundColor: 'rgba(255,255,255,0.02)',
                          transform: 'rotate(-5deg)',
                        }} />

                        {/* Box 2 — lower area, bleeds off right edge at different angle */}
                        <div style={{
                          position: 'absolute',
                          top: '54%',
                          right: -22,
                          width: 112,
                          height: 34,
                          borderRadius: 10,
                          border: '1px solid rgba(255,255,255,0.09)',
                          backgroundColor: 'rgba(255,255,255,0.02)',
                          transform: 'rotate(6deg)',
                        }} />

                      </div>

                      {/* ── Content layer (above decorations) ── */}
                      <div className="relative flex flex-col h-full p-6 pt-7" style={{ zIndex: 10 }}>

                        {/* Pill tags — spread full card width when active */}
                        <div className="flex gap-2 shrink-0">
                          {step.tags.map(tag => (
                            <span
                              key={tag}
                              className="flex-1 text-center py-1.5 rounded-full text-xs font-semibold"
                              style={isDark ? {
                                backgroundColor: 'rgba(255,255,255,0.14)',
                                border: '1px solid rgba(255,255,255,0.22)',
                                color: '#FFFFFF',
                              } : {
                                backgroundColor: '#FFFFFF',
                                border: '1px solid rgba(0,0,0,0.10)',
                                color: '#1A1A1A',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Spacer — keeps title pinned to bottom */}
                        <div className="flex-1" />

                        {/* Title + subtitle — left half only */}
                        <div className="shrink-0" style={{ maxWidth: '50%' }}>
                          <h3 className="text-[26px] font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            {step.title}
                          </h3>
                          <p className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.68)' }}>
                            {step.subtitle}
                          </p>
                        </div>

                      </div>
                    </>
                  ) : (
                    /* ── Inactive card content ── */
                    <div className="flex flex-col h-full pt-7 pb-5 px-3 items-center justify-end overflow-hidden">

                      {/* Title only — no illustration */}
                      <span
                        className="text-xs font-bold shrink-0 text-center block"
                        style={{ color: isDark ? 'rgba(255,255,255,0.38)' : 'rgba(0,0,0,0.38)' }}
                      >
                        {step.title}
                      </span>

                    </div>
                  )}
                </div>

                {/* ── 3D icon — outside card, drops below boundary ── */}
                {isActive && (
                  <img
                    src={`/${step.title.toLowerCase()}.png`}
                    alt={step.title}
                    className="absolute pointer-events-none"
                    style={{
                      width: step.title === 'Discover' ? '118%' : step.title === 'Design' ? '120%' : step.title === 'Develop' ? '88%' : '105%',
                      height: 'auto',
                      zIndex: 15,
                      filter: 'drop-shadow(0 28px 18px rgba(0,0,0,0.55))',
                      ...(step.title === 'Discover' ? {
                        right: -150,
                        bottom: -110,
                        transform: 'scaleX(-1)',
                      } : step.title === 'Design' ? {
                        right: -140,
                        bottom: -110,
                      } : step.title === 'Develop' ? {
                        right: -110,
                        bottom: -110,
                      } : {
                        right: -190,
                        bottom: -110,
                        transform: 'scaleX(-1)',
                      }),
                    }}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* ── Mobile: horizontal snap carousel ── */}
        <div
          className="flex gap-4 lg:hidden overflow-x-auto snap-x snap-mandatory"
          style={{
            paddingTop: 26,
            paddingBottom: 16,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            backgroundColor: isDark ? '#000000' : '#FFFFFF',
          }}
        >
          {STEPS.map((step, idx) => (
            <div key={step.title} className="relative shrink-0 snap-start pb-10" style={{ width: 'calc(85vw - 16px)' }}>

              {/* Number badge — centred on top edge */}
              <div
                className="absolute left-1/2 z-20 flex items-center justify-center font-bold"
                style={{
                  top: 0,
                  transform: 'translate(-50%, -50%)',
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: isDark ? '#111111' : '#FFFFFF',
                  border: '1.5px solid rgba(197,165,238,0.55)',
                  boxShadow: '0 0 0 4px rgba(70,15,144,0.18)',
                  fontSize: 14,
                  lineHeight: 1,
                  color: '#FD5E3C',
                }}
              >
                {idx + 1}
              </div>

              {/* Card */}
              <div
                className="relative rounded-2xl overflow-hidden flex flex-col"
                style={{
                  height: 420,
                  background: isDark
                    ? 'linear-gradient(155deg, #1E0660 0%, #150448 10%, #0E0230 22%, #090018 38%, #090014 58%, #090014 100%)'
                    : 'linear-gradient(155deg, #C5A5EE 0%, #B07AE8 10%, #9861E0 22%, #7B42C8 36%, #5E20A2 50%, #460F90 64%, #3B0D78 80%, #2E0A5E 100%)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  boxShadow: glassEdgesMobile,
                }}
              >
                {/* Sparkle dots */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {([
                    { top: '7%',  left: '78%', size: 2.5, dur: 2.2, delay: 0   },
                    { top: '4%',  left: '90%', size: 1.5, dur: 3.1, delay: 0.9 },
                    { top: '22%', left: '94%', size: 2,   dur: 2.7, delay: 1.5 },
                    { top: '74%', left: '80%', size: 1.5, dur: 2.6, delay: 0.7 },
                    { top: '12%', left: '8%',  size: 1.5, dur: 2.8, delay: 1.0 },
                    { top: '65%', left: '6%',  size: 1.5, dur: 2.5, delay: 1.7 },
                  ] as const).map((dot, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        top: dot.top, left: dot.left,
                        width: dot.size, height: dot.size,
                        backgroundColor: 'rgba(255,255,255,0.35)',
                        animation: `twinkle ${dot.dur}s ease-in-out ${dot.delay}s infinite`,
                      }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="relative flex flex-col h-full p-5 pt-7" style={{ zIndex: 10 }}>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 shrink-0">
                    {step.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={isDark ? {
                          backgroundColor: 'rgba(255,255,255,0.14)',
                          border: '1px solid rgba(255,255,255,0.22)',
                          color: '#FFFFFF',
                        } : {
                          backgroundColor: '#FFFFFF',
                          border: '1px solid rgba(0,0,0,0.10)',
                          color: '#1A1A1A',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex-1" />

                  {/* Title + subtitle — bottom left */}
                  <div className="shrink-0" style={{ maxWidth: '55%' }}>
                    <h3 className="text-2xl font-bold mb-1.5" style={{ color: '#FFFFFF' }}>
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
                      {step.subtitle}
                    </p>
                  </div>
                </div>

              </div>

              {/* 3D illustration — outside card so it drops below boundary */}
              <img
                src={`/${step.title.toLowerCase()}.png`}
                alt={step.title}
                className="absolute pointer-events-none"
                style={{
                  width: step.title === 'Discover' ? '88%' : step.title === 'Design' ? '90%' : step.title === 'Develop' ? '78%' : '85%',
                  height: 'auto',
                  zIndex: 15,
                  filter: 'drop-shadow(0 20px 14px rgba(0,0,0,0.50))',
                  right: step.title === 'Discover' ? -40 : step.title === 'Design' ? -35 : step.title === 'Develop' ? -30 : -45,
                  bottom: 30,
                  transform: (step.title === 'Discover' || step.title === 'Deliver') ? 'scaleX(-1)' : undefined,
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
