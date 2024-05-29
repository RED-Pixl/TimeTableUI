import axios from 'axios';
import store from '../store/store.js'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:80',
  headers: {
    'Content-Type': 'application/json',
  }
});

apiClient.interceptors.request.use(config => {
    const token = store.getters.jwt;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
});

apiClient.interceptors.response.use(response => {
    console.log(response);
return response;
}, async error => {
    console.log(error);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = store.getters.refreshToken;

        // Try to refresh the token
        try {
        const response = await axios.post('website/refresh', {
            refreshToken: refreshToken
        });

        const { jwt, newRefreshToken } = response.data;
        await store.dispatch('saveTokens', { jwt, refreshToken: newRefreshToken });

        // Update the authorization header with the new token
        originalRequest.headers.Authorization = `Bearer ${jwt}`;
        return apiClient(originalRequest);
        } catch (refreshError) {
        // Handle refresh token failure: redirect to login page
        console.error('Token refresh failed:', refreshError);
        // Clear tokens
        await store.dispatch('saveTokens', { jwt: null, refreshToken: null });
        
        // Code for redirecting user
        }
    }
    return Promise.reject(error);
});

export default {
    // TODO: Add all endpoints with handling here
    // All the data passed through should be JS objects
    // The API will reject anything else
    // Specifics in naming are found in the documentation
    login(credentials) {
        return apiClient.post('/login', credentials);
    },
    schools(){
        return apiClient.get('/api/schools');
    }
};