import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaInfoCircle, FaTools, FaUser } from 'react-icons/fa';
import styles from './Sidebar.module.css';
import logo from '../../assets/LogoPrincipal.png';



const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <div className={`${styles.sidebar} ${!isOpen ? styles.hidden : ''}`}>
      <button className={styles.toggleBtn} onClick={toggleSidebar}>
        {isOpen ? '◁' : '▷'}
      </button>

      <div className={styles.logo}>
        <img src={logo} alt="Virtum Engenharia" className={styles.logoImage} />

      </div>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to="/dashboard" className={styles.link}>
            <FaTachometerAlt className={styles.icon} />
            {isOpen && <span>Dashboard</span>}
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/servicos" className={styles.link}>
            <FaTools className={styles.icon} />
            {isOpen && <span>Serviços</span>}
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/usuarios" className={styles.link}>
            <FaUser className={styles.icon} />
            {isOpen && <span>Usuários</span>}
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/about" className={styles.link}>
            <FaInfoCircle className={styles.icon} />
            {isOpen && <span>Sobre</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
