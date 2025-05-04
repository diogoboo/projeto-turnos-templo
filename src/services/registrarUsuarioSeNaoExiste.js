
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function registrarUsuarioSeNaoExiste(user) {
  if (!user) return;

  const docRef = doc(db, 'usuarios', user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    await setDoc(docRef, {
      uid: user.uid,
      email: user.email,
      tipo: 'voluntario',
      criado_em: new Date().toISOString()
    });
  }
}
