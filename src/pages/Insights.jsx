import { featured, articles } from '../data/insights.js'

export default function Insights() {
  return (
    <div id="page-insights" className="page">
      {/* Hero — 2 columns on desktop, single column on mobile */}
      <section className="ins-hero max-md:!grid-cols-1 max-md:!gap-6 max-md:!pt-32 max-md:!pb-10">
        <div>
          <div className="page-breadcrumb anim-text delay-1">
            IMLEAD <span>/</span> Insights
          </div>
          <h1 className="ins-hero-title anim-text delay-0">
            Intelligence
            <br />
            <em className="anim-text delay-1">de terrain.</em>
          </h1>
        </div>
      </section>

      {/* Featured article — side-by-side on desktop, stacked on mobile */}
      <div className="ins-featured max-md:!grid-cols-1 max-md:!min-h-0">
        <div
          className="ins-featured-visual anim-img delay-0 max-md:min-h-[260px]"
          style={{ backgroundImage: `url("${featured.image}")` }}
        >
          <div className="ins-fv-inner" />
          <div className="ins-featured-badge">
            <span className="ins-bdot" />
            <span className="ins-btxt">À la une</span>
          </div>
        </div>
        <div className="ins-featured-content">
          <div className="ins-featured-meta anim-text delay-1">
            <span className="ins-tag">{featured.tag}</span>
            <span className="ins-sep">·</span>
            <span className="ins-date">{featured.date}</span>
            <span className="ins-sep">·</span>
            <span className="ins-rt">{featured.readTime}</span>
          </div>
          <div>
            <div className="ins-featured-title anim-text delay-1">{featured.title}</div>
            <div className="ins-featured-excerpt anim-text delay-2">{featured.excerpt}</div>
          </div>
          <div className="ins-featured-footer anim-text delay-3 max-md:!flex-col max-md:!items-start max-md:gap-4">
            <span className="ins-rt">{featured.readTime} de lecture</span>
            <a className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
              <span>Lire l'analyse</span> <span className="btn-dot" />
            </a>
          </div>
        </div>
      </div>

      {/* Article grid — 1 / 2 / 3 columns across breakpoints */}
      <section className="ins-grid-wrap">
        <div className="ins-grid !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3">
          {articles.map((a, i) => (
            <article className="ins-card" key={i}>
              <div className="ins-card-visual" style={{ background: a.gradient }} />
              <div className="ins-card-body">
                <div className="ins-card-header">
                  <span className="ins-tag">{a.tag}</span>
                  <span className="ins-date">{a.date}</span>
                </div>
                <div className="ins-card-title">{a.title}</div>
                <div className="ins-card-excerpt">{a.excerpt}</div>
                <div className="ins-card-footer">
                  <span className="ins-rt">{a.readTime}</span>
                  <span className="ins-card-cta">Lire →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
