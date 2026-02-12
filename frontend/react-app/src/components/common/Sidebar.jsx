import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../services/api';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: '📊' },
    { name: 'Users', path: '/admin/users', icon: '👥' },
    { name: 'Content', path: '/admin/content', icon: '📝' },
    { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <span style={{ fontSize: '1.8rem' }}>☀️</span> SUN SPACE
      </div>
      <nav className="nav-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            end={item.path === '/admin'}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div style={{ marginTop: 'auto' }}>
        <div 
          className="nav-item" 
          style={{ cursor: 'pointer', color: '#ef4444' }}
          onClick={logout}
        >
          <span className="nav-icon">🚪</span>
          Logout
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
