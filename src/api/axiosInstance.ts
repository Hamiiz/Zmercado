import axios from 'axios';

const api = axios.create({

  baseURL: import.meta.env.VITE_API_URL ,
  withCredentials: true, // if you use cookie-based refresh tokens
});



api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 403) {
      const next = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = `/refetch-token?next=${next}`;
      return new Promise(() => {}); // prevent further handling
    }
    return Promise.reject(error);
  }
);

export default api;
