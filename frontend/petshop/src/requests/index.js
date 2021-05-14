import axios from 'axios';
require('dotenv').config()

console.log('BASE URL',process.env.RESTAPI_BASE_URL)

const $host = axios.create({
    baseURL : 'http://localhost:9890'
})

const $authHost = axios.create({
    baseURL : 'http://localhost:9890'
})

const authInteceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInteceptor)

export {
    $host,
    $authHost
}