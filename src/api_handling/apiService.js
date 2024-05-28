import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'domain goes here',
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
return response;
}, async error => {
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
        //clear tokens
        await store.dispatch('saveTokens', { jwt: null, refreshToken: null });
        
        // code for redirecting user
        }
    }
    return Promise.reject(error);
});

export default {
    // TODO: Add all endpoints with handling here
    // all the data passed through should be JS objects
    // The API will reject anything else
    // Specifics in naming are found in the documentation
    getResource() {
        return apiClient.get('/endpoints');
    },
    postResource(data) {
        return apiClient.post('/endpoints', data);
    },
    putResource(data) {
        return apiClient.put('/endpoints', data);
    },
    login(credentials) {
        return apiClient.post('/login', credentials);
    }
};