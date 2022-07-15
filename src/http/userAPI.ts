import jwt_decode from 'jwt-decode';

import { $authHost, $host } from './index';

type params = string;

export const registration = async (email: params, password: params) => {
    const { data } = await $host.post('api/user/registration', {email, password, role: 'ADMIN'});
    localStorage.setItem('token', data.token);

    return jwt_decode(data.token);
};

export const login = async (email: params, password: params) => {
    const { data } = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token);

    return jwt_decode(data.token);
};

export const check = async () => {
    try {
        const { data } = await $authHost.get('api/user/auth');
        localStorage.setItem('token', data.token);

        return jwt_decode(data.token);
    } catch (e) {
        alert('Internal server Error 500');
    }
};
