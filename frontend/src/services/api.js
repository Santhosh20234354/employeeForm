import axios from 'axios';

const api = axios.create({
    baseURL: 'https://employeeform-backend-saaq.onrender.com'
});

export const addEmployee = (data) => api.post('/', data);
