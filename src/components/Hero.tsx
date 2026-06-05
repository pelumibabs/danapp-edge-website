import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const WORDS = ['Expertise', 'Innovation', 'Vision']

const DOTS: Array<{
  color: string; top?: string; bottom?: string; left?: string; right?: string; size: number; delay: number; dur: number
}> = [
  { color: '#FD5E3C', top: '27%', left: '7%',   size: 8, delay: 0,   dur: 4.2 },
  { color: '#8032E5', top: '31%', left: '20%',   size: 5, delay: 1.0, dur: 5.3 },
  { color: '#8032E5', top: '13%', right: '9%',   size: 6, delay: 0.5, dur: 4.6 },
  { color: '#FD5E3C', top: '54%', right: '13%',  size: 5, delay: 2.7, dur: 4.1 },
  { color: '#8032E5', top: '58%', right: '7%',   size: 8, delay: 2.2, dur: 3.8 },
  { color: '#FD5E3C', top: '61%', left: '5%',    size: 6, delay: 1.8, dur: 5.0 },
]

// Placeholder logos — sized to match Figma's trust strip
function ShieldLogo({ muted }: { muted: boolean }) {
  return (
    <div className="flex items-center gap-2" style={{ opacity: muted ? 0.55 : 0.75 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 6.5v5c0 5.25 3.84 10.15 9 11.5 5.16-1.35 9-6.25 9-11.5v-5L12 2z"/>
      </svg>
      <span className="text-base font-semibold tracking-tight">Logoipsum</span>
    </div>
  )
}

function BarsLogo({ muted }: { muted: boolean }) {
  return (
    <div className="flex items-end gap-[3.5px]" style={{ opacity: muted ? 0.55 : 0.75 }}>
      {[12, 20, 14, 24, 16, 12, 22].map((h, i) => (
        <div key={i} style={{ width: 3.5, height: h, borderRadius: 2 }} className="bg-current" />
      ))}
    </div>
  )
}

function CircleLogo({ muted }: { muted: boolean }) {
  return (
    <div className="flex items-center gap-2" style={{ opacity: muted ? 0.55 : 0.75 }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="4"/>
        <line x1="12" y1="3" x2="12" y2="8"/>
        <line x1="12" y1="16" x2="12" y2="21"/>
      </svg>
      <span className="text-base font-semibold tracking-tight">Logoipsum</span>
    </div>
  )
}

function SplitLogo({ muted }: { muted: boolean }) {
  return (
    <div className="flex items-center gap-2" style={{ opacity: muted ? 0.55 : 0.75 }}>
      <span className="text-base font-semibold tracking-tight">logo</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
      <span className="text-base font-semibold tracking-tight">ipsum</span>
    </div>
  )
}

function WaveLogo({ muted }: { muted: boolean }) {
  return (
    <div className="flex items-center gap-2" style={{ opacity: muted ? 0.55 : 0.75 }}>
      <svg width="28" height="16" viewBox="0 0 36 14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        <path d="M2 10 C6 4, 10 4, 14 10 C18 16, 22 4, 26 10 C30 16, 34 10, 34 10"/>
      </svg>
      <span className="text-base font-semibold tracking-tight">Logoipsum</span>
    </div>
  )
}

const LOGOS = [ShieldLogo, BarsLogo, CircleLogo, SplitLogo, WaveLogo]

const expertiseBoxShadow = [
  '0 0 0 1px rgba(253,94,60,0.18)',
  '0 8px 28px rgba(253,94,60,0.22)',
  '0 28px 80px rgba(253,94,60,0.16)',
].join(', ')

export default function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [wordIdx, setWordIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing')

  useEffect(() => {
    const word = WORDS[wordIdx]

    if (phase === 'typing') {
      if (displayed.length < word.length) {
        const id = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(id)
      }
      const id = setTimeout(() => setPhase('pause'), 1800)
      return () => clearTimeout(id)
    }

    if (phase === 'pause') {
      const id = setTimeout(() => setPhase('deleting'), 300)
      return () => clearTimeout(id)
    }

    if (phase === 'deleting') {
      if (displayed.length > 0) {
        const id = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
        return () => clearTimeout(id)
      }
      setWordIdx((i) => (i + 1) % WORDS.length)
      setPhase('typing')
    }
  }, [displayed, phase, wordIdx])

  return (
    <section
      id="home"
      className="relative xl:min-h-screen flex flex-col items-center pt-24 sm:pt-32 pb-0 overflow-hidden"
      style={{ backgroundColor: isDark ? '#000000' : '#FFF9F6' }}
    >
      {/* ── Floating accent dots ── */}
      {DOTS.map((d, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: d.top, bottom: d.bottom, left: d.left, right: d.right,
            width: d.size, height: d.size,
            backgroundColor: d.color,
            animation: `float-dot ${d.dur}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}

      <div className="container-base relative z-10 flex flex-col items-center text-center w-full">

        {/* ── Badge ── */}
        <div
          className="inline-flex items-center gap-1 sm:gap-2 rounded-full px-2 sm:px-4 py-1 sm:py-2 mb-5 sm:mb-8"
          style={{
            backgroundColor: isDark ? '#111119' : '#FFEEE0',
            border: isDark ? '1px solid rgba(255,255,255,0.12)' : 'none',
          }}
        >
          <span
            className="flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 rounded-full text-white text-[10px] sm:text-sm font-bold shrink-0"
            style={{ backgroundColor: '#FD5E3C' }}
          >
            $
          </span>
          <span className="text-[10px] sm:text-sm font-semibold" style={{ color: isDark ? 'rgba(255,255,255,0.85)' : '#0D0D0D' }}>
            We have helped businesses raise over $1M in revenue
          </span>
        </div>

        {/* ── Headline (grid only here) ── */}
        <div className="relative mb-4 sm:mb-6">
          <div
            className="absolute -inset-x-12 -inset-y-6 pointer-events-none bg-grid"
            style={{ opacity: isDark ? 0.45 : 0.55 }}
          />
          <h1
            className="relative text-[26px] sm:text-5xl lg:text-[64px] xl:text-[72px] font-semibold leading-[1.15] tracking-tight"
            style={{ color: isDark ? '#FFFFFF' : '#1A0800' }}
          >
            <span
              className="block mb-2 sm:mb-5 pb-1 sm:pb-2"
              style={isDark ? {
                background: 'linear-gradient(180deg, #FFFFFF 30%, #7A7A7A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              } : {}}
            >Stay ahead of the curve</span>
            <span className="inline-flex items-baseline gap-2 sm:gap-6 flex-wrap justify-center">
              <span
                style={isDark ? {
                  background: 'linear-gradient(180deg, #FFFFFF 30%, #7A7A7A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                } : {}}
              >with our</span>

              {/* ── Rotating word in orange-shadow box ── */}
              <span
                className="inline-block px-3 sm:px-7 pt-1 sm:pt-2 pb-2 sm:pb-4 rounded-xl"
                style={{
                  border: isDark
                    ? `1.5px solid rgba(253,94,60,0.45)`
                    : `1px solid rgba(253,94,60,0.22)`,
                  backgroundColor: isDark ? 'rgba(253,94,60,0.06)' : 'rgba(253,94,60,0.04)',
                  boxShadow: expertiseBoxShadow,
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #FD5E3C 0%, #8032E5 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      display: 'inline-block',
                    }}
                  >
                    {displayed}
                  </span>
                  <span
                    style={{
                      display: 'inline-block',
                      width: '3px',
                      borderRadius: '2px',
                      height: '0.8em',
                      marginLeft: '3px',
                      background: 'linear-gradient(180deg, #FD5E3C, #8032E5)',
                      animation: 'cursor-blink 0.8s step-end infinite',
                      verticalAlign: 'middle',
                    }}
                  />
                </span>
              </span>
            </span>
          </h1>
        </div>

        {/* ── Subtitle ── */}
        <p
          className="text-xs sm:text-lg leading-relaxed mb-5 sm:mb-8 max-w-2xl px-2 sm:px-0"
          style={{ color: isDark ? 'rgba(255,255,255,0.6)' : '#0D0D0D' }}
        >
          We design, build, and scale intelligent digital products through software engineering, exceptional design, and AI-powered solutions.
        </p>

        {/* ── CTA ── */}
        <a
          href="mailto:info@danappedge.com"
          className="inline-flex items-center justify-center w-auto px-6 py-2.5 sm:w-auto sm:px-8 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 hover:opacity-85 mb-8 sm:mb-14"
          style={
            isDark
              ? { backgroundColor: '#FFFFFF', color: '#141414', border: 'none' }
              : { background: 'linear-gradient(180deg, #141414 0%, #3F3F3F 100%)', color: '#FFFFFF', border: 'none' }
          }
        >
          Contact us
        </a>

        {/* ── Video placeholder ── */}
        <div
          className="w-full max-w-[1200px] rounded-2xl overflow-hidden relative flex items-center justify-center"
          style={{
            aspectRatio: '16 / 8',
            border: `1px solid rgba(253,94,60,0.28)`,
            boxShadow: isDark
              ? `inset 0 0 0 2px rgba(253,94,60,0.05)`
              : `inset 0 0 0 5px rgba(253,94,60,0.10)`,
            backgroundColor: isDark ? '#0D0D0D' : '#FFF0E4',
          }}
        >
          {/* Breathing play button */}
          <div
            className="rounded-full flex items-center justify-center"
            style={{
              width: 88,
              height: 88,
              backgroundColor: isDark ? 'rgba(255,255,255,0.09)' : 'rgba(253,94,60,0.14)',
              animation: 'breathe 2.4s ease-in-out infinite',
            }}
          >
            {/* Inner ring */}
            <div
              className="rounded-full flex items-center justify-center"
              style={{
                width: 64,
                height: 64,
                backgroundColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(253,94,60,0.18)',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5.5L18 12L8 18.5V5.5Z" fill={isDark ? '#FFFFFF' : '#C0501A'} />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Trusted by ── */}
        <div className="w-full mt-8 sm:mt-12 pb-8 sm:pb-16">
          <p
            className="text-sm font-semibold mb-6 text-center"
            style={{ color: isDark ? 'rgba(255,255,255,0.5)' : '#0D0D0D' }}
          >
            Trusted by:
          </p>
          <div className="overflow-hidden">
            <div className="marquee-track-reverse">
              {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((Logo, i) => (
                <div key={i} className="px-6 sm:px-12 shrink-0" style={{ color: isDark ? '#FFFFFF' : '#0D0D0D' }}>
                  <Logo muted />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
