import axios from 'axios';
import { authConstants } from '../actions/constants';
import store from '../store';
import { api } from '../urlConfig';

const token = localStorage.getItem('token')

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ''
    }
});


//fix loi khi header gui token cu
axiosInstance.interceptors.request.use((req) => {
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization = `Bearer ${auth.token}`;
    }
    return req;
})

// tra ve status 500 se chuyen ve trang login
// axiosInstance.interceptors.response.use((res) => {
//     return res;
// }, (error) => {
//     console.log(error.response);
//     const status = error.response ? error.response.status : 500;
//     if(status && status === 500){
//         localStorage.clear();
//         store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
//     }
//     return Promise.reject(error);
// })


export default axiosInstance;