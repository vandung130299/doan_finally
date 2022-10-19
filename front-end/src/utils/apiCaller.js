import axios from 'axios';
import { api } from './../constants/Config';
export default function callApi(endpoint, method = 'GET', body, headers = null) {
    return axios({
        method,
        url: `${api}/${endpoint}`,
        data: body,
        headers
    });
}