import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5656/api/employees'
});

export const addEmployee = (data) => api.post('/', data);
