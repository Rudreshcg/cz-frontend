import axios, { InternalAxiosRequestConfig } from 'axios';
import { get } from 'lodash';
export const getErrorMessage = (error: unknown) => {
  return get(error, 'response.data.message') || 'Something went wrong'
}

export const getSuccessMessage = (response: unknown) => {
  return get(response, 'data.message') || 'Success'
}
export const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_HTTP,
  headers: {
    'Content-type': 'application/json',
  },
})

http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const excludedUrls: string[] = [
  ];
  if (!excludedUrls.some((url) => config.url?.includes(url))) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
export default http;
