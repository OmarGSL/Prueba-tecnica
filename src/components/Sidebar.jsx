import { useState } from 'react';
import dahsboard from '../assets/svg/dahsboard.svg'
import folder from '../assets/svg/folder.svg'
import clientes from '../assets/svg/clientes.svg'
import biometricos from '../assets/svg/biometricos.svg'
import reportes from '../assets/svg/reportes.svg'
import configuracion from '../assets/svg/configuracion.svg'
import '../styles/Sidebar.css';

const Sidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="hamburger">☰</span>
      </button>

      <nav className="sidebar-menu">
        <ul>
          <li className="menu-item">
            <img src={dahsboard} className="icon-menu" />
            <span className="menu-text">Dashboard</span>
          </li>
          <li className="menu-item active">

            <img src={folder} className="icon-menu" />
            <span className="menu-text">Expedientes</span>
          </li>
          <li className="menu-item">
            <img src={clientes} className="icon-menu" />
            <span className="menu-text">Clientes</span>
          </li>
          <li className="menu-item">
            <img src={biometricos} className="icon-menu" />
            <span className="menu-text">Biométricos</span>
          </li>
          <li className="menu-item">
            <img src={reportes} className="icon-menu" />
            <span className="menu-text">Reportes</span>
          </li>
          <li className="menu-item">

            <img src={configuracion} className="icon-menu" />
            <span className="menu-text">Configuración</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
