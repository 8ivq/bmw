import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-logo">BMW</div>
        <ul className="nav-links">
          <li><a href="#models">Models</a></li>
          <li><a href="#electric">Electric</a></li>
          <li><a href="#innovation">Innovation</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">The Ultimate Driving Machine</h1>
          <p className="hero-subtitle">Experience the perfect blend of luxury, performance, and innovation</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Explore Models</button>
            <button className="btn btn-secondary">Book a Test Drive</button>
          </div>
        </div>
        <div className="hero-gradient"></div>
      </section>

      <section className="features">
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

      <footer className="footer">
        <p>&copy; 2026 BMW. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
