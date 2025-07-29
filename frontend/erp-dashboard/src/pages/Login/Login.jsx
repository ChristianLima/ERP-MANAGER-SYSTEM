import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import styles from './Login.module.css';
import virtumLogo from '../../assets/virtum-logo.png';
import toolsImage from '../../assets/login-tools.jpg';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(''); // 'forgot' ou 'contact'
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (cpf === '12345678900' && password === '123456') {
      navigate('/dashboard');
    } else {
      setError('CPF ou senha inválidos');
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType('');
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    // Simula envio e fecha modal
    alert(`Instruções de recuperação enviadas para ${cpf}`);
    closeModal();
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada, entraremos em contato!');
    closeModal();
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <img
            src={toolsImage}
            alt="Ferramentas de engenharia"
            className={styles.illustration}
        />
      </div>
      <div className={styles.rightPanel}>
        <img src={virtumLogo} alt="Virtum Engenharia" className={styles.logo} />
        <h2>Bem Vindo</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit">Entrar</button>
        </form>

        <div className={styles.extraLinks}>
            <a onClick={() => openModal('forgot')}>Esqueceu a senha?</a>
            <a onClick={() => openModal('contact')}>Adquirir sistema</a>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalType === 'forgot' && (
          <>
            <h3>Recuperar Senha</h3>
            <form onSubmit={handleForgotSubmit}>
              <input
                type="text"
                placeholder="Digite seu CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
                style={{ width: '100%', marginBottom: '1rem', padding: '8px' }}
              />
              <button type="submit" style={{ width: '100%' }}>Enviar</button>
            </form>
          </>
        )}

        {modalType === 'contact' && (
          <>
            <h3>Contato Comercial</h3>
            <form onSubmit={handleContactSubmit}>
              <input
                type="text"
                placeholder="Nome"
                required
                style={{ width: '100%', marginBottom: '1rem', padding: '8px' }}
              />
              <input
                type="email"
                placeholder="Email"
                required
                style={{ width: '100%', marginBottom: '1rem', padding: '8px' }}
              />
              <textarea
                placeholder="Mensagem"
                required
                rows="4"
                style={{ width: '100%', marginBottom: '1rem', padding: '8px' }}
              />
              <button type="submit" style={{ width: '100%' }}>Enviar</button>
            </form>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Login;
