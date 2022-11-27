import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.forensicais.xxcf.cf',
});

export default apiClient;
