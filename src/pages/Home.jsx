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

const services = [
  {
    num: '01',
    name: ['Pilotage &', 'Direction de Projet'],
    desc: 'Sécurisation complète du chantier de la phase conception à la livraison. Budget, planning, qualité.',
  },
  {
    num: '02',
    name: ['Advisory, Audit &', 'Valorisation'],
    desc: "Optimisation financière, due diligence, arbitrage d'actifs. La rigueur au service du ROI.",
  },
  {
    num: '03',
    name: ['Hospitality &', 'Mise en Exploitation'],
    desc: "Pré-ouverture, brand compliance, spécificités luxe et resorts. L'excellence opérationnelle garantie.",
  },
]

const stats = [
  { num: '12', sup: '+', label: "Années d'expertise" },
  { num: '5000', sup: '+', label: 'Clefs livrées' },
  { num: '4', sup: '', label: "Pôles d'expertise" },
  { num: '100', sup: '%', label: 'Indépendant & aligné' },
]

export default function Home() {
  return (
    <div id="page-home">
      {/* Hero */}
      <section className="hero max-md:!block max-md:!h-auto max-md:!min-h-screen max-md:relative">
        <div className="hero-left max-md:!relative max-md:!z-10 max-md:!justify-end max-md:!pt-36">
          <div className="anim-text delay-0 mb-auto">
            <div style={eyebrowStyle}>
              <span style={{ width: '2rem', height: 1, background: 'var(--bronze)', display: 'block' }} />
              AMO · Gouvernance de projet · Hospitality
            </div>
          </div>
          <h1 className="hero-title anim-text delay-1">
            Gouverner
            <br />
            <em>pour valoriser.</em>
          </h1>
          <p className="hero-sub anim-text delay-2">
            IMLEAD représente le maître d'ouvrage dans les projets immobiliers et hôteliers à forts
            enjeux. Nous structurons la décision, maîtrisons les risques et protégeons la valeur du
            projet jusqu'à sa livraison.
          </p>
          <a className="btn-primary anim-text delay-3">
            <span>Obtenir mon diagnostic →</span>
          </a>
          <p className="btn-description anim-text delay-4">
            Confidentiel. Sans engagement. Retour sous 48h ouvrées.
          </p>
        </div>
        <div className="hero-right max-md:!absolute max-md:!inset-0">
          <div className="hero-img-bg anim-img delay-0" />
          {/* extra bottom gradient for legibility when stacked on mobile */}
          <div
            className="hidden max-md:block absolute inset-0 z-[1]"
            style={{
              background:
                'linear-gradient(to bottom, rgba(13,27,24,0.25) 0%, rgba(13,27,24,0.85) 65%, rgba(13,27,24,0.98) 100%)',
            }}
          />
          <div className="hero-counter max-md:!hidden">
            <span className="hero-counter-number">5000</span>
            <span className="hero-counter-label">Clefs livrées</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="stats-bar max-md:!grid-cols-2">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-number">
              {s.num}
              {s.sup && <span>{s.sup}</span>}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <section className="section">
        <div className="section-tag">Ce que nous sécurisons</div>
        <h2 className="section-title">
          Trois expertises,
          <br />
          une même <em>exigence de maîtrise.</em>
        </h2>
        <div className="services-grid max-md:!grid-cols-1">
          {services.map((s) => (
            <div className="service-card" key={s.num}>
              <div className="service-num">{s.num}</div>
              <div className="service-name">
                {s.name[0]}
                <br />
                {s.name[1]}
              </div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Audit CTA */}
      <section className="audit-section">
        <div className="audit-inner">
          <div className="section-tag">Diagnostic Projet</div>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            Votre projet contient probablement des risques <em>non identifiés.</em>
          </h2>
          <p className="audit-lead">
            Notre algorithme croise vos paramètres avec les ratios du marché pour détecter les
            dérives potentielles avant qu'elles ne coûtent.
          </p>
          <a className="btn-primary">
            <span>Je veux savoir</span> <span className="btn-dot" />
          </a>
        </div>
      </section>
    </div>
  )
}
