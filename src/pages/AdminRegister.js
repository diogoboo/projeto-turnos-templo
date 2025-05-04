
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { setDoc, doc } from 'firebase/firestore';

function AdminRegister() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const credenciais = await createUserWithEmailAndPassword(auth, email, senha);
      await setDoc(doc(db, 'usuarios', credenciais.user.uid), {
        uid: credenciais.user.uid,
        email: email,
        tipo: 'voluntario',
        criado_em: new Date().toISOString()
      });
      setMensagem('Usuário criado com sucesso!');
      setEmail('');
      setSenha('');
    } catch (error) {
      setMensagem('Erro ao criar usuário: ' + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Cadastrar Novo Usuário</h2>
      <form onSubmit={handleRegister}>
        <label>Email:</label><br />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required /><br />
        <label>Senha:</label><br />
        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} required /><br />
        <button type="submit">Criar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default AdminRegister;
