
import React, { useEffect, useState } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

function AdminPainel() {
  const [usuarios, setUsuarios] = useState([]);

  const carregarUsuarios = async () => {
    const querySnapshot = await getDocs(collection(db, 'usuarios'));
    const lista = [];
    querySnapshot.forEach((docSnap) => {
      lista.push({ id: docSnap.id, ...docSnap.data() });
    });
    setUsuarios(lista);
  };

  const promoverParaAdmin = async (uid) => {
    const ref = doc(db, 'usuarios', uid);
    await updateDoc(ref, { tipo: 'admin' });
    carregarUsuarios(); // atualizar a lista
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <div style={{ maxWidth: '700px', margin: '30px auto' }}>
      <h2>Painel de Administração - Usuários</h2>
      <table border="1" cellPadding="8" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Tipo</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.email}</td>
              <td>{u.tipo}</td>
              <td>
                {u.tipo !== 'admin' ? (
                  <button onClick={() => promoverParaAdmin(u.id)}>Promover para Admin</button>
                ) : (
                  '—'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPainel;
