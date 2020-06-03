import axios from 'axios';

export const projectClient = axios.create({
    baseURL: 'http://localhost:8080',
    //baseURL: '',
    headers: {
        'Content-Type': 'application/json'        
    }, 
    withCredentials: true
})