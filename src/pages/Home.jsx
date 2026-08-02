import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import useCountUp from '../components/useCountUp.js'

const eyebrowStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.64rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'var(--bronze)',
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
}

const heroTitleStyle = {
  fontFamily: 'var(--font-display)',
  color: 'var(--white)',
  fontSize: 'clamp(3.5rem, 5vw, 5rem)',
  fontWeight: 300,
  lineHeight: 1.1,
  margin: 0,
}

const services = [
  {
    num: '01',
    name: ['Pilotage &', 'Direction de Projet'],
    desc: "Sécurisation complète du projet de la phase d'étude de faisabilité à la livraison du projet. Budget, planning, qualité.",
  },
  {
    num: '02',
    name: ['Conseil, Audit et', 'Valorisation'],
    desc: 'Optimisation financière, due diligence. La rigueur au service du ROI.',
  },
  {
    num: '03',
    name: ['Expertise hôtelière &', 'Mise en Exploitation'],
    desc: "Audit de conformité, programmation hôtelière, standards hôteliers internationaux, accompagnement à la mise en exploitation. L'expertise au service de l'excellence opérationnelle.",
  },
]

const stats = [
  { num: '11', sup: '+', label: "Années d'expertise" },
  { num: '5000', sup: '+', label: 'Clefs livrées' },
  { num: '4', sup: '', label: "Pôles d'expertise" },
  { num: '100', sup: '%', label: 'Indépendant & aligné' },
]

// Slow, capped drift on the hero photo while scrolling the first viewport —
// gated until the mount entrance animation has settled so the two never
// fight over the same transform.
function useHeroParallax() {
  const ref = useRef(null)
  useEffect(() => {
    let raf
    let ready = false
    const readyTimer = setTimeout(() => {
      ready = true
    }, 950)

    const onScroll = () => {
      if (!ready || raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        if (ref.current) {
          const y = Math.min(window.scrollY * 0.1, 48)
          ref.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.04)`
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(readyTimer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return ref
}

function HeroKpi() {
  const [start, setStart] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setStart(true), 900)
    return () => clearTimeout(t)
  }, [])
  const value = useCountUp(5000, { duration: 1400, start })

  return (
    <div className="hero-counter max-md:!hidden">
      <span className="hero-counter-number live">
        {value.toLocaleString('fr-FR')}
        <span>+</span>
      </span>
      <span className="hero-counter-label">Clefs livrées</span>
    </div>
  )
}

export default function Home() {
  const parallaxRef = useHeroParallax()

  return (
    <div id="page-home">
      {/* Hero */}
      <section className="hero max-md:!block max-md:!h-auto max-md:!min-h-screen max-md:relative">
        <div className="hero-left max-md:!relative max-md:!z-10 max-md:!justify-end max-md:!pt-36">
          <div className="anim-text delay-0 mb-auto">
            <div style={eyebrowStyle}>
              <span style={{ width: '2rem', height: 1, background: 'var(--bronze)', display: 'block' }} />
              Assistance à maîtrise d'ouvrage · Gouvernance de projet · Expertise hôtelière
            </div>
          </div>

          <div className="overflow-hidden">
            <h1 className="anim-text delay-1" style={heroTitleStyle}>
              Piloter
            </h1>
          </div>
          <div className="overflow-hidden" style={{ marginBottom: '2.5rem' }}>
            <h1
              className="anim-text delay-2"
              style={{ ...heroTitleStyle, color: 'var(--bronze-light)', fontStyle: 'italic' }}
            >
              pour créer de la valeur.
            </h1>
          </div>

          <p className="hero-sub anim-text delay-2">
            IMLEAD représente le maître d'ouvrage dans les projets immobiliers et hôteliers. Nous
            structurons la décision, maîtrisons les risques et protégeons la valeur du projet jusqu'à
            sa livraison.
          </p>
          <Link to="/diagnostic" className="btn-primary anim-text delay-3">
            <span>Obtenir mon diagnostic →</span>
          </Link>
          <p className="btn-description anim-text delay-4">
            Confidentiel. Sans engagement. Retour sous 48h ouvrées.
          </p>
        </div>
        <div className="hero-right max-md:!absolute max-md:!inset-0">
          <div className="hero-img-bg anim-img delay-0" ref={parallaxRef} />
          {/* extra bottom gradient for legibility when stacked on mobile */}
          <div
            className="hidden max-md:block absolute inset-0 z-[1]"
            style={{
              background:
                'linear-gradient(to bottom, rgba(13,27,24,0.25) 0%, rgba(13,27,24,0.85) 65%, rgba(13,27,24,0.98) 100%)',
            }}
          />
          <HeroKpi />
        </div>
      </section>

      {/* Stats bar */}
      <div className="stats-bar max-md:!grid-cols-2">
        {stats.map((s, i) => (
          <Reveal as="div" className="stat-item" key={s.label} delay={i * 90}>
            <div className="stat-number">
              {s.num}
              {s.sup && <span>{s.sup}</span>}
            </div>
            <div className="stat-label">{s.label}</div>
          </Reveal>
        ))}
      </div>

      {/* Services */}
      <section className="section">
        <Reveal as="div" className="section-tag">Ce que nous sécurisons</Reveal>
        <Reveal as="h2" className="section-title" delay={80}>
          Trois expertises,
          <br />
          <em>une même exigence.</em>
        </Reveal>
        <div className="services-grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="div" className="service-card" key={s.num} delay={i * 100}>
              <div className="service-num">{s.num}</div>
              <div className="service-name">
                {s.name[0]}
                <br />
                {s.name[1]}
              </div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-arrow">→</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Audit CTA */}
      <section className="audit-section">
        <div className="audit-inner">
          <Reveal as="div" className="section-tag">Diagnostic Projet</Reveal>
          <Reveal as="h2" className="section-title" delay={80} style={{ marginBottom: '2rem' }}>
            Votre projet contient probablement des risques <em>non identifiés.</em>
          </Reveal>
          <Reveal as="p" className="audit-lead" delay={160}>
            Notre algorithme croise vos paramètres avec les ratios du marché pour détecter les
            dérives potentielles avant qu'elles ne coûtent.
          </Reveal>
          <Reveal delay={240}>
            <Link to="/diagnostic" className="btn-primary">
              <span>Je veux savoir</span> <span className="btn-dot" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
