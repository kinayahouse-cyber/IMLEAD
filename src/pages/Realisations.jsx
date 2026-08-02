import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const projects = [
  { sector: 'Résidentiel Haut Standing', year: '2022', bg: null },
  { sector: 'Tertiaire · Bureau', year: '2022', bg: 'linear-gradient(135deg, rgb(26, 42, 37) 0%, rgb(13, 31, 28) 100%)' },
  { sector: 'Usage Mixte', year: '2021', bg: 'linear-gradient(135deg, rgb(31, 42, 32) 0%, rgb(13, 27, 24) 100%)' },
  { sector: "Valorisation d'Actifs", year: '2021', bg: 'linear-gradient(135deg, rgb(26, 37, 32) 0%, rgb(13, 26, 24) 100%)' },
]

export default function Realisations() {
  return (
    <div id="page-realisations" className="page">
      <section className="realisations-hero">
        <div className="page-breadcrumb anim-text delay-0">
          IMLEAD <span>/</span> Réalisations
        </div>
        <div className="realisations-hero-inner max-md:!flex-col max-md:!items-start max-md:gap-6">
          <h1 className="realisations-title anim-text delay-1">
            Track
            <br />
            <em className="anim-text delay-2">Record.</em>
          </h1>
          <p className="realisations-sub anim-text delay-3">
            Des ambitions complexes transformées en actifs performants. Chaque projet est une preuve.
          </p>
        </div>
      </section>

      <div style={{ padding: '0px clamp(1.5rem, 5vw, 4rem)' }}>
        <div className="project-featured">
          <div
            className="project-featured-img anim-img delay-0"
            style={{ backgroundImage: 'url("/assets/HERO_REALISATIONS-BClLdm_p.webp")' }}
          />
          <div className="project-featured-overlay" />
          <div className="project-featured-content max-md:!flex-col max-md:!items-start max-md:gap-4">
            <div>
              <div className="project-featured-meta anim-text delay-4">
                Hôtellerie · Rescue Mission · 2023
              </div>
              <div className="project-featured-title anim-text delay-3">
                The Azure Coast
                <br />
                Resort &amp; SPA
              </div>
            </div>
            <button className="project-featured-cta anim-text delay-3">
              Voir comment on a résolu ça
            </button>
          </div>
        </div>
      </div>

      <section className="projects-grid-section">
        <div className="projects-filter max-md:!flex-col max-md:!items-start max-md:gap-4">
          <h2 className="projects-filter-title">Projets</h2>
          <input className="filter-input max-md:!w-full" placeholder="Trouver un projet..." type="text" />
        </div>
        <div className="projects-grid max-md:!grid-cols-1">
          {projects.map((p, i) => (
            <Reveal as="div" className="project-card" key={i} delay={(i % 2) * 100}>
              <div className="project-card-img" style={p.bg ? { background: p.bg } : undefined}>
                <span className="project-card-year">{p.year}</span>
              </div>
              <div className="project-card-body">
                <div className="project-card-sector">{p.sector}</div>
                <div className="project-card-name">Project Name</div>
                <div className="project-card-desc">
                  Brève description du projet et de l'enjeu principal.
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="audit-cta-section">
        <Reveal as="div" className="audit-cta-eyebrow">Diagnostic personnalisé</Reveal>
        <Reveal as="h2" className="audit-cta-title" delay={80}>
          Votre projet mérite la même <em>rigueur.</em>
        </Reveal>
        <Reveal as="p" className="audit-cta-sub" delay={160}>
          Entrez les paramètres clés de votre opération. Notre algorithme détecte les risques
          instantanément.
        </Reveal>
        <Reveal delay={240}>
          <Link to="/diagnostic" className="btn-primary">
            <span>Obtenir mon diagnostic</span> <span className="btn-dot" />
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
