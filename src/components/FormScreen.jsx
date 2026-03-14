import React, { useState } from 'react'
import '../css/FormScreen.css'
import { useFormik } from 'formik'
import { RegisterSchema, LoginSchema } from './YupMenu'
import { auth } from './FirebaseMain'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa";

const provider = new GoogleAuthProvider();

function FormScreen() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleMode = () => {
        setIsLogin(!isLogin);
        resetForm();
    };

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: isLogin ? LoginSchema : RegisterSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                if (isLogin) {
                    const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password);
                    toast.success("Giriş Başarılı!");
                    console.log(userCredential.user);
                } else {
                    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
                    toast.success("Kayıt Başarılı!");
                    console.log(userCredential.user);
                }
                resetForm();
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('Bu email adresi zaten kullanımda.');
                } else if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
                    toast.error('Email veya şifre hatalı.');
                } else {
                    toast.error(error.message);
                }
            }
        }
    });

    const signWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            if (response.user) {
                toast.success(isLogin ? "Google ile Giriş Başarılı!" : "Google ile Kayıt Başarılı!");
            }
        }
        catch (error) {
            toast.error("Google İşlemi Başarısız");
        }
    };

    return (
        <div className='auth-container'>
            <div className='auth-card'>
                <h2>{isLogin ? "Giriş Yap" : "Kayıt Ol"}</h2>
                <p className='auth-subtitle'>
                    {isLogin ? "Hesabınıza giriş yapın" : "Yeni bir hesap oluşturun"}
                </p>

                <form onSubmit={handleSubmit} className='auth-form'>

                    {!isLogin && (
                        <div className="form-row">
                            <div className='form-group'>
                                <label>Adınız</label>
                                <input
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Adınız'
                                    type="text"
                                    className={errors.name && touched.name ? 'input-error' : ''}
                                />
                                {errors.name && touched.name && <div className="error-text">{errors.name}</div>}
                            </div>
                            <div className='form-group'>
                                <label>Soyadınız</label>
                                <input
                                    name='lastName'
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Soyadınız'
                                    type="text"
                                    className={errors.lastName && touched.lastName ? 'input-error' : ''}
                                />
                                {errors.lastName && touched.lastName && <div className="error-text">{errors.lastName}</div>}
                            </div>
                        </div>
                    )}

                    <div className='form-group'>
                        <label>Emailiniz</label>
                        <input
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='ornek@email.com'
                            type="email"
                            className={errors.email && touched.email ? 'input-error' : ''}
                        />
                        {errors.email && touched.email && <div className="error-text">{errors.email}</div>}
                    </div>

                    <div className='form-group'>
                        <label>Parola</label>
                        <input
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='••••••••'
                            type="password"
                            className={errors.password && touched.password ? 'input-error' : ''}
                        />
                        {errors.password && touched.password && <div className="error-text">{errors.password}</div>}
                    </div>

                    {!isLogin && (
                        <div className='form-group'>
                            <label>Parola Tekrar</label>
                            <input
                                name='confirmPassword'
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='••••••••'
                                type="password"
                                className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
                            />
                            {errors.confirmPassword && touched.confirmPassword && <div className="error-text">{errors.confirmPassword}</div>}
                        </div>
                    )}

                    <button type="submit" className='btn-primary'>
                        {isLogin ? "Giriş Yap" : "Kayıt Ol"}
                    </button>

                    <div className="divider">
                        <span>Veya</span>
                    </div>

                    <button type='button' onClick={signWithGoogle} className='btn-google'>
                        <FaGoogle /> Google ile devam et
                    </button>

                </form>

                <p className='auth-footer'>
                    {isLogin ? "Hesabınız yok mu? " : "Zaten hesabınız var mı? "}
                    <span onClick={toggleMode} className='toggle-link'>
                        {isLogin ? "Kayıt Ol" : "Giriş Yap"}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default FormScreen;
