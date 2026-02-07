import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header({ adminName }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo">
            <span className="logo-icon">💪</span>
            <span className="logo-text">POWERFIT ADMIN</span>
          </div>
        </div>
        
        <div className="header-right">
          <div className="admin-info">
            <div className="admin-avatar">👤</div>
            <div className="admin-details">
              <span className="admin-name">{adminName}</span>
              <span className="admin-role">Administrator</span>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;