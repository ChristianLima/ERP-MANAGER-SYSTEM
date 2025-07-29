import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import UsersPage from './pages/UsersPage/UsersPage';

// ...

<Route path="/usuarios" element={<UsersPage />} />


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/usuarios" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
