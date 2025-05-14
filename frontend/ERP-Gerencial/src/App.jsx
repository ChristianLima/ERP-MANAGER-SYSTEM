import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'; // Importa a PrivateRoute
import Dashboard from './pages/Dashboard';
import Login from './pages/login/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        {/* Outras rotas protegidas aqui */}
      </Routes>
    </Router>
  );
}

export default App;