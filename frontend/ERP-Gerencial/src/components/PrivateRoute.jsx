import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
  // Para decodificar e verificar o token

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  // Se não houver token ou se o token estiver expirado, redireciona para a página de login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    // Decodifica o token e verifica sua data de expiração
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Obtém o tempo atual em segundos

    if (decodedToken.exp < currentTime) {
      // Se o token expirou, redireciona para o login
      localStorage.removeItem('token'); // Remover token inválido
      return <Navigate to="/login" replace />;
    }

    // Se o token estiver válido, retorna os filhos
    return children;
  } catch (error) {
    // Se não conseguir decodificar ou algum erro ocorrer, também redireciona para o login
    console.error("Erro capturado:", error);
    localStorage.removeItem('token'); // Limpa o token inválido
    return <Navigate to="/login" replace />;
  }
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
