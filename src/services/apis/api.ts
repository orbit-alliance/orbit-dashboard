import axios from 'axios';

export const internalApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const api42 = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_42_URL,
});

api42.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token42');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);