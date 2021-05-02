import axios from 'axios';

export const api = axios.create({
    baseURL : 'http://json-server:3333/'
})