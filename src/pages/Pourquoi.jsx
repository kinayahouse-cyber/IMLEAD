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
    desc: 'Aucun lien capitalistique ou intérêt financier avec les entreprises intervenant sur les projets. Une expertise indépendante au service des intérêts du maître d\'ouvrage.',
    icon: (
      <svg viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="14" />
        <path d="M20 6v14l8 5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: "Intervention à toutes les phases d'un projet",
    desc: "Notre accompagnement couvre l'ensemble du cycle de vie du projet, depuis les études préalables jusqu'à la mise en exploitation, garantissant une vision globale, une gouvernance cohérente et un pilotage continu.",
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
    num: '03',
    title: 'Expertise terrain',
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
    num: '04',
    title: 'Engagement sur les résultats',
    desc: 'Notre succès est indexé sur le vôtre. Chaque décision est analysée à travers le prisme de la rentabilité et de la création de valeur long terme.',
    icon: (
      <svg viewBox="0 0 40 40">
        <polyline points="8,28 18,16 24,22 32,10" />
      </svg>
    ),
  },
  {
    num: '05',
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
  {
    num: '06',
    title: 'Proximité, réactivité et engagement',
    desc: "Une approche fondée sur l'écoute, la disponibilité et un accompagnement personnalisé, favorisant des échanges directs, une prise de décision fluide et une réponse adaptée aux enjeux de chaque projet.",
    icon: (
      <svg viewBox="0 0 40 40">
        <path d="M8 32 L20 8 L32 32" />
        <path d="M13 24h14" />
      </svg>
    ),
  },
]

const valeurs = [
  {
    num: '01',
    title: 'Rigueur sans compromis',
    text: 'Chaque analyse repose sur des données vérifiées, des hypothèses documentées et une évaluation objective des risques. La rigueur constitue le fondement de notre méthode de travail.',
  },
  {
    num: '02',
    title: 'Transparence totale',
    text: "Nous formulons des analyses objectives, étayées et indépendantes, y compris lorsque les constats appellent des arbitrages exigeants. Nos rapports ont vocation à éclairer la décision et à sécuriser les choix du maître d'ouvrage.",
  },
  {
    num: '03',
    title: 'Engagement sur le résultat',
    text: "Au-delà des recommandations, nous accompagnons leur mise en œuvre aux côtés du maître d'ouvrage. Notre engagement s'inscrit dans la durée, afin de transformer les orientations stratégiques en résultats concrets.",
  },
  {
    num: '04',
    title: 'Confidentialité absolue',
    text: 'Toutes les informations qui nous sont confiées sont traitées dans le respect de la plus stricte confidentialité.',
  },
  {
    num: '05',
    title: 'Proactivité',
    text: "L'anticipation des risques et l'identification précoce des points de vigilance sont au cœur de notre démarche.",
  },
]

const faqs = [
  {
    q: "Qu'est-ce qu'une Assistance à Maîtrise d'Ouvrage (AMO) ?",
    a: "L'Assistance à Maîtrise d'Ouvrage (AMO) accompagne le maître d'ouvrage dans la définition, le pilotage et la sécurisation de son projet. Indépendante des intervenants chargés de la conception et de la réalisation, elle coordonne les parties prenantes, facilite la prise de décision et veille au respect des objectifs de coûts, de délais, de qualité et de performance. Son rôle est d'apporter au maître d'ouvrage une vision globale, un pilotage structuré et une gouvernance efficace tout au long du cycle de vie du projet.",
  },
  {
    q: "Comment intervient une Assistance à Maîtrise d'Ouvrage (AMO) dans un projet ?",
    a: "L'AMO intervient aux côtés du maître d'ouvrage tout au long du cycle de vie du projet. Son accompagnement peut débuter dès les études préalables et se poursuivre jusqu'à la mise en exploitation. À chaque étape, elle apporte une expertise stratégique, coordonne les intervenants, pilote les processus de décision, anticipe les risques et veille au respect des objectifs de coûts, de délais, de qualité et de performance.",
  },
  {
    q: "À quel stade d'un projet pouvez-vous intervenir ?",
    a: "L'AMO peut intervenir à tout moment du cycle de vie d'un projet. Son accompagnement est particulièrement pertinent dès les phases amont (programmation, études de faisabilité, montage de l'opération et définition des objectifs), où les décisions prises ont le plus fort impact sur les coûts, les délais et la performance du projet. Elle peut également être mobilisée en phase de conception, de consultation, de réalisation, de réception ou de mise en exploitation, ainsi que dans le cadre d'un repositionnement, d'une restructuration ou d'une reprise de projet nécessitant un renforcement de la gouvernance et du pilotage.",
  },
  {
    q: 'Comment garantissez-vous votre indépendance ?',
    a: "L'indépendance d'IMLEAD repose sur l'absence de tout lien capitalistique ou intérêt économique avec les acteurs des projets qu'il accompagne, ainsi que sur une rémunération exclusivement fondée sur des honoraires de conseil.",
  },
  {
    q: 'En quoi consiste votre diagnostic initial ?',
    a: "Le diagnostic initial est une analyse du projet et de son niveau de maturité. Il permet d'identifier les enjeux, les risques, les contraintes et les priorités d'action afin d'orienter le maître d'ouvrage dans ses décisions et de définir le périmètre de notre intervention.",
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
          <div className="overflow-hidden mb-10">
            <h1
              className="anim-text delay-2 font-display font-light"
              style={{ ...titleStyle, color: 'var(--bronze-light)', fontStyle: 'italic' }}
            >
              au service de la performance.
            </h1>
          </div>
          <div
            className="anim-line delay-4 h-px w-20 mb-10"
            style={{ background: 'var(--bronze)', transformOrigin: 'left center' }}
          />
          <p className="anim-text delay-4 text-body max-w-xl" style={{ fontSize: '0.95rem', lineHeight: 1.95 }}>
            IMLEAD place l'intérêt du maître d'ouvrage au cœur de chaque mission. Grâce à une expertise
            indépendante, une gouvernance exigeante et une approche fondée sur l'analyse, nous
            sécurisons les décisions stratégiques et contribuons à la création de valeur à chaque
            étape du projet.
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
        <div className="section-tag">Ce qui nous caractérise</div>
        <h2 className="section-title">
          Ce qui nous
          <br />
          <em>caractérise.</em>
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

      {/* Valeurs */}
      <section className="valeurs-section">
        <div className="valeurs-inner !grid-cols-1 lg:!grid-cols-[1fr_1.8fr] max-md:!gap-10">
          <div className="valeurs-sticky">
            <div className="section-tag">Nos principes</div>
            <h2 className="section-title">
              Ce qui fonde
              <br />
              notre <em>approche.</em>
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
              Des principes d'intervention qui guident chacune de nos missions, avec un niveau
              d'exigence constant, quelle que soit la nature ou l'envergure du projet.
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
