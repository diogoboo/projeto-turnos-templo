
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminRegister from './pages/AdminRegister';
import { LogoutButton, useAuthStatus } from './services/useAuthStatus';

function App() {
  const { usuario, carregando } = useAuthStatus();

  if (carregando) return <p>Carregando...</p>;

  return (
    <Router>
      <div style={{ padding: '20px' }}>
        {usuario && (
          <div style={{ textAlign: 'right' }}>
            <LogoutButton />
            <p>Bem-vindo, {usuario.email}</p>
          </div>
        )}

        <Routes>
          {!usuario && <Route path="/" element={<Login />} />}
          {usuario && (
            <>
              <Route path="/" element={<p>Dashboard do Sistema de Turnos</p>} />
              <Route path="/admin" element={<AdminRegister />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
