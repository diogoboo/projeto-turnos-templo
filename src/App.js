
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import AdminRegister from './pages/AdminRegister';
import AdminPainel from './pages/AdminPainel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/painel" element={<AdminPainel />} />
      </Routes>
    </Router>
  );
}

export default App;
