import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const $host = axios.create({
    baseURL: REACT_APP_API_URL
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${ localStorage.getItem('token') }`;
    return config;
};

$host.interceptors.request.use(authInterceptor);

export { $host };
