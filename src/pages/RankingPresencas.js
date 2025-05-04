
import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

function RankingPresencas() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const carregarRanking = async () => {
      const querySnapshot = await getDocs(collection(db, 'turnos'));
      const contagem = {};

      querySnapshot.forEach((docSnap) => {
        const dados = docSnap.data();
        const confirmados = dados.confirmados || [];
        confirmados.forEach((uid) => {
          contagem[uid] = (contagem[uid] || 0) + 1;
        });
      });

      // Converter em array e buscar os e-mails
      const lista = await Promise.all(
        Object.entries(contagem).map(async ([uid, total]) => {
          const userDoc = await getDoc(doc(db, 'usuarios', uid));
          const email = userDoc.exists() ? userDoc.data().email : uid;
          return { uid, email, total };
        })
      );

      lista.sort((a, b) => b.total - a.total);
      setRanking(lista);
    };

    carregarRanking();
  }, []);

  return (
    <div style={{ maxWidth: '700px', margin: '30px auto' }}>
      <h2>Ranking de Presenças</h2>
      <table border="1" cellPadding="8" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Total de Presenças</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((user, index) => (
            <tr key={user.uid}>
              <td>{index + 1}</td>
              <td>{user.email}</td>
              <td>{user.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RankingPresencas;
