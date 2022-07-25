import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    if (config.headers.authorization === 'Bearer undefined') {
        localStorage.removeItem('token');

        return '';
    }

    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
