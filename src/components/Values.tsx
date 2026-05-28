import { useTheme } from '../contexts/ThemeContext'

export default function Values() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="values"
      className="py-20 lg:py-28"
      style={{ backgroundColor: isDark ? '#000000' : '#FDFCFF' }}
    >
      <div className="container-base">

        {/* ── Heading ── */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-4">
            <span className="text-gradient-process-our">Values that</span>{' '}
            <span className="text-gradient-why">differentiate</span>
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}
          >
            Our core values shape every decision, every line of code, and every client relationship we build.
          </p>
        </div>

        {/* ── Values diagram — theme-aware image ── */}
        <div className="w-full">
          <img
            src={isDark ? '/values-dark.png' : '/values-light.png'}
            alt="Values that differentiate"
            className="w-full h-auto"
            draggable={false}
          />
        </div>

      </div>
    </section>
  )
}
