import { useState } from 'react'

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
  fontSize: 'clamp(3rem, 6.5vw, 6.1rem)',
  letterSpacing: '-0.035em',
  lineHeight: 0.98,
  fontFamily: 'NeueMachina',
}

const avantages = [
  {
    num: '01',
    title: 'Indépendance totale',
    desc: 'Aucun lien capitalistique avec des entreprises de construction, des promoteurs ou des fonds. Nos recommandations ne servent que vos intérêts.',
    icon: (
      <svg viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="14" />
        <path d="M20 6v14l8 5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Séniorité systématique',
    desc: "Vos dossiers sont traités par des consultants seniors. Pas de stagiaires, pas de délégation descendante. Le niveau d'exigence ne varie pas.",
    icon: (
      <svg viewBox="0 0 40 40">
        <path d="M8 32 L20 8 L32 32" />
        <path d="M13 24h14" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Intervention à toutes les phases',
    desc: 'Structure légère, décision rapide. Nous nous adaptons à la complexité de votre projet sans les lourdeurs des grands cabinets.',
    icon: (
      <svg viewBox="0 0 40 40">
        <rect x="8" y="8" width="10" height="10" rx="1" />
        <rect x="22" y="8" width="10" height="10" rx="1" />
        <rect x="8" y="22" width="10" height="10" rx="1" />
        <rect x="22" y="22" width="10" height="10" rx="1" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Expertise terrain algérienne',
    desc: "Technique, juridique, financier, opérationnel. Nous maîtrisons l'ensemble des dimensions d'un projet complexe pour vous éviter les angles morts.",
    icon: (
      <svg viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="12" />
        <circle cx="20" cy="20" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="20" y1="26" x2="20" y2="32" />
        <line x1="8" y1="20" x2="14" y2="20" />
        <line x1="26" y1="20" x2="32" y2="20" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Engagement sur les résultats',
    desc: 'Notre succès est indexé sur le vôtre. Chaque décision est analysée à travers le prisme de la rentabilité et de la création de valeur long terme.',
    icon: (
      <svg viewBox="0 0 40 40">
        <polyline points="8,28 18,16 24,22 32,10" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Reporting orienté décision',
    desc: 'Maîtrise des référentiels globaux (opérateurs hôteliers, fonds internationaux, certifications). Nous parlons le langage de vos partenaires.',
    icon: (
      <svg viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="13" />
        <line x1="7" y1="20" x2="33" y2="20" />
        <path d="M20 7 Q26 14 26 20 Q26 26 20 33 Q14 26 14 20 Q14 14 20 7" />
      </svg>
    ),
  },
]

const nonItems = [
  {
    title: "Pas un bureau d'études",
    desc: 'Nous ne produisons pas les plans techniques à la place des concepteurs. Nous pilotons la cohérence, les interfaces, les arbitrages et la gouvernance.',
  },
  {
    title: 'Pas une entreprise générale',
    desc: "Nous n'exécutons pas les travaux. Nous supervisons les conditions dans lesquelles l'exécution peut rester conforme aux objectifs du maître d'ouvrage.",
  },
  {
    title: 'Pas un producteur de rapports',
    desc: 'Nos livrables sont conçus pour décider, arbitrer et agir — pas pour accumuler de la documentation inutile.',
  },
  {
    title: 'Pas un acteur intéressé par les fournisseurs',
    desc: "Aucun partenariat fournisseur, aucune activité de maîtrise d'œuvre. Notre indépendance est la condition de notre crédibilité.",
  },
]

const valeurs = [
  {
    num: '01',
    title: 'Rigueur sans compromis',
    text: "Chaque chiffre est vérifié. Chaque hypothèse est documentée. Chaque risque est qualifié. La rigueur n'est pas une posture, c'est notre méthode de travail.",
  },
  {
    num: '02',
    title: 'Transparence totale',
    text: 'Nous disons ce que nous voyons, même quand c\'est difficile à entendre. Nos rapports ne sont pas des documents de réassurance. Ce sont des outils de décision.',
  },
  {
    num: '03',
    title: 'Engagement sur le résultat',
    text: "Nous ne livrons pas des recommandations. Nous co-construisons des résultats. La frontière entre conseil et exécution n'existe pas chez IMLEAD.",
  },
  {
    num: '04',
    title: 'Confidentialité absolue',
    text: "Vos données financières, vos stratégies d'acquisition, vos difficultés opérationnelles restent strictement confidentielles. Toujours.",
  },
  {
    num: '05',
    title: 'Proactivité',
    text: 'Nous anticipons les problèmes avant qu\'ils ne se manifestent. Nos clients ne découvrent pas les mauvaises nouvelles dans les rapports de chantier.',
  },
]

const faqs = [
  {
    q: "Quelle est la différence entre IMLEAD et un bureau d'études classique ?",
    a: 'Un bureau d\'études produit des études. IMLEAD pilote des projets. Nous ne produisons pas de plans — nous coordonnons, arbitrons et garantissons que les bons intervenants produisent les bons livrables au bon moment. Notre rôle est stratégique et opérationnel, pas technique au sens de la production.',
  },
  {
    q: "À quel stade d'un projet pouvez-vous intervenir ?",
    a: 'En amont idéalement — dès la phase de faisabilité, avant tout engagement financier. Mais nous intervenons également en cours de projet (reprise en crise, renforcement de gouvernance) ou en phase de livraison. Plus tôt nous sommes impliqués, plus la valeur créée est significative.',
  },
  {
    q: 'Comment garantissez-vous votre indépendance ?',
    a: "IMLEAD ne détient aucune participation dans des entreprises de construction, d'architecture ou de promotion. Notre modèle économique repose exclusivement sur des honoraires de conseil facturés à nos clients.",
  },
  {
    q: "Travaillez-vous sur des projets en dehors de l'Algérie ?",
    a: 'Oui. Notre expertise couvre les marchés MENA et nous intervenons sur des projets impliquant des opérateurs et investisseurs internationaux. Notre maîtrise des standards globaux nous permet d\'opérer dans des environnements multiculturels complexes.',
  },
  {
    q: 'En quoi consiste votre diagnostic initial ?',
    a: "C'est une analyse rapide (48-72h) qui croise vos données de projet avec nos référentiels marché pour identifier les risques non visibles, les dérives budgétaires potentielles et les leviers d'optimisation. L'output est un pré-score avec des recommandations actionnables immédiatement.",
  },
]

export default function Pourquoi() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div id="page-pourquoi" className="page">
      {/* Hero */}
      <section
        id="hero-pourquoi"
        className="page-section min-h-screen relative overflow-hidden flex flex-col justify-end"
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
        <div className="anim-img delay-0 absolute right-0 top-0 bottom-0 z-0 w-[46%] max-md:!w-full max-md:opacity-25">
          <div
            className="img-ph w-full h-full"
            style={{ backgroundImage: 'url("/assets/HERO_POURQUOI-DaIcA5GR.webp")' }}
          />
        </div>
        <div className="anim-fade delay-0 absolute top-28 left-8 md:left-20 z-10 flex items-center gap-4">
          <div style={eyebrowStyle}>
            <span style={{ width: '2rem', height: 1, background: 'var(--bronze)', display: 'block' }} />
            POURQUOI IMLEAD
          </div>
        </div>
        <div className="relative z-10 px-8 md:px-20 pb-20 max-w-4xl">
          <div className="overflow-hidden mb-3">
            <h1 className="anim-text delay-1 font-light text-warm-white" style={titleStyle}>
              L'indépendance
            </h1>
          </div>
          <div className="overflow-hidden mb-3">
            <h1 className="anim-text delay-2 font-display font-light text-warm-white" style={titleStyle}>
              au service
            </h1>
          </div>
          <div className="overflow-hidden mb-10">
            <h1
              className="anim-text delay-3 font-display font-light"
              style={{ ...titleStyle, color: 'var(--bronze-light)', fontStyle: 'italic' }}
            >
              du résultat.
            </h1>
          </div>
          <div
            className="anim-line delay-4 h-px w-20 mb-10"
            style={{ background: 'var(--bronze)', transformOrigin: 'left center' }}
          />
          <p className="anim-text delay-4 text-body max-w-xl" style={{ fontSize: '0.95rem', lineHeight: 1.95 }}>
            La différence entre IMLEAD et un prestataire classique tient à une responsabilité : nous ne
            mesurons pas notre valeur au volume de livrables produits, mais à la qualité des décisions
            rendues possibles.
          </p>
        </div>
        <div
          className="anim-fade delay-5 relative z-10 h-1.5 max-md:!w-full"
          style={{
            width: '52%',
            background:
              'linear-gradient(to right, var(--bronze) 0%, var(--bronze-light) 30%, var(--linen) 60%, #A8C0D8 100%)',
          }}
        />
      </section>

      {/* Avantages */}
      <section className="avantages-section">
        <div className="section-tag">Ce qui nous différencie</div>
        <h2 className="section-title">
          Ce qui nous
          <br />
          <em>différencie.</em>
        </h2>
        <div className="avantages-grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3">
          {avantages.map((a) => (
            <div className="avantage-card" key={a.num}>
              <div className="avantage-num">{a.num}</div>
              <div className="avantage-icon">{a.icon}</div>
              <div className="avantage-title">{a.title}</div>
              <div className="avantage-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Ce qu'IMLEAD n'est pas */}
      <section className="section" style={{ background: 'var(--structure)', borderTop: '1px solid var(--border)' }}>
        <div className="section-inner" style={{ maxWidth: 900, margin: '0px auto' }}>
          <div className="section-tag">Clarification</div>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Ce qu'IMLEAD n'est pas.
          </h2>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: '2rem' }}>
            Définir notre rôle, c'est aussi clarifier ce que nous ne faisons pas. Cette précision
            protège le maître d'ouvrage et garantit l'indépendance de notre intervention.
          </p>
          <div className="grid grid-cols-2 gap-6 max-md:!grid-cols-1">
            {nonItems.map((n) => (
              <div key={n.title} style={{ borderLeft: '2px solid var(--bronze)', paddingLeft: '1.25rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    color: 'var(--white)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {n.title}
                </div>
                <p style={{ fontSize: '0.78rem', lineHeight: 1.75, color: 'var(--text-body)' }}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="valeurs-section">
        <div className="valeurs-inner !grid-cols-1 lg:!grid-cols-[1fr_1.8fr] max-md:!gap-10">
          <div className="valeurs-sticky">
            <div className="section-tag">Nos Valeurs</div>
            <h2 className="section-title">
              Ce qui guide
              <br />
              nos <em>consultants.</em>
            </h2>
            <p
              style={{
                fontSize: '0.82rem',
                lineHeight: 1.8,
                color: 'var(--muted)',
                marginTop: '1.5rem',
                maxWidth: '28ch',
              }}
            >
              Des principes non négociables, appliqués à chaque mission, quelle qu'en soit la taille.
            </p>
          </div>
          <div>
            {valeurs.map((v) => (
              <div className="valeur-item" key={v.num}>
                <div className="valeur-num">{v.num}</div>
                <div className="valeur-content">
                  <div className="valeur-title">{v.title}</div>
                  <div className="valeur-text">{v.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-grid !grid-cols-1 lg:!grid-cols-[1fr_2fr] max-md:!gap-8">
          <div className="faq-sticky">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">
              Les questions
              <br />
              qu'on nous <em>pose.</em>
            </h2>
            <p
              style={{
                fontSize: '0.82rem',
                lineHeight: 1.8,
                color: 'var(--muted)',
                marginTop: '1.5rem',
                maxWidth: '28ch',
              }}
            >
              Pour clarifier notre rôle, notre méthode et les conditions d'intervention.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                <div
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="faq-question-text">{f.q}</span>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="pourquoi-final-cta !grid-cols-1 lg:!grid-cols-2 max-md:!gap-8">
        <div>
          <div className="section-tag">Prochaine étape</div>
          <h2 className="pourquoi-cta-title">
            Parlons de
            <br />
            votre <em>projet.</em>
          </h2>
        </div>
        <div className="pourquoi-cta-right">
          <p className="pourquoi-cta-text">
            Chaque projet est unique. La meilleure façon de comprendre comment IMLEAD peut créer de la
            valeur sur votre opération est d'en discuter directement.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a className="btn-primary">
              <span>Obtenir mon diagnostic</span> <span className="btn-dot" />
            </a>
            <a className="btn-ghost">Nous contacter directement</a>
          </div>
        </div>
      </div>
    </div>
  )
}
