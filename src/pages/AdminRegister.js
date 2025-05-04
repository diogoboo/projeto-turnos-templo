
import React, { useState } from 'react';
import { auth } from '../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function AdminRegister() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      setMensagem('Usuário criado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao criar usuário: ' + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Criar novo usuário</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label><br />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label><br />
          <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required />
        </div>
        <button type="submit">Criar</button>
        {mensagem && <p>{mensagem}</p>}
      </form>
    </div>
  );
}

export default AdminRegister;
