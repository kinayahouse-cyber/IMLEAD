import { useNavigate, useLocation } from 'react-router-dom'

// Vertical page indicator on the right edge (desktop only). Hidden below md.
const PAGES = [
  { to: '/', title: 'Accueil' },
  { to: '/approche', title: 'Approche' },
  { to: '/expertise', title: 'Expertise' },
  { to: '/realisations', title: 'Réalisations' },
  { to: '/insights', title: 'Insights' },
  { to: '/pourquoi', title: 'Pourquoi' },
  { to: '/pourquoi', title: 'Diagnostic' },
]

export default function PageDots() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div className="page-nav hidden md:flex">
      {PAGES.map((p, i) => {
        const active = i === PAGES.length - 1 ? false : pathname === p.to
        return (
          <button
            key={p.title}
            className={`page-dot ${active ? 'active' : ''}`}
            title={p.title}
            aria-label={`Aller à la page ${p.title}`}
            onClick={() => navigate(p.to)}
          />
        )
      })}
    </div>
  )
}
