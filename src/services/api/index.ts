import axios from 'axios';
import { errorBoundary } from './errorBoundary';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

axiosInstance.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    errorBoundary(error);
    throw error;
  }
);
