import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importar as páginas
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import AdminRegister from './pages/AdminRegister';
import AdminPainel from './pages/AdminPainel';
import Agenda from './pages/Agenda';
import CadastroTurno from './pages/CadastroTurno';
import RankingPresencas from './pages/RankingPresencas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/painel" element={<AdminPainel />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/cadastrar" element={<CadastroTurno />} />
        <Route path="/ranking" element={<RankingPresencas />} />
      </Routes>
    </Router>
  );
}

export default App;
