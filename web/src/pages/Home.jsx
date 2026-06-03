import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <span>Trust</span>drive
        </Link>
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <Link to="/login" className="nav-link btn-outline" style={{ padding: '0.5rem 1rem', borderRadius: '8px' }}>Log In</Link>
          <Link to="/signup" className="nav-link btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '8px', color: 'white' }}>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      
      <div className="container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">Next Generation Data Security</div>
          <h1 className="hero-title">
            Secure Your Digital Assets with <span className="text-gradient">Trustdrive</span>
          </h1>
          <p className="hero-description">
            Experience military-grade encryption and seamless access control for your most sensitive data. Built for modern teams who demand both security and agility.
          </p>
          <div className="hero-cta">
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <button className="btn btn-outline">View Documentation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "End-to-End Encryption",
      description: "Your data is encrypted before it leaves your device, ensuring true privacy and security.",
      icon: "🔒"
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "We can't read your files, your metadata, or your passwords. Total confidentiality.",
      icon: "🛡️"
    },
    {
      title: "Global CDN Delivery",
      description: "Access your files instantly from anywhere in the world with our optimized network.",
      icon: "⚡"
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why choose <span className="text-gradient">Trustdrive</span>?</h2>
          <p className="section-subtitle">Engineered for security, designed for productivity</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card glass-panel animate-fade-in delay-${(index + 1) * 100}`}
              style={{ animationFillMode: 'forwards' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Link to="/" className="footer-logo">
            <span style={{ color: 'var(--accent-primary)' }}>Trust</span>drive
          </Link>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Status</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Trustdrive Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Home;
