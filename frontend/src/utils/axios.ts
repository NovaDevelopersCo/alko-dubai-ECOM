import axios from 'axios'

const axiosServices = axios.create({
    baseURL: 'https://alkodostavka-dubai.ru' /*"https://alcoholdubai/api/"*/,
})

export { axiosServices }

export default axiosServices
