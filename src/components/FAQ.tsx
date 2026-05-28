import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const FAQS = [
  {
    q: 'What services does Danapp Edge offer, and how can they benefit my business?',
    a: 'We offer Software Development, Web Development, Product Design (UI/UX), AI solutions, Blockchain, and Consultancy. Our services help streamline operations, enhance user experiences, and drive business growth.',
  },
  {
    q: 'How does Danapp Edge ensure the quality and reliability of its software solutions?',
    a: 'We use best practices, thorough testing, code reviews, and continuous integration (CI/CD) to ensure quality. Our team resolves issues early and incorporates client feedback to deliver robust and reliable solutions.',
  },
  {
    q: 'What deliverables can I expect from Danapp Edge, and what are the typical timelines?',
    a: 'We provide detailed project plans, design prototypes, development milestones, and regular progress reports. Typical timelines vary by project scope, but we ensure timely delivery while maintaining high-quality standards.',
  },
  {
    q: 'How can Danapp Edge help my business leverage blockchain technology?',
    a: 'We specialize in blockchain solutions, including smart contracts and DApps. Our end-to-end services ensure you can leverage blockchain for enhanced security, transparency, and innovation.',
  },
  {
    q: 'How does Danapp Edge handle communication and project management throughout a project?',
    a: 'We assign a dedicated project manager to every engagement and use tools like Slack, Notion, and Figma to keep clients in the loop. You get regular updates, sprint reviews, and a clear escalation path at every stage.',
  },
]

function FAQItem({ faq }: { faq: typeof FAQS[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{ border: '1px solid var(--border)' }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="text-sm sm:text-base font-semibold" style={{ color: 'var(--fg)' }}>{faq.q}</span>
        <svg
          className="w-5 h-5 shrink-0 transition-transform duration-300"
          style={{ color: 'var(--fg-secondary)', transform: open ? 'rotate(180deg)' : 'none' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed" style={{ color: 'var(--fg-secondary)' }}>{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="faq" className="py-20 lg:py-28" style={{ backgroundColor: isDark ? '#000000' : 'var(--bg-section)' }}>
      <div className="container-base">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight mb-4">
            <span className="text-gradient-process-our">Our</span>{' '}
            <span className="text-gradient-why">FAQs</span>
          </h2>
          <p
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}
          >
            Everything you need to know about working with us.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq) => <FAQItem key={faq.q} faq={faq} />)}
        </div>
      </div>
    </section>
  )
}
