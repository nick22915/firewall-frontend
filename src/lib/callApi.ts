import axios from 'axios';

const callApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Base URL of the API
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
callApi.interceptors.request.use(
    (config) => {
        // Here you can change the configuration of the request before sending it. Like add a authentication token if required
        console.log('Request interceptor:', config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
callApi.interceptors.response.use(
    (response) => {
        // Here you can change and format the response before it get to the component
        console.log('Response interceptor:', response.status);
        return response;
    },
    (error) => {
        // Manejo global de errores de respuesta
        if (error.response) {

            console.error('API Error Response:', error.response.data);
            console.error('API Error Status:', error.response.status);
            console.error('API Error Headers:', error.response.headers);
        } else if (error.request) {

            console.error('API Error Request:', error.request);
        } else {

            console.error('API Error Message:', error.message);
        }
        return Promise.reject(error);
    }
);

export default callApi;