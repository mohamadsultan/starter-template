import axios, { AxiosError, AxiosResponse } from 'axios';
import { clearToken, getToken, storeToken } from 'utils/main-utils';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Pragma: 'no-cache',
    'Cache-control': 'no-cache',
    timeout: 20000,
  },
});
api.interceptors.request.use(function (config) {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
const goToLogin = () => {
  clearToken();
  window.location.href = '/login';
};
api.interceptors.response.use(
  function (response: AxiosResponse) {
    const token = response.headers['token_expired'];
    if (token) {
      storeToken(token);
    }
    return response;
  },
  function (error: AxiosError) {
    if (error.response?.status == 401 || !error.response) {
      goToLogin();
    }
    return Promise.reject(error);
  },
);
export default api;
