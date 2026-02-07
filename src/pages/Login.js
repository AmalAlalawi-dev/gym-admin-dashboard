import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        // Mock authentication (any email/password combination works)
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('adminName', formData.email.split('@')[0]);
        setIsLoading(false);
        navigate('/dashboard');
      }, 1000);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-brand">
            <div className="brand-icon">💪</div>
            <h1 className="brand-title">POWERFIT GYM</h1>
            <p className="brand-subtitle">Admin Management System</p>
          </div>
          
          <div className="login-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Manage Members</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Track Subscriptions</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Monitor Attendance</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>View Analytics</span>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-wrapper">
            <div className="login-form-header">
              <h2>Welcome Back!</h2>
              <p>Sign in to access your admin dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <span className="input-icon">📧</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="admin@powerfit.com"
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? 'error' : ''}
                    placeholder="Enter your password"
                  />
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <button 
                type="submit" 
                className={`login-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="login-footer">
              <p className="demo-credentials">
                💡 Demo: Use any email and password (min 6 chars)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;