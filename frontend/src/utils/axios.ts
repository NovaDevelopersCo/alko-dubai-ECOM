import axios from 'axios';

const axiosServices = axios.create({ baseURL: 'http://188.225.34.136' /*"https://alcoholdubai/api/"*/ });



export { axiosServices };

export default axiosServices