import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const SERVICES = [
  {
    title: 'Mobile Development',
    description: 'Our Mobile Development practice delivers high-performance iOS, Android, and web apps built for scale, optimised for conversion, and engineered for exceptional user experiences.',
    featured: true,
    icon: 'mobile',
  },
  {
    title: 'Web Development',
    description: 'From landing pages to enterprise-grade platforms, we build fast, scalable, and beautiful web solutions using the latest technologies and best practices.',
    featured: false,
    icon: 'web',
  },
  {
    title: 'Product Design (UI/UX)',
    description: 'Our design team creates intuitive, pixel-perfect interfaces backed by deep user research, turning complex products into seamless experiences users love.',
    featured: false,
    icon: 'design',
  },
  {
    title: 'AI Development',
    description: 'We deliver intelligent AI solutions spanning machine learning, LLM integration, computer vision, and automation, giving enterprises the strategic edge to compete and grow decisively.',
    featured: false,
    icon: 'ai',
  },
  {
    title: 'Blockchain Development',
    description: 'We build secure blockchain solutions including smart contracts, DeFi protocols, NFT marketplaces, and Web3 infrastructure that redefine decentralised technology.',
    featured: false,
    icon: 'blockchain',
  },
  {
    title: 'Audit & IT Consultancy',
    description: 'We provide comprehensive technology audits and strategic IT consulting to identify gaps, optimise systems, and align your tech stack with your business goals.',
    featured: false,
    icon: 'audit',
  },
]

const MARQUEE_ITEMS = [
  'Functional Designs', 'Clean Code', 'Scalable Systems',
  'Beautiful Interfaces', 'Innovative Solutions', 'Seamless Experiences',
]

const ICON_STROKE = 'rgba(255,255,255,0.72)'
const ICON_PROPS = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: ICON_STROKE, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

function MobileIcon() {
  return (
    <svg {...ICON_PROPS}>
      <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3 C8.5 7 8.5 17 12 21 M12 3 C15.5 7 15.5 17 12 21" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  )
}

function DesignIcon() {
  return (
    <svg {...ICON_PROPS}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function BrandIcon() {
  return (
    <svg {...ICON_PROPS}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

function BlockchainIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function AuditIcon() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
}

function AIIcon() {
  return (
    <svg {...ICON_PROPS}>
      {/* Neural network nodes */}
      <circle cx="5.5" cy="7" r="1.8" />
      <circle cx="5.5" cy="17" r="1.8" />
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="18.5" cy="7" r="1.8" />
      <circle cx="18.5" cy="17" r="1.8" />
      {/* Connections */}
      <line x1="7.2" y1="7.6" x2="10" y2="11" />
      <line x1="7.2" y1="16.4" x2="10" y2="13" />
      <line x1="14" y1="11" x2="16.8" y2="7.6" />
      <line x1="14" y1="13" x2="16.8" y2="16.4" />
    </svg>
  )
}

const iconMap: Record<string, React.ReactNode> = {
  mobile: <MobileIcon />,
  web: <WebIcon />,
  design: <DesignIcon />,
  ai: <AIIcon />,
  blockchain: <BlockchainIcon />,
  audit: <AuditIcon />,
}

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
  const [hovered, setHovered] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  // Inactive: blends into section bg. Hover: near-black glass with #652b68 top-left glow.
  const cardStyle = hovered
    ? {
        background: isDark
          ? 'rgba(3, 0, 6, 0.92)'    // almost pure black — just barely off bg
          : 'rgba(8, 0, 18, 0.92)',   // almost same as #090014 bg
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: [
          'inset 0 1px 0 rgba(255,255,255,0.16)',   // bright top glass edge
          'inset 1px 0 0 rgba(255,255,255,0.08)',   // left glass edge
          'inset -1px 0 0 rgba(255,255,255,0.04)',  // right glass edge
          'inset 0 -1px 0 rgba(255,255,255,0.04)',  // bottom glass edge
          '0 8px 40px rgba(0,0,0,0.70)',            // depth shadow
        ].join(', '),
      }
    : {
        backgroundColor: isDark ? '#000000' : '#090014',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: 'none',
      }

  return (
    <div
      className="relative rounded-2xl pt-6 px-6 pb-3 flex flex-col gap-12 overflow-hidden cursor-default"
      style={{
        ...cardStyle,
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top-left glow + shimmers — visible on hover */}
      {hovered && (
        <>
          {/* Concentrated #652b68 glow — top-left corner only, fades by ~35% card width */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: 0, left: 0,
              width: 200, height: 180,
              background: 'radial-gradient(ellipse at 0% 0%, rgba(101,43,104,0.95) 0%, rgba(101,43,104,0.55) 28%, rgba(101,43,104,0.15) 52%, transparent 68%)',
            }}
          />

          {/* Bacteria / microorganism texture — dark, small, subtle */}
          <svg
            className="absolute pointer-events-none"
            viewBox="0 0 200 180"
            style={{
              top: 0, left: 0, width: 200, height: 180,
              opacity: 0.55,
              WebkitMaskImage: 'radial-gradient(ellipse at 0% 0%, black 20%, rgba(0,0,0,0.4) 45%, transparent 65%)',
              maskImage: 'radial-gradient(ellipse at 0% 0%, black 20%, rgba(0,0,0,0.4) 45%, transparent 65%)',
            }}
          >
            {/* Cocci — small round bacteria, dark on purple */}
            <g stroke="rgba(45,18,55,0.55)" strokeWidth="0.6" fill="rgba(38,14,48,0.50)">
              <circle cx="22" cy="16" r="4" />
              <circle cx="52" cy="10" r="3" />
              <circle cx="78" cy="22" r="3.5" />
              <circle cx="108" cy="11" r="2.5" />
              <circle cx="136" cy="19" r="3" />
              <circle cx="38" cy="42" r="3" />
              <circle cx="88" cy="48" r="3.5" />
              <circle cx="124" cy="40" r="2.5" />
              <circle cx="158" cy="32" r="3" />
              <circle cx="16" cy="72" r="3" />
              <circle cx="64" cy="78" r="2.5" />
              <circle cx="108" cy="70" r="3.5" />
              <circle cx="148" cy="62" r="2.5" />
              <circle cx="28" cy="106" r="3" />
              <circle cx="80" cy="110" r="3" />
              <circle cx="122" cy="96" r="2.5" />
              <circle cx="162" cy="84" r="2.5" />
              <circle cx="18" cy="140" r="2.5" />
              <circle cx="70" cy="146" r="3" />
              <circle cx="116" cy="130" r="2.5" />
              <circle cx="154" cy="118" r="2" />
            </g>

            {/* Bacilli — thin rods, small */}
            <g stroke="rgba(45,18,55,0.45)" strokeWidth="0.6" fill="rgba(38,14,48,0.40)">
              <rect x="30" y="26" width="9" height="3.5" rx="1.75" transform="rotate(-28 30 26)" />
              <rect x="62" y="32" width="8" height="3" rx="1.5" transform="rotate(18 62 32)" />
              <rect x="96" y="28" width="10" height="3.5" rx="1.75" transform="rotate(-48 96 28)" />
              <rect x="140" y="50" width="8" height="3" rx="1.5" transform="rotate(22 140 50)" />
              <rect x="50" y="62" width="9" height="3" rx="1.5" transform="rotate(-14 50 62)" />
              <rect x="100" y="82" width="8" height="3" rx="1.5" transform="rotate(38 100 82)" />
              <rect x="136" y="74" width="10" height="3.5" rx="1.75" transform="rotate(-32 136 74)" />
              <rect x="42" y="90" width="8" height="3" rx="1.5" transform="rotate(18 42 90)" />
              <rect x="160" y="104" width="9" height="3" rx="1.5" transform="rotate(-22 160 104)" />
              <rect x="76" y="126" width="8" height="3" rx="1.5" transform="rotate(32 76 126)" />
              <rect x="144" y="140" width="9" height="3" rx="1.5" transform="rotate(-12 144 140)" />
            </g>

            {/* Diplococci — paired tiny circles */}
            <g stroke="rgba(45,18,55,0.45)" strokeWidth="0.6" fill="rgba(38,14,48,0.45)">
              <circle cx="168" cy="50" r="2.5" /><circle cx="174" cy="48" r="2.5" />
              <circle cx="34" cy="124" r="2" /><circle cx="39" cy="122" r="2" />
              <circle cx="110" cy="152" r="2.5" /><circle cx="116" cy="150" r="2.5" />
            </g>

            {/* Spore dots — tiny, very dark */}
            <g fill="rgba(38,14,48,0.55)">
              <circle cx="10" cy="32" r="1" /><circle cx="56" cy="6" r="0.8" />
              <circle cx="86" cy="36" r="1" /><circle cx="120" cy="26" r="0.8" />
              <circle cx="180" cy="16" r="1" /><circle cx="6"  cy="56" r="0.8" />
              <circle cx="76" cy="60" r="1" /><circle cx="144" cy="54" r="0.8" />
              <circle cx="182" cy="74" r="1" /><circle cx="48" cy="86" r="0.8" />
              <circle cx="116" cy="92" r="0.8" /><circle cx="170" cy="100" r="1" />
              <circle cx="6"   cy="98" r="0.8" /><circle cx="58" cy="112" r="1" />
              <circle cx="106" cy="118" r="0.8" /><circle cx="142" cy="112" r="1" />
              <circle cx="186" cy="128" r="0.8" /><circle cx="24" cy="158" r="1" />
              <circle cx="96" cy="162" r="0.8" /><circle cx="152" cy="156" r="0.8" />
            </g>
          </svg>

          {/* Sparkle shimmers inside the glow zone */}
          <div className="absolute rounded-full" style={{ top: 12, left: 22,  width: 2.5, height: 2.5, backgroundColor: 'rgba(255,255,255,0.75)' }} />
          <div className="absolute rounded-full" style={{ top: 30, left: 55,  width: 2,   height: 2,   backgroundColor: 'rgba(255,255,255,0.55)' }} />
          <div className="absolute rounded-full" style={{ top: 8,  left: 68,  width: 1.5, height: 1.5, backgroundColor: 'rgba(220,180,255,0.60)' }} />
          <div className="absolute rounded-full" style={{ top: 48, left: 34,  width: 1.5, height: 1.5, backgroundColor: 'rgba(255,255,255,0.45)' }} />
          <div className="absolute rounded-full" style={{ top: 20, left: 92,  width: 2,   height: 2,   backgroundColor: 'rgba(255,255,255,0.35)' }} />
          <div className="absolute rounded-full" style={{ top: 60, left: 18,  width: 1.5, height: 1.5, backgroundColor: 'rgba(255,255,255,0.30)' }} />
          <div className="absolute rounded-full" style={{ top: 38, left: 78,  width: 1,   height: 1,   backgroundColor: 'rgba(255,255,255,0.40)' }} />
        </>
      )}

      {/* Glass icon container */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10"
        style={{
          backgroundColor: hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
          border: `1px solid ${hovered ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.10)'}`,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        {iconMap[service.icon]}
      </div>

      {/* Text */}
      <div className="relative z-10">
        <h3 className="text-base font-bold mb-3" style={{ color: '#FFFFFF' }}>
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: hovered ? 'rgba(255,255,255,0.70)' : isDark ? 'rgba(255,255,255,0.55)' : '#FFFFFF' }}>
          {service.description}
        </p>
      </div>
    </div>
  )
}

export default function Services() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="services"
      className="relative overflow-hidden pt-20 lg:pt-28 pb-0"
      style={{ backgroundColor: isDark ? '#000000' : '#090014' }}
    >
      {/* Purple light ray from top-left corner with shimmers */}
      <div className="absolute pointer-events-none inset-0 overflow-hidden">
        {/* Wide outer purple glow */}
        <div style={{
          position: 'absolute', top: -400, left: -400,
          width: 560, height: 2000,
          background: isDark
            ? 'linear-gradient(to bottom, rgba(140,60,230,0.32) 0%, rgba(100,40,180,0.14) 55%, transparent 100%)'
            : 'linear-gradient(to bottom, rgba(160,80,255,0.62) 0%, rgba(120,50,220,0.30) 55%, transparent 100%)',
          transform: 'rotate(33deg)', transformOrigin: '50% 0',
          borderRadius: 220, filter: 'blur(45px)',
        }} />
        {/* Mid bright purple ray */}
        <div style={{
          position: 'absolute', top: -400, left: -400,
          width: 220, height: 1800,
          background: isDark
            ? 'linear-gradient(to bottom, rgba(200,140,255,0.52) 0%, rgba(160,90,255,0.22) 55%, transparent 100%)'
            : 'linear-gradient(to bottom, rgba(230,180,255,0.85) 0%, rgba(180,110,255,0.42) 55%, transparent 100%)',
          transform: 'rotate(34deg)', transformOrigin: '50% 0',
          borderRadius: 110, filter: 'blur(20px)',
        }} />
        {/* Thin bright white-purple center streak */}
        <div style={{
          position: 'absolute', top: -400, left: -400,
          width: 70, height: 1600,
          background: isDark
            ? 'linear-gradient(to bottom, rgba(255,240,255,0.45) 0%, rgba(210,170,255,0.18) 60%, transparent 100%)'
            : 'linear-gradient(to bottom, rgba(255,255,255,0.80) 0%, rgba(230,200,255,0.35) 60%, transparent 100%)',
          transform: 'rotate(34deg)', transformOrigin: '50% 0',
          borderRadius: 35, filter: 'blur(6px)',
        }} />
        {/* Shimmer sparkle dots inside the beam */}
        {([
          { top: '5%',  left: '8%',  size: 2.5, dur: 2.4, delay: 0     },
          { top: '11%', left: '20%', size: 1.5, dur: 3.1, delay: 0.5   },
          { top: '3%',  left: '30%', size: 2,   dur: 2.8, delay: 1.1   },
          { top: '19%', left: '24%', size: 3,   dur: 2.2, delay: 0.3   },
          { top: '26%', left: '14%', size: 1.5, dur: 3.4, delay: 0.8   },
          { top: '8%',  left: '40%', size: 1.5, dur: 2.6, delay: 1.5   },
          { top: '33%', left: '32%', size: 2,   dur: 3.0, delay: 0.2   },
          { top: '15%', left: '46%', size: 1,   dur: 2.9, delay: 0.9   },
          { top: '42%', left: '22%', size: 2.5, dur: 2.5, delay: 1.3   },
          { top: '23%', left: '50%', size: 1.5, dur: 3.2, delay: 0.6   },
          { top: '50%', left: '16%', size: 1.5, dur: 2.7, delay: 1.8   },
          { top: '36%', left: '44%', size: 1,   dur: 3.5, delay: 0.4   },
          { top: '29%', left: '56%', size: 1,   dur: 2.3, delay: 1.0   },
          { top: '56%', left: '10%', size: 2,   dur: 3.3, delay: 0.7   },
          { top: '45%', left: '52%', size: 1.5, dur: 2.6, delay: 1.6   },
        ] as const).map((dot, i) => (
          <div key={i} className="absolute rounded-full" style={{
            top: dot.top, left: dot.left,
            width: dot.size, height: dot.size,
            backgroundColor: 'rgba(255,255,255,0.90)',
            animation: `twinkle ${dot.dur}s ease-in-out ${dot.delay}s infinite`,
          }} />
        ))}
      </div>

      <div className="container-base relative z-10">

        {/* Header — always white text */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-16">
          <h2
            className="text-5xl sm:text-6xl lg:text-[72px] font-bold leading-tight shrink-0"
            style={isDark ? {
              background: 'linear-gradient(180deg, #FFFFFF 30%, #7A7A7A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            } : { color: '#FFFFFF' }}
          >
            Our services
          </h2>
          <p
            className="text-base leading-relaxed max-w-md lg:pt-3"
            style={{ color: isDark ? 'rgba(255,255,255,0.60)' : '#FFFFFF' }}
          >
            An award-winning digital agency specializing in software development, web development, UI/UX design, and digital marketing. Dedicated to understanding and addressing your unique business challenges.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoRows: 'minmax(270px, auto)' }}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

      </div>

      {/* Marquee — edge to edge, large orange→purple gradient text */}
      <div
        className="overflow-hidden mt-16"
        style={{ paddingBottom: 28 }}
      >
        <div className="marquee-track" style={{ paddingTop: 24 }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, i) => (
            <span key={i} className="flex items-center gap-10 pr-10 whitespace-nowrap">
              <span
                className="font-bold"
                style={{
                  fontSize: 72,
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(90deg, #FD5E3C 0%, #8032E5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {text}
              </span>
              <span style={{ color: '#FFFFFF', fontSize: 40, lineHeight: 1 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom centre orange-purple glow — full width, no shape */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          height: 300,
          background: 'radial-gradient(ellipse 55% 100% at 50% 100%, rgba(253,94,60,0.16) 0%, rgba(128,50,229,0.12) 38%, transparent 68%)',
        }}
      />

    </section>
  )
}
