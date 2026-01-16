import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <span className="logo-b">B</span>
          <span className="logo-m">M</span>
          <span className="logo-w">W</span>
        </div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#models">Models</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">The Ultimate Driving Machine</h1>
          <p className="hero-subtitle">Experience the perfect blend of luxury, performance, and innovation</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
              Explore Models
            </button>
            <button className="btn btn-secondary">Book a Test Drive</button>
          </div>
        </div>
        <div className="hero-gradient"></div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Performance</h3>
          <p>Engineered for pure driving pleasure</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔋</div>
          <h3>Electric Future</h3>
          <p>Sustainable mobility without compromise</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Innovation</h3>
          <p>Cutting-edge technology in every detail</p>
        </div>
      </section>

      <section id="models" className="models-preview">
        <h2 className="section-title">Coming Soon</h2>
        <p className="section-subtitle">Our latest models will be showcased here</p>
      </section>

      <section id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to experience BMW excellence?</p>
      </section>

      <footer className="footer">
        <p>&copy; 2026 BMW. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
