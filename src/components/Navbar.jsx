
import { getData } from '../services/service';
import '../styles/Navbar.css';

const {mockAgente} = getData();
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <span className="logo-icon">👁</span>
          <span className="logo-text">Biométricos</span>
        </div>
      </div>
      <div className="navbar-right">
        <div className="notification-icon">
          <span className="badge">2</span>
        </div>
        <div className="user-info">
          <div className="user-details">
            <span className="user-name">{mockAgente.nombre}</span>
            <span className="user-role">{mockAgente.tipoAgente}</span>
          </div>
          <div className="user-avatar">{mockAgente.avatar}</div>
        </div>
        <div className="progress-info">
          <span className="progress-label">Estado del Folio</span>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: '50%' }}></div>
          </div>
          <span className="progress-percentage">50%</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
