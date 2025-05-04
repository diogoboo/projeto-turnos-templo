
import React, { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export function useAuthStatus() {
  const [usuario, setUsuario] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'usuarios', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUsuario(user);
          setTipo(docSnap.data().tipo || 'voluntario');
        } else {
          setUsuario(user);
          setTipo('voluntario');
        }
      } else {
        setUsuario(null);
        setTipo(null);
      }
      setCarregando(false);
    });

    return () => unsubscribe();
  }, []);

  return { usuario, tipo, carregando };
}

export function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    navigate('/');
  };

  return <button onClick={handleLogout}>Sair</button>;
}
