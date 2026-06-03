import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

const Signup = () => {
  return (
    <div className="auth-layout">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      
      <div className="auth-card glass-panel animate-fade-in">
        <div className="auth-header">
          <Link to="/" className="nav-logo" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span>Trust</span>drive
          </Link>
          <h1 className="auth-title">Create an account</h1>
          <p className="auth-subtitle">Start securing your digital assets today</p>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <div className="input-container">
              <User className="input-icon" size={18} />
              <input 
                type="text" 
                id="name" 
                className="form-input" 
                placeholder="John Doe" 
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email address</label>
            <div className="input-container">
              <Mail className="input-icon" size={18} />
              <input 
                type="email" 
                id="email" 
                className="form-input" 
                placeholder="name@company.com" 
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <div className="input-container">
              <Lock className="input-icon" size={18} />
              <input 
                type="password" 
                id="password" 
                className="form-input" 
                placeholder="Create a strong password" 
                required 
              />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary btn-block">
            Create Account <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </form>
        
        <div className="auth-footer">
          Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
