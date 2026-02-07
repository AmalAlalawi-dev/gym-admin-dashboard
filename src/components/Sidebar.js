import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const menuItems = [
    { path: '/dashboard', icon: '📊', label: 'Dashboard' },
    { path: '/members', icon: '👥', label: 'Members' },
    { path: '/subscriptions', icon: '💳', label: 'Subscriptions' },
    { path: '/attendance', icon: '📅', label: 'Attendance' }
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              isActive ? 'nav-item active' : 'nav-item'
            }
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;