import { useTheme } from '../contexts/ThemeContext'

const ROW1 = [
  { id: 1, title: 'Fintech Dashboard', description: 'A fintech platform for cross-border credit migration.', image: '/fintech-dashboard.png', span: 'large' },
  { id: 2, title: 'Food app',          description: 'An intuitive food discovery and delivery application.', image: '/food-app.png',          span: 'small' },
]

const ROW2 = [
  { id: 3, title: 'E-commerce', description: 'Full-featured online shopping experience.',           image: '/e-commerce.png' },
  { id: 4, title: 'Logistics',  description: 'Real-time logistics and delivery tracking platform.', image: '/logistics.png'  },
  { id: 5, title: 'HealthCare', description: 'Telehealth and appointment scheduling.',              image: '/healthcare.png' },
]

const ROW3 = [
  { id: 6, title: 'Agriculture', description: 'Smart agriculture marketplace and analytics dashboard.',  image: '/agriculture.png', span: 'large' },
  { id: 7, title: 'Fintech',     description: 'Real-time rent reporting and credit scoring platform.',   image: '/fintech.png',      span: 'small' },
]

const SHIMMER_DOTS = [
  { top: '6%',  left: '92%', size: 2,   dur: 2.4, delay: 0   },
  { top: '14%', left: '82%', size: 1.5, dur: 3.1, delay: 0.8 },
  { top: '28%', left: '96%', size: 1.5, dur: 2.7, delay: 1.6 },
  { top: '52%', left: '88%', size: 2,   dur: 3.3, delay: 0.4 },
  { top: '72%', left: '94%', size: 1.5, dur: 2.5, delay: 1.2 },
  { top: '8%',  left: '6%',  size: 1.5, dur: 2.9, delay: 2.0 },
  { top: '40%', left: '4%',  size: 2,   dur: 2.2, delay: 0.6 },
  { top: '88%', left: '10%', size: 1.5, dur: 3.0, delay: 1.4 },
]

function ProjectCard({
  title, description, image, isDark, imageHeight,
}: {
  title: string; description: string; image: string; isDark: boolean; imageHeight: number
}) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        /* Glass — barely lifted from the page bg */
        backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.60)',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.06)'}`,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: isDark
          ? 'inset 0 1px 0 rgba(255,255,255,0.05)'
          : 'inset 0 1px 0 rgba(255,255,255,0.95), 0 2px 20px rgba(0,0,0,0.05)',
      }}
    >
      {/* Shimmer sparkle dots */}
      <div className="absolute inset-0 pointer-events-none">
        {SHIMMER_DOTS.map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: dot.top, left: dot.left,
              width: dot.size, height: dot.size,
              backgroundColor: isDark ? 'rgba(255,255,255,0.30)' : 'rgba(0,0,0,0.18)',
              animation: `twinkle ${dot.dur}s ease-in-out ${dot.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Image — fixed-height frame, object-contain so full image always shows */}
      <div style={{ padding: 16 }}>
        <div style={{
          height: imageHeight,
          borderRadius: 12,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src={image}
            alt={title}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
            draggable={false}
          />
        </div>
      </div>

      {/* Text */}
      <div style={{ padding: '0 20px 20px' }}>
        <h3 className="text-base font-bold mb-1" style={{ color: isDark ? '#FFFFFF' : '#0F172A' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: isDark ? 'rgba(255,255,255,0.50)' : 'rgba(0,0,0,0.50)' }}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="portfolio" className="py-20 lg:py-28" style={{ backgroundColor: isDark ? '#000000' : '#FDFCFF' }}>
      <div className="container-base">

        {/* ── Heading ── */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-4">
            <span className="text-gradient-process-our">Selection of our</span>{' '}
            <span className="text-gradient-why">best works</span>
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed max-w-lg mx-auto"
            style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}
          >
            Real-world examples of impactful digital products we have built.
          </p>
        </div>

        {/* ── Row 1: large + small — same imageHeight keeps both cards the same height ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
          {ROW1.map(p => (
            <div key={p.id} className={p.span === 'large' ? 'lg:col-span-3' : 'lg:col-span-2'}>
              <ProjectCard title={p.title} description={p.description} image={p.image} isDark={isDark} imageHeight={360} />
            </div>
          ))}
        </div>

        {/* ── Row 2: 3 equal columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {ROW2.map(p => (
            <ProjectCard key={p.id} title={p.title} description={p.description} image={p.image} isDark={isDark} imageHeight={300} />
          ))}
        </div>

        {/* ── Row 3: large + small — same imageHeight keeps both cards the same height ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {ROW3.map(p => (
            <div key={p.id} className={p.span === 'large' ? 'lg:col-span-3' : 'lg:col-span-2'}>
              <ProjectCard title={p.title} description={p.description} image={p.image} isDark={isDark} imageHeight={360} />
            </div>
          ))}
        </div>


</div>
    </section>
  )
}
