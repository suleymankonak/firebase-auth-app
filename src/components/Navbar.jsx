import React from 'react';
import { auth } from './FirebaseMain';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import '../css/Navbar.css';

function Navbar({ user }) {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Başarıyla çıkış yapıldı.");
        } catch (error) {
            toast.error("Çıkış yapılırken bir hata oluştu.");
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                FirebaseApp
            </div>
            <div className="navbar-user">
                <div className="user-info">
                    <span className="user-email">{user.email}</span>
                    <span className="user-status">Çevrimiçi</span>
                </div>
                <button onClick={handleLogout} className="btn-logout">
                    Çıkış Yap
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
