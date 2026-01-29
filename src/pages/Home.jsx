import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">The Ultimate Driving Machine</h1>
          <p className="hero-subtitle">Experience the perfect blend of luxury, performance, and innovation</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
              Explore Models
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/test-drive')}>Book a Test Drive</button>
          </div>
        </div>
        <div className="hero-gradient"></div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow" aria-label="Scroll down">↓</div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="feature-card">
          <div className="feature-icon" aria-label="Performance">⚡</div>
          <h3>Performance</h3>
          <p>Engineered for pure driving pleasure with powerful engines and precision handling</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" aria-label="Electric">🔋</div>
          <h3>Electric Future</h3>
          <p>Sustainable mobility without compromise through our BMW i series</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" aria-label="Innovation">🎯</div>
          <h3>Innovation</h3>
          <p>Cutting-edge technology and intelligent driver assistance in every detail</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" aria-label="Safety">🛡️</div>
          <h3>Safety</h3>
          <p>Advanced safety systems that protect what matters most to you</p>
        </div>
      </section>

      <section id="models" className="models-preview">
        <h2 className="section-title">Our Models</h2>
        <p className="section-subtitle">Discover the perfect BMW for your lifestyle</p>
        <div className="models-grid">
          <div className="model-card">
            <div className="model-badge">Sedan</div>
            <h3>BMW 3 Series</h3>
            <p>The sports sedan that started it all</p>
            <span className="model-price">From $45,900</span>
          </div>
          <div className="model-card">
            <div className="model-badge">SUV</div>
            <h3>BMW X5</h3>
            <p>Versatility meets luxury performance</p>
            <span className="model-price">From $63,900</span>
          </div>
          <div className="model-card">
            <div className="model-badge">Electric</div>
            <h3>BMW i4</h3>
            <p>The future of driving, today</p>
            <span className="model-price">From $52,200</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to experience BMW excellence?</p>
        <div className="contact-cta">
          <button className="btn btn-primary" onClick={() => navigate('/test-drive')}>
            Schedule Your Test Drive
          </button>
        </div>
      </section>
    </>
  )
}

export default Home
