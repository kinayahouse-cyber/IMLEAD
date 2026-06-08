import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo-wrap">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 717.29 574.57">
              <g fill="#fff">
                <path d="M100.33,109.74v144.49h33.74v17.9H48.75v-17.9h33.96V109.74h-33.96v-17.9h85.32v17.9h-33.74Z" />
                <path d="M160.72,91.84h35.46l42.98,174.41h4.94l43.2-174.41h35.25v180.29h-17.62V112.8l3.01-15.09h-5.16l-43.41,174.41h-35.46l-43.41-174.41h-4.94l2.79,15.09v159.32h-17.62V91.84Z" />
                <path d="M160.72,467.38v-167.51h17.62v164.95l76.29-2.56v17.9l-80.81,2.56c-8.38.26-13.11-5.63-13.11-15.34Z" />
                <path d="M277.41,299.88h93.92v17.9h-76.29v63.17h65.55v17.9h-65.55v63.42h76.29v17.9h-93.92v-180.29Z" />
                <path d="M487.16,409.59h-60.82l-18.91,70.58h-17.62l49-180.29h36.1l48.79,180.29h-17.41l-19.13-70.58ZM482.43,391.69l-23.21-85.93h-4.94l-23,85.93h51.15Z" />
                <path d="M668.53,389.9c0,77.74-39.11,90.27-75.86,90.27h-48.14v-180.29h48.14c36.75,0,75.86,12.53,75.86,90.02ZM650.91,389.9c0-66.49-31.38-72.12-58.24-72.12h-30.52v144.49h30.52c26.86,0,58.24-5.63,58.24-72.37Z" />
              </g>
            </svg>
          </div>
          <p className="footer-tagline">
            La gouvernance comme levier de performance. AMO, Conseil, Real Estate.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Compagnie</div>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/approche">Approche</Link>
            </li>
            <li>
              <Link to="/pourquoi">Pourquoi</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Work</div>
          <ul className="footer-links">
            <li>
              <Link to="/expertise">Expertise</Link>
            </li>
            <li>
              <Link to="/realisations">Réalisations</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li>
              <a>Alger, Algérie</a>
            </li>
            <li>
              <a href="mailto:contact@im-lead.com">contact@im-lead.com</a>
            </li>
            <li>
              <a href="tel:+213555555555">+213 555 555 555</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2025 IMLEAD — Tous droits réservés</span>
        <span className="footer-copy">Mentions légales · RGPD</span>
      </div>
    </footer>
  )
}
