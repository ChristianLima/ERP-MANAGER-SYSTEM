import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/virtum-logo.png'; // ajuste se o caminho for diferente

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aqui você pode limpar tokens, autenticação, etc. se necessário
    navigate('/');
  };
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src={logo} alt="Virtum Logo" className={styles.logo} />
        <h1 className={styles.title}>Virtum ERP</h1>
      </div>
      <div className={styles.right}>
        <span className={styles.user}>Olá, Usuário</span>
        <button className={styles.logout} onClick={handleLogout}>Sair</button>
      </div>
    </header>
  );
};

export default Header;
