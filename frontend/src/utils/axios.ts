import axios from 'axios';

const axiosServices = axios.create({ baseURL: 'http://localhost:5000/' /*"https://alcoholdubai/api/"*/ });

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && !window.location.href.includes('/login')) {
      window.location.pathname = '/login';
    }
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

export { axiosServices };

export default axiosServices