import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import TestDrive from './pages/TestDrive'
import './App.css'

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Only scroll to top when navigating to a new page, not for hash changes
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo">
          <span className="logo-b">B</span>
          <span className="logo-m">M</span>
          <span className="logo-w">W</span>
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {isHomePage && (
            <>
              <li><a href="#features">Features</a></li>
              <li><a href="#models">Models</a></li>
              <li><a href="#contact">Contact</a></li>
            </>
          )}
          <li><Link to="/test-drive" className="nav-cta">Test Drive</Link></li>
        </ul>
      </nav>

      {children}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-b">B</span>
              <span className="logo-m">M</span>
              <span className="logo-w">W</span>
            </div>
            <p>The Ultimate Driving Machine</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Explore</h4>
              <Link to="/">Home</Link>
              <Link to="/test-drive">Test Drive</Link>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <Link to="/#contact">Contact Us</Link>
              <a href="tel:1-800-BMW-HELP">1-800-BMW-HELP</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 BMW. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/test-drive" element={<Layout><TestDrive /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
