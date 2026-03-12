import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

function MainLayout() {
  const { pathname } = useLocation()
  const showNavbar = pathname !== '/'
  const isAboutPage = pathname === '/about'

  return (
    <>
      {showNavbar && (
        <header className={`app-nav ${isAboutPage ? 'app-nav--light' : ''}`}>
          <Link to="/" className="app-nav-brand" aria-label="Go to home">
            <img src="/clover-logo.png" alt="Clover logo" className="app-nav-logo" />
            <span className="app-nav-wordmark">CLOVER</span>
          </Link>

          <nav className="app-nav-links" aria-label="Main navigation">
            <NavLink to="/about" className="app-nav-link">
              About
            </NavLink>
          </nav>
        </header>
      )}

      <Outlet />
    </>
  )
}

export default MainLayout
