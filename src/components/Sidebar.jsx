import { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="hamburger">☰</span>
      </button>
      
      {isOpen && (
        <nav className="sidebar-menu">
          <ul>
            <li className="menu-item">
              <span className="menu-icon">📊</span>
              <span className="menu-text">Dashboard</span>
            </li>
            <li className="menu-item active">
              <span className="menu-icon">📋</span>
              <span className="menu-text">Expedientes</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon">👥</span>
              <span className="menu-text">Clientes</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon">📸</span>
              <span className="menu-text">Biométricos</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon">📈</span>
              <span className="menu-text">Reportes</span>
            </li>
            <li className="menu-item">
              <span className="menu-icon">⚙️</span>
              <span className="menu-text">Configuración</span>
            </li>
          </ul>
        </nav>
      )}
    </aside>
  );
};

export default Sidebar;
