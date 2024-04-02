import axios from 'axios'

const axiosServices = axios.create({
    baseURL: "http://147.45.105.5" /*"https://alcoholdubai/api/"*/,
})

export { axiosServices }

export default axiosServices
