import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // ✅ importar PropTypes

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// ✅ Adicionar a validação das props
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
