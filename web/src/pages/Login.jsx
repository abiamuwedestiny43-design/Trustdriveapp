import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <div className="auth-layout">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      
      <div className="auth-card glass-panel animate-fade-in">
        <div className="auth-header">
          <Link to="/" className="nav-logo" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span>Trust</span>drive
          </Link>
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Enter your credentials to access your account</p>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()}>
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
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <label className="form-label" htmlFor="password" style={{ marginBottom: 0 }}>Password</label>
              <a href="#" className="auth-link" style={{ fontSize: '0.875rem' }}>Forgot password?</a>
            </div>
            <div className="input-container">
              <Lock className="input-icon" size={18} />
              <input 
                type="password" 
                id="password" 
                className="form-input" 
                placeholder="••••••••" 
                required 
              />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary btn-block">
            Sign In <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </button>
        </form>
        
        <div className="auth-footer">
          Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
