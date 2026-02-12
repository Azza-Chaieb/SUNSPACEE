<<<<<<< HEAD
// 1. Modifie src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/admin/Login';
import ProtectedRoute from './components/common/ProtectedRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import './index.css';
>>>>>>> d3d36416f680a4a5641a8245a6b36dc5482fa986

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        
        {/* Admin Routes - Protected */}
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<div style={{padding: '2rem', color: 'white'}}>Users Management (Coming Soon)</div>} />
            <Route path="settings" element={<div style={{padding: '2rem', color: 'white'}}>Settings (Coming Soon)</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// 2. Modifie Sidebar.jsx - REMPLACE LES DIV PAR DES LINKS
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/admin', icon: '📊', label: 'Tableau de bord' },
    { path: '/admin/users', icon: '👥', label: 'Utilisateurs' },
    { path: '/admin/content', icon: '📝', label: 'Contenu' },
    { path: '/admin/analytics', icon: '📈', label: 'Analytiques' },
    { path: '/admin/settings', icon: '⚙️', label: 'Paramètres' },
  ];
  
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        <h2>Admin Panel</h2>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span style={{ fontSize: '20px' }}>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};