import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Ad en az 2 karakter olmalı')
        .required('Ad zorunludur'),
    lastName: Yup.string()
        .min(2, 'Soyad en az 2 karakter olmalı')
        .required('Soyad zorunludur'),
    email: Yup.string()
        .email('Geçerli email girin')
        .required('Email zorunludur'),
    password: Yup.string()
        .min(6, 'Parola en az 6 karakter olmalı')
        .required('Parola zorunludur'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Parolalar eşleşmiyor')
        .required('Parola tekrarı zorunludur'),
});

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Geçerli email girin')
        .required('Email zorunludur'),
    password: Yup.string()
        .required('Parola zorunludur'),
});
