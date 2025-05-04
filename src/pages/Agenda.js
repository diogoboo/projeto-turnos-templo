
import React, { useEffect, useState } from 'react';
import { db, auth } from '../services/firebase';
import { collection, getDocs, doc, updateDoc, arrayUnion } from 'firebase/firestore';

function Agenda() {
  const [turnos, setTurnos] = useState([]);
  const user = auth.currentUser;

  const carregarTurnos = async () => {
    const querySnapshot = await getDocs(collection(db, 'turnos'));
    const lista = [];
    querySnapshot.forEach((docSnap) => {
      lista.push({ id: docSnap.id, ...docSnap.data() });
    });
    setTurnos(lista);
  };

  const confirmarPresenca = async (turnoId) => {
    if (!user) return;
    const ref = doc(db, 'turnos', turnoId);
    await updateDoc(ref, {
      confirmados: arrayUnion(user.uid)
    });
    carregarTurnos(); // atualizar lista após confirmação
  };

  useEffect(() => {
    carregarTurnos();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto' }}>
      <h2>Agenda de Turnos (dados reais)</h2>
      {turnos.map((turno) => {
        const jaConfirmado = turno.confirmados?.includes(user?.uid);
        return (
          <div key={turno.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>
            <h4>{turno.dia_semana} - {turno.data} às {turno.horario}</h4>
            <p>Tipo: {turno.tipo}</p>
            <p>Confirmados: {turno.confirmados?.length || 0} / {turno.limite}</p>
            {jaConfirmado ? (
              <p style={{ color: 'green' }}>Presença confirmada</p>
            ) : (
              <button onClick={() => confirmarPresenca(turno.id)}>Confirmar Presença</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Agenda;
