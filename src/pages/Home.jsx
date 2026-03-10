import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home() {
  const logoSrc = `${import.meta.env.BASE_URL}clover-logo.png`

  return (
    <section className="home-page" aria-label="Clover Home">
      <svg
        className="home-dash"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
            d="M12 -10 C 0 35, 32 45, 40 100"
            fill="none"
            stroke="#ff6a00"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            strokeLinecap="round"
        />
      </svg>

      <div className="home-shell">
        <header className="home-topbar">
          <Link className="about-link" to="/about">
            ABOUT US
          </Link>
        </header>

        <div className="home-hero">
          <div className="home-logo-wrap" aria-hidden="true">
            <div className="logo-cream-ring" />
            <img src={logoSrc} alt="" className="home-logo" />
          </div>

          <div className="home-right">
            <div className="home-content">
              <h1 className="home-title">CLOVER</h1>
              <p className="home-subtitle">Your navigational mental health compass is here to help</p>
            </div>

            <div className="home-actions">
              <div className="home-cta-row">
              <Link className="home-cta" to="/guest">
                GUEST
              </Link>
              <Link className="home-cta" to="/client">
                CLIENT
              </Link>
              <Link className="home-cta" to="/therapist">
                THERAPIST
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
