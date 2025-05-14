import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // remove o token do usuário
    navigate('/login'); // redireciona para tela de login
  };

  return (
    <button onClick={handleLogout}>
      Sair
    </button>
  );
}

export default Logout;
