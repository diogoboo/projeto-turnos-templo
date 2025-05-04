
import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

function CadastroTurno() {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [diaSemana, setDiaSemana] = useState('');
  const [tipo, setTipo] = useState('');
  const [limite, setLimite] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'turnos'), {
        data,
        horario,
        dia_semana: diaSemana,
        tipo,
        limite: parseInt(limite),
        confirmados: []
      });
      setMensagem('Turno criado com sucesso!');
      setData('');
      setHorario('');
      setDiaSemana('');
      setTipo('');
      setLimite('');
    } catch (error) {
      setMensagem('Erro ao criar turno.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto' }}>
      <h2>Cadastrar Novo Turno</h2>
      <form onSubmit={handleSubmit}>
        <label>Data:</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
        <br />

        <label>Horário:</label>
        <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} required />
        <br />

        <label>Dia da Semana:</label>
        <input type="text" value={diaSemana} onChange={(e) => setDiaSemana(e.target.value)} required />
        <br />

        <label>Tipo:</label>
        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
        <br />

        <label>Limite de Pessoas:</label>
        <input type="number" value={limite} onChange={(e) => setLimite(e.target.value)} required />
        <br />

        <button type="submit">Criar Turno</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}

export default CadastroTurno;
