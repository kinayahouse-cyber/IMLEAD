import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top max-md:!grid-cols-1 max-md:!gap-10">
        <div>
          <div className="footer-logo-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" fill="none">
              <defs>
                <radialGradient id="footerTipFade">
                  <stop offset="0" stopColor="#000" />
                  <stop offset="0.4" stopColor="#404040" />
                  <stop offset="1" stopColor="#fff" />
                </radialGradient>
                <mask id="ftf1" maskUnits="userSpaceOnUse" x="-20" y="-20" width="351" height="333">
                  <rect x="-20" y="-20" width="351" height="333" fill="#fff" />
                  <circle cx="303" cy="30" r="52" fill="url(#footerTipFade)" />
                </mask>
                <mask id="ftf2" maskUnits="userSpaceOnUse" x="-20" y="-20" width="351" height="333">
                  <rect x="-20" y="-20" width="351" height="333" fill="#fff" />
                  <circle cx="8" cy="268" r="52" fill="url(#footerTipFade)" />
                </mask>
                <mask id="ftf3" maskUnits="userSpaceOnUse" x="-20" y="-20" width="351" height="333">
                  <rect x="-20" y="-20" width="351" height="333" fill="#fff" />
                  <circle cx="165" cy="145" r="30" fill="url(#footerTipFade)" />
                </mask>
                <mask id="ftf4" maskUnits="userSpaceOnUse" x="-20" y="-20" width="351" height="333">
                  <rect x="-20" y="-20" width="351" height="333" fill="#fff" />
                  <circle cx="135" cy="242" r="58" fill="url(#footerTipFade)" />
                </mask>
                <mask id="ftf7" maskUnits="userSpaceOnUse" x="-20" y="-20" width="351" height="333">
                  <rect x="-20" y="-20" width="351" height="333" fill="#fff" />
                  <circle cx="149" cy="146" r="30" fill="url(#footerTipFade)" />
                </mask>
                <mask id="ftf5" maskUnits="userSpaceOnUse" x="-20" y="-20" width="351" height="333">
                  <rect x="-20" y="-20" width="351" height="333" fill="#fff" />
                  <circle cx="182" cy="50" r="55" fill="url(#footerTipFade)" />
                </mask>
              </defs>
              <g transform="translate(0,8) scale(0.35494880546075086)" fill="#fff">
                <path mask="url(#ftf1)" d="M200.993 52.3275C215.95 35.5135 233.465 20.577 253.271 9.64282C265.814 2.62842 284.856 -4.4066 298.452 3.47428C307.117 8.50814 310.438 17.6268 310.892 27.0756C311.841 41.9709 306.456 56.7218 298.39 68.997C291.417 79.5598 282.587 88.9673 273.097 97.2402C264.349 104.894 254.859 111.764 245.122 118.077C227.008 129.713 208.049 139.636 188.099 147.909C182.26 150.323 175.576 147.538 173.183 141.699C170.769 135.861 173.554 129.176 179.393 126.783C195.773 121.337 212.051 114.673 227.544 106.792C233.631 103.718 240.067 100.19 245.906 96.6625C261.544 87.1725 276.46 75.9907 287.744 61.5081C295.295 51.6466 300.762 39.846 300.907 27.3026C301.051 20.577 299.648 14.1815 293.851 10.3236C284.732 4.42328 270.435 8.11615 260.883 11.7884C238.417 21.0515 218.467 35.4723 200.993 52.3275Z" />
                <path mask="url(#ftf2)" d="M112.796 238.415C99.0562 253.104 83.8928 266.638 66.8107 277.366C62.9734 279.78 58.0633 282.688 53.9991 284.669C42.1571 290.363 26.808 295.562 14.2646 288.939C4.69202 283.844 0.689694 274.106 0.112038 263.729C-0.589401 252.774 2.05131 241.716 6.67256 231.855C8.94192 227.007 11.6239 222.385 14.7185 218.032C15.2136 217.351 16.534 215.536 17.0291 214.855C17.9162 213.659 19.3397 211.946 20.2475 210.77C22.4756 208.026 25.5289 204.705 28.0046 202.126C42.7142 187.148 60.2295 175.121 78.4257 164.785C81.252 163.217 84.2847 161.505 87.1524 160.019C99.572 153.521 112.384 147.661 125.649 142.813C139.946 138.192 147.538 158.307 133.612 164.228C122.018 168.601 110.589 173.532 99.4276 178.979C95.3015 180.98 91.0516 183.146 87.008 185.333C60.0851 199.733 21.3203 224.944 16.1626 257.23C15.4199 262.677 15.0279 269.361 17.3179 274.23C18.1225 275.901 19.3191 277.407 20.7632 278.583C23.7547 281.059 27.6951 282.07 31.7593 282.379C38.7737 282.853 46.1388 281.162 52.7819 278.769C53.4833 278.583 57.4237 276.85 58.2077 276.561C78.6732 267.587 97.0757 254.26 112.755 238.395L112.796 238.415Z" />
                <path mask="url(#ftf3)" d="M125.836 198.186C134.563 178.03 146.219 157.791 164.601 145.083C160.537 148.735 156.968 152.861 153.832 157.255C144.486 170.417 138.566 185.663 134.336 201.136C133.676 203.529 131.2 204.953 128.807 204.313C126.187 203.633 124.764 200.682 125.836 198.186Z" />
                <path mask="url(#ftf4)" d="M125.978 209.388C121.934 224.634 120.635 242.232 129.403 256.055C132.951 261.645 138.191 266.246 144.215 268.866C156.635 274.416 170.23 269.217 180.298 261.13C181.804 259.974 183.372 258.613 184.816 257.375C204.56 240.355 210.873 210.791 202.951 186.447C201.836 182.919 200.248 179.206 198.866 175.781C197.896 173.47 196.761 171.242 195.482 169.097C189.479 157.997 204.972 148.734 211.884 159.38C213.72 162.949 215.081 166.745 216.257 170.561C216.959 172.975 217.887 176.029 218.506 178.422C226.985 210.09 216.051 247.493 188.014 265.813C177.018 273.57 162.886 279.202 149.352 275.406C139.78 272.91 131.548 266.184 126.824 257.602C118.633 242.789 120.82 224.82 125.978 209.409V209.388Z" />
                <path mask="url(#ftf7)" d="M187.933 92.5572C179.206 112.713 167.55 132.952 149.168 145.66C153.232 142.009 156.801 137.883 159.937 133.488C169.283 120.326 175.204 105.08 179.433 89.607C180.093 87.2139 182.569 85.7903 184.962 86.4299C187.582 87.1107 189.006 90.0609 187.933 92.5572Z" />
                <path mask="url(#ftf5)" d="M187.786 81.355C191.83 66.109 193.13 48.5112 184.362 34.6887C180.813 29.0978 175.573 24.4972 169.549 21.8771C157.129 16.3275 143.534 21.5264 133.466 29.6136C131.96 30.7689 130.392 32.1305 128.948 33.3683C109.204 50.3885 102.891 79.9521 110.814 104.296C111.928 107.824 113.516 111.538 114.898 114.962C115.868 117.273 117.003 119.501 118.282 121.646C124.285 132.746 108.792 142.009 101.881 131.363C100.044 127.794 98.6829 123.998 97.5069 120.182C96.8055 117.768 95.8771 114.715 95.2582 112.321C86.779 80.6536 97.7132 43.2504 125.75 24.9304C136.746 17.1733 150.878 11.5412 164.412 15.3372C173.984 17.8335 182.216 24.5591 186.94 33.1414C195.131 47.9541 192.944 65.9233 187.786 81.3344V81.355Z" />
              </g>
              <line x1="140" y1="10" x2="140" y2="110" stroke="#fff" strokeOpacity="0.18" />
              <text x="170" y="75" fontFamily="Trap, 'Space Grotesk', sans-serif" fontSize="56" fontWeight="700" fill="#fff" textLength="215" lengthAdjust="spacingAndGlyphs">IMLEAD</text>
            </svg>
          </div>
          <p className="footer-tagline">
            La maîtrise des projets au service de la performance. Assistance à maîtrise d'ouvrage ·
            Gouvernance de projet · Expertise hôtelière.
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
          <div style={{ marginBottom: '1.5rem' }}>
            <div className="footer-country">Algérie</div>
            <ul className="footer-links">
              <li>
                <a>Alger, Algérie</a>
              </li>
              <li>
                <a href="mailto:Ho@im-lead.com">Ho@im-lead.com</a>
              </li>
              <li>
                <a href="tel:+213555555555">+213 555 555 555</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-country">Émirats Arabes Unis</div>
            <ul className="footer-links">
              <li>
                <a>Dubai, Émirats Arabes Unis</a>
              </li>
              <li>
                <a href="mailto:Ho@im-lead.com">Ho@im-lead.com</a>
              </li>
              <li>
                <a href="tel:+971555555555">+971 555 555 555</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2025 IMLEAD — Tous droits réservés</span>
        <span className="footer-copy">Mentions légales · RGPD</span>
      </div>
    </footer>
  )
}
