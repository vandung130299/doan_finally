import axios from 'axios';
import store from '../store';
import { api } from './../constants/Config';

const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    'Authorization': token ? `Bearer ${token}` : ''
  }
})

axiosInstance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  // console.error('token: ',auth.token)
  if(auth.token){
      req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
})

export default axiosInstance;