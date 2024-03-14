import axios from 'axios';

const axiosServices = axios.create({ baseURL: 'http://localhost:5000/' /*"https://alcoholdubai/api/"*/ });



export { axiosServices };

export default axiosServices