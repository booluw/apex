import axios from 'axios';
import { AxiosHttp } from './AxiosConfig';

const axiosInstance = axios.create({
  baseURL: 'https://apex-payments-eca4dc83534e.herokuapp.com/api',
});

const http = new AxiosHttp(axiosInstance)
export default http;