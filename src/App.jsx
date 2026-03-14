import { useState, useEffect } from 'react'
import FormScreen from './components/FormScreen'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './components/FirebaseMain';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <Navbar user={user} />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Hoş geldin, {user.email}</h1>
            <p>Başarıyla giriş yaptın. Artık uygulamayı kullanabilirsin.</p>
          </div>
        </>
      ) : (
        <FormScreen />
      )}
      <ToastContainer position='top-right' autoClose={2000} />
    </div>
  )
}

export default App

