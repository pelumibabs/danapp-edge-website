import { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Our process', href: '#process' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQS', href: '#faq' },
]

const ORANGE = '#FD5E3C'

const orangeShadow = [
  '0 0 0 1px rgba(253,94,60,0.14)',
  '0 4px 20px rgba(253,94,60,0.14)',
  '0 16px 48px rgba(253,94,60,0.08)',
].join(', ')

const orangeShadowDark = [
  '0 0 0 1px rgba(253,94,60,0.07)',
  '0 4px 16px rgba(253,94,60,0.07)',
  '0 12px 32px rgba(253,94,60,0.04)',
].join(', ')

function SunIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── Floating island ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-6">
        <nav
          className="w-full max-w-[1200px] flex items-center justify-between gap-4 px-5 lg:px-6 h-[54px] sm:h-[72px] transition-all duration-300"
          style={{
            borderRadius: 18,
            backgroundColor: scrolled
              ? isDark ? 'rgba(20,20,20,0.72)' : 'rgba(255,255,255,0.72)'
              : isDark ? '#141414' : '#FFFFFF',
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            border: `1px solid rgba(253,94,60,${scrolled ? 0.14 : 0.2})`,
            boxShadow: scrolled
              ? [isDark ? orangeShadowDark : orangeShadow, '0 8px 32px rgba(0,0,0,0.12)'].join(', ')
              : isDark ? orangeShadowDark : orangeShadow,
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center shrink-0"
          >
            <div
              className="overflow-hidden rounded-xl w-8 h-8 sm:w-11 sm:h-11"
              style={{
                border: `1px solid rgba(253,94,60,0.22)`,
                boxShadow: `0 0 12px rgba(253,94,60,0.14)`,
              }}
            >
              <img
                src={isDark ? '/logo-dark.png' : '/logo-light.png'}
                alt="Danapp Edge"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          {/* ── Desktop links ── */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none"
                  style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDark ? '#FFFFFF' : '#0D0D0D'
                    e.currentTarget.style.backgroundColor = isDark
                      ? 'rgba(255,255,255,0.07)'
                      : 'rgba(0,0,0,0.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop right: CTA + toggle ── */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Schedule a call — semi-rounded, charcoal gradient in light / white in dark */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-[10px] text-sm font-semibold transition-opacity duration-200 hover:opacity-85 focus:outline-none"
              style={{
                borderRadius: 10,
                color: isDark ? '#141414' : '#FFFFFF',
                background: isDark
                  ? '#FFFFFF'
                  : 'linear-gradient(180deg, #141414 0%, #3F3F3F 100%)',
              }}
            >
              Schedule a call
            </a>

            {/* Sun / Moon — separate icon buttons in orange-glow pill */}
            <div
              className="flex items-center gap-1 px-2 py-1.5 rounded-xl"
              style={{
                backgroundColor: isDark
                  ? 'rgba(253,94,60,0.07)'
                  : 'rgba(253,94,60,0.05)',
                border: `1px solid rgba(253,94,60,0.22)`,
                boxShadow: `0 0 12px rgba(253,94,60,0.14)`,
              }}
            >
              {/* Sun — activates light mode */}
              <button
                onClick={() => isDark && toggle()}
                aria-label="Switch to light mode"
                className="p-[7px] rounded-lg transition-all duration-200 focus:outline-none"
                style={{
                  color: !isDark ? ORANGE : 'rgba(255,255,255,0.32)',
                  backgroundColor: !isDark ? 'rgba(253,94,60,0.12)' : 'transparent',
                }}
              >
                <SunIcon />
              </button>

              {/* Moon — activates dark mode */}
              <button
                onClick={() => !isDark && toggle()}
                aria-label="Switch to dark mode"
                className="p-[7px] rounded-lg transition-all duration-200 focus:outline-none"
                style={{
                  color: isDark ? ORANGE : 'rgba(0,0,0,0.28)',
                  backgroundColor: isDark ? 'rgba(253,94,60,0.12)' : 'transparent',
                }}
              >
                <MoonIcon />
              </button>
            </div>
          </div>

          {/* ── Mobile right: icon toggle + hamburger ── */}
          <div className="lg:hidden flex items-center gap-2.5">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-1.5 rounded-lg focus:outline-none"
              style={{ color: ORANGE }}
            >
              {isDark ? <MoonIcon size={20} /> : <SunIcon size={20} />}
            </button>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex flex-col gap-[5px] p-1 focus:outline-none"
            >
              {[22, 16, 11].map((w, i) => (
                <span
                  key={i}
                  className="block h-[2px] rounded-full transition-all duration-300"
                  style={{
                    width: i === 2 && menuOpen ? 22 : menuOpen && i === 1 ? 0 : w,
                    backgroundColor: isDark ? '#FFFFFF' : '#0D0D0D',
                    opacity: i === 1 && menuOpen ? 0 : 1,
                    transform:
                      i === 0 && menuOpen
                        ? 'rotate(45deg) translate(5px, 5px)'
                        : i === 2 && menuOpen
                        ? 'rotate(-45deg) translate(5px, -5px)'
                        : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: isDark ? 'rgba(0,0,0,0.75)' : 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(12px)',
          }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="absolute top-0 right-0 h-full w-72 flex flex-col pt-20 px-6 transition-transform duration-300"
          style={{
            backgroundColor: isDark ? '#141414' : '#FFFFFF',
            border: `1px solid rgba(253,94,60,0.16)`,
            boxShadow: `-4px 0 32px rgba(253,94,60,0.1)`,
            transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <ul className="flex flex-col gap-1 mt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = isDark ? '#FFFFFF' : '#0D0D0D'
                    e.currentTarget.style.backgroundColor = isDark
                      ? 'rgba(255,255,255,0.07)'
                      : 'rgba(0,0,0,0.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6" style={{ borderTop: `1px solid rgba(253,94,60,0.14)` }}>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full py-3 text-sm font-semibold text-center transition-opacity hover:opacity-85"
              style={{
                borderRadius: 10,
                color: isDark ? '#141414' : '#FFFFFF',
                background: isDark
                  ? '#FFFFFF'
                  : 'linear-gradient(180deg, #141414 0%, #3F3F3F 100%)',
              }}
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
