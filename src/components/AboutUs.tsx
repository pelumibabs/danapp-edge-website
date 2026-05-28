import { useTheme } from '../contexts/ThemeContext'

function EmojiPill({ emoji, isDark }: { emoji: string; isDark: boolean }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: isDark ? 'rgba(255,255,255,0.08)' : '#FFFFFF',
        border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)',
        boxShadow: isDark ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
        fontSize: 20,
        verticalAlign: 'middle',
        margin: '0 4px',
        flexShrink: 0,
      }}
    >
      {emoji}
    </span>
  )
}

export default function AboutUs() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: isDark ? '#000000' : '#FDFCFF' }}
    >
      {/* Grid — visible around text, fades to nothing at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`
            : `linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)`,
          backgroundSize: '77px 77px',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 75%)',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, black 20%, transparent 75%)',
        }}
      />

      {/* Orange glow — left side of text, drifting */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          width: 420,
          height: 360,
          background: isDark
            ? 'radial-gradient(ellipse, rgba(253,94,60,0.13) 0%, transparent 65%)'
            : 'radial-gradient(ellipse, rgba(253,94,60,0.09) 0%, transparent 65%)',
          borderRadius: '50%',
          animation: 'glow-drift-orange 8s ease-in-out infinite',
        }}
      />

      {/* Purple glow — right side of text, drifting */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          width: 420,
          height: 360,
          background: isDark
            ? 'radial-gradient(ellipse, rgba(128,50,229,0.13) 0%, transparent 65%)'
            : 'radial-gradient(ellipse, rgba(128,50,229,0.08) 0%, transparent 65%)',
          borderRadius: '50%',
          animation: 'glow-drift-purple 8s ease-in-out infinite',
        }}
      />

      <div className="container-base relative z-10 flex flex-col items-center text-center">

        {/* Title */}
        <h2
          className="text-5xl sm:text-6xl lg:text-[72px] font-bold mb-10 leading-tight"
          style={isDark ? {
            background: 'linear-gradient(180deg, #FFFFFF 30%, #7A7A7A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          } : {
            color: '#0D0D0D',
          }}
        >
          About us
        </h2>

        {/* Body text */}
        <p
          className="text-2xl sm:text-3xl lg:text-[32px] font-semibold max-w-6xl mx-auto mb-14"
          style={{ lineHeight: 1.7, letterSpacing: '0.01em' }}
        >
          <span style={{
            background: 'linear-gradient(90deg, #FD5E3C 0%, #8032E5 60%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            At Danapp Edge, we are at the forefront of technology
          </span>
          <EmojiPill emoji="💡" isDark={isDark} />
          <span style={{
            background: 'linear-gradient(90deg, #8032E5 0%, #8032E5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            , driving innovation
          </span>
          <EmojiPill emoji="⚙️" isDark={isDark} />
          <span style={{ color: isDark ? 'rgba(255,255,255,0.45)' : '#1A1A1A' }}>
            {' '}and delivering cost-effective solutions that empower businesses
          </span>
          <EmojiPill emoji="💼" isDark={isDark} />
          <span style={{ color: isDark ? 'rgba(255,255,255,0.45)' : '#1A1A1A' }}>
            to overcome challenges
          </span>
        </p>

        {/* CTA — matches hero button */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-85"
          style={isDark
            ? { backgroundColor: '#FFFFFF', color: '#141414' }
            : { background: 'linear-gradient(180deg, #141414 0%, #3F3F3F 100%)', color: '#FFFFFF' }
          }
        >
          Schedule a call
        </a>

      </div>
    </section>
  )
}
