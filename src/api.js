import axios from 'axios';

const api = axios.create({
  baseURL: "https://wa-crud-learn-03-fngfgpbbb8apfugp.eastasia-01.azurewebsites.net"
});
export default api;