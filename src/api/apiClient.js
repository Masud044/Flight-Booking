import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://flight-server-six.vercel.app',
  headers: { 'Content-Type': 'application/json' },
});

// Intercept every request to attach token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export default apiClient;
