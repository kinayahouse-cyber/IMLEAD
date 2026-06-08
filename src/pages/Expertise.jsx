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

const h1Style = {
  fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
  letterSpacing: '-0.035em',
  fontFamily: 'NeueMachina',
}

const tags = ['Pilotage & Direction', 'Advisory & Audit', 'Hospitality']

const blocks = [
  {
    num: 'A',
    title: ['Project Management', '& Pilotage Technique'],
    tagline: 'L\'orchestration complète de vos chantiers.',
    desc: 'Pilotage technique et maîtrise des Coûts/Délais. Gestion des interfaces complexes (projets mixtes). Suivi de développement pour Promoteurs.',
    img: '/assets/EXPERTISE_A-D2gd99pD.webp',
    label: 'Project Management',
  },
  {
    num: 'B',
    title: ['Advisory, Audit', '& Asset Management'],
    tagline: "Sécuriser l'investissement et valoriser le patrimoine.",
    desc: 'Audits de projets et reporting investisseurs. Sécurisation du capital. Stratégies de Valorisation : Rénovation, Repositionnement & Transformation.',
    img: '/assets/EXPERTISE_B-DZ-F7amE.webp',
    label: 'Advisory & Assets',
  },
  {
    num: 'C',
    title: ['Operations', '& Hospitality Support'],
    tagline: "Garantir l'excellence opérationnelle et l'ouverture.",
    desc: 'Assistance à la pré-ouverture. Respect des standards de marque (Brand compliance). Spécificités Luxe & Resorts.',
    img: '/assets/EXPERTISE_C-BddyLvYx.webp',
    label: 'Operations & Hospitality',
  },
]

export default function Expertise() {
  return (
    <div id="page-expertise" className="page">
      <section
        id="hero-expertise"
        className="page-section min-h-screen relative overflow-hidden flex flex-col justify-center"
      >
        <div className="anim-img delay-0 absolute inset-0 z-0">
          <div
            className="img-ph w-full h-full"
            style={{ backgroundImage: 'url("/assets/HERO_EXPERTISE-BQ1PzB7l.webp")' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(13, 27, 24, 0.97) 0%, rgba(13, 27, 24, 0.5) 50%, rgba(13, 27, 24, 0.25) 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(13, 27, 24, 0.6) 0%, transparent 50%)' }}
          />
        </div>

        <div className="anim-fade delay-0 absolute top-28 left-8 md:left-16 z-10">
          <div style={eyebrowStyle}>
            <span style={{ width: '2rem', height: 1, background: 'var(--bronze)', display: 'block' }} />
            IMLEAD / Expertise
          </div>
        </div>

        <div className="relative z-10 px-8 md:px-16 pb-16 pt-40 mt-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end lg:justify-between gap-12">
            <div className="lg:max-w-2xl">
              <div className="overflow-hidden mb-2">
                <h1 className="anim-text delay-1 font-light text-warm-white" style={{ ...h1Style, lineHeight: 1.1 }}>
                  Trois expertises,
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1
                  className="anim-text delay-2 font-display font-light"
                  style={{ ...h1Style, lineHeight: 1.3, color: 'var(--bronze-light)', fontStyle: 'italic' }}
                >
                  une même exigence de maîtrise.
                </h1>
              </div>
              <div
                className="anim-line delay-3 mt-6 h-px w-20"
                style={{ background: 'var(--bronze)', transformOrigin: 'left center' }}
              />
            </div>
            <div className="lg:max-w-xs lg:text-right">
              <p className="anim-text delay-3 text-body mb-6" style={{ fontSize: '0.85rem', lineHeight: 1.85 }}>
                IMLEAD couvre les moments critiques du cycle de vie d'un actif immobilier ou hôtelier :
                décider, piloter, livrer et mettre en exploitation.
              </p>
              <button
                className="anim-text delay-4 btn-primary px-6 py-3 text-xs uppercase tracking-wide2"
                style={{ fontSize: '0.7rem' }}
              >
                <span>Voir l'expertise →</span>
              </button>
            </div>
          </div>

          <div
            className="anim-text delay-5 grid grid-cols-3 gap-px mt-16 max-md:!grid-cols-1"
            style={{ background: 'var(--border)' }}
          >
            {tags.map((t) => (
              <div
                key={t}
                className="px-6 py-5 flex items-center gap-3"
                style={{ background: 'rgba(13, 27, 24, 0.9)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--bronze)' }} />
                <span
                  className="text-muted uppercase tracking-wide2"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.15em' }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed image strip */}
      <div style={{ width: '100%', aspectRatio: '21 / 9', overflow: 'hidden', position: 'relative', maxHeight: '60vh' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/assets/EXP0-DVDBjhBl.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
          }}
        />
      </div>

      {/* Expertise blocks */}
      <div className="expertise-blocks">
        {blocks.map((b) => (
          <div className="expertise-block max-md:!grid-cols-1" key={b.num}>
            <div className="expertise-block-content max-md:!order-1">
              <div className="expertise-block-num">{b.num}</div>
              <h2 className="expertise-block-title">
                {b.title[0]}
                <br />
                {b.title[1]}
              </h2>
              <p className="expertise-block-tagline">{b.tagline}</p>
              <p className="expertise-block-desc">{b.desc}</p>
              <a className="btn-dark">Sécuriser cette phase</a>
            </div>
            <div
              className="expertise-block-visual max-md:!order-2 max-md:min-h-[260px]"
              style={{ backgroundImage: `url("${b.img}")`, backgroundSize: 'cover' }}
            >
              <div className="expertise-block-visual-label">{b.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Audit CTA */}
      <div className="audit-cta-section" style={{ background: 'var(--depth)' }}>
        <div className="audit-cta-eyebrow">Audit personnalisé</div>
        <h2 className="audit-cta-title">
          Votre projet contient probablement des risques <em>non identifiés.</em>
        </h2>
        <p className="audit-cta-sub">Notre algorithme croise vos paramètres avec les ratios du marché.</p>
        <button className="btn-primary">
          <span>Je veux savoir</span> <span className="btn-dot" />
        </button>
      </div>
    </div>
  )
}
