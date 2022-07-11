import jwt_decode from 'jwt-decode';

import { $host } from './index';

export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', {email, password, role: 'ADMIN'});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const check = async () => {
    try {
        const { data } = await $host.get('api/user/auth');
        localStorage.setItem('token', data.token);
        return jwt_decode(data.token);
    } catch (e) {
        alert(e);
    }
};