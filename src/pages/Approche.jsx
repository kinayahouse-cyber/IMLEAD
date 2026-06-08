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

const titleStyle = {
  fontSize: 'clamp(3rem, 6.5vw, 6.25rem)',
  letterSpacing: '-0.035em',
  lineHeight: 1.2,
  fontFamily: 'NeueMachina',
}

const steps = [
  {
    num: '01',
    title: 'Cadrage Stratégique',
    desc: 'Études de faisabilité, montage juridique et financier, définition programmatique. Nous validons le potentiel avant tout engagement.',
  },
  {
    num: '02',
    title: 'Conception & Ingénierie',
    desc: "Sélection des intervenants, pilotage des études et optimisation technique. Nous transformons le concept en plan d'action chiffré.",
  },
  {
    num: '03',
    title: 'Réalisation & Pilotage',
    desc: 'Supervision stricte du chantier. Nous sommes les garants du respect du budget, du planning et de la qualité d\'exécution.',
  },
  {
    num: '04',
    title: 'Réception & Exploitation',
    desc: "Levée des réserves et accompagnement à l'ouverture. Nous assurons la transition fluide du chantier vers l'opérationnel.",
  },
]

export default function Approche() {
  return (
    <>
      <section
        id="hero-approche"
        className="page-section min-h-screen relative overflow-hidden flex flex-col"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            opacity: 0.3,
          }}
        />
        <div className="anim-text delay-0 flex justify-between items-center px-8 md:px-16 pt-28 pb-0 z-10 relative">
          <div style={eyebrowStyle}>
            <span style={{ width: '2rem', height: 1, background: 'var(--bronze)', display: 'block' }} />
            IMLEAD / Approche
          </div>
          <div className="text-muted" style={{ fontSize: '0.58rem', letterSpacing: '0.1em' }}>
            02 / 07
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-end px-8 md:px-16 pb-16 z-10 relative">
          <div
            className="anim-img delay-0 absolute top-24 right-6 w-40 sm:w-64 lg:w-80 xl:w-96"
            style={{ aspectRatio: '4 / 3' }}
          >
            <div
              className="img-ph w-full h-full"
              style={{ backgroundImage: 'url("/assets/FLOTTANTE_APPROCHE-B3Kr7eT3.webp")' }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, transparent 20%, var(--depth) 100%)' }}
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--bronze)' }} />
              <span className="text-muted uppercase tracking-wide2" style={{ fontSize: '0.55rem' }}>
                Gouvernance terrain
              </span>
            </div>
          </div>

          <div className="anim-text delay-3 max-w-sm mb-auto ml-auto mr-48 xl:mr-96 hidden lg:block">
            <p className="text-body" style={{ fontSize: '0.8rem', lineHeight: 1.85 }}>
              IMLEAD n'ajoute pas une couche de reporting. Nous mettons en place le cadre de décision
              qui permet au maître d'ouvrage de rester stratégique, informé et maître de l'exécution.
            </p>
          </div>

          <div className="overflow-hidden mb-3">
            <h1 className="anim-text delay-1 font-display font-light text-warm-white" style={titleStyle}>
              La gouvernance
            </h1>
          </div>
          <div className="overflow-hidden mb-3">
            <h1
              className="anim-text delay-2 font-display font-light"
              style={{ ...titleStyle, lineHeight: 0.98, color: 'var(--bronze-light)', fontStyle: 'italic' }}
            >
              qui tient le cap.
            </h1>
          </div>

          <div
            className="anim-line delay-3 h-px w-32 mb-12"
            style={{ background: 'var(--bronze)', transformOrigin: 'left center' }}
          />

          <div className="anim-text delay-4 flex items-center justify-between flex-wrap gap-6">
            <button
              className="btn-primary px-6 py-3 text-xs tracking-wide2 uppercase"
              style={{ fontSize: '0.7rem', letterSpacing: '0.14em' }}
            >
              <span>Découvrir notre méthode →</span>
            </button>
            <div className="hidden md:flex items-center gap-6 mb-auto">
              <div className="text-center">
                <div className="font-display font-light text-2xl text-warm-white" style={{ letterSpacing: '-0.02em' }}>
                  15<span className="text-bronze text-sm">ans</span>
                </div>
                <div className="text-muted uppercase tracking-wide2 mt-0.5" style={{ fontSize: '0.55rem' }}>
                  D'expertise
                </div>
              </div>
              <div className="w-px h-8" style={{ background: 'var(--border)' }} />
              <div className="text-center">
                <div className="font-display font-light text-2xl text-warm-white" style={{ letterSpacing: '-0.02em' }}>
                  98<span className="text-bronze text-sm">%</span>
                </div>
                <div className="text-muted uppercase tracking-wide2 mt-0.5" style={{ fontSize: '0.55rem' }}>
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <div className="timeline">
        <div className="timeline-header">
          <div className="section-tag">Notre méthode</div>
          <h2 className="section-title">
            Le cycle
            <br />
            de <em>vie.</em>
          </h2>
        </div>
        <div className="timeline-grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-4">
          {steps.map((s) => (
            <div className="timeline-step" key={s.num}>
              <div className="timeline-step-line" />
              <div className="timeline-step-num">{s.num}</div>
              <div className="timeline-step-title">{s.title}</div>
              <div className="timeline-step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Audit CTA */}
      <div className="audit-cta-section">
        <div className="audit-cta-eyebrow">Diagnostic gratuit</div>
        <h2 className="audit-cta-title">
          Votre projet mérite une <em>lecture experte.</em>
        </h2>
        <p className="audit-cta-sub">
          Entrez les paramètres clés de votre opération. Notre algorithme croise vos données avec les
          ratios du marché pour détecter les risques instantanément.
        </p>
        <button className="btn-primary">
          <span>Démarrer mon audit</span> <span className="btn-dot" />
        </button>
      </div>
    </>
  )
}
