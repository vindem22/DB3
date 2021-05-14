import {$authHost, $host} from './index';
import jwt_decode from 'jwt-decode';

export const getCartProducts = async () => {
    const {data} = await $authHost.post('api/cart')
    return data;
}

export const addProductToCard = async (productId) => {
    const {data} = await $authHost.post('api/cart/add', {productId})
    return jwt_decode(data);
}

export const removeProductToCard1 = async (productId) => {
    const {data} = await $host.post('api/cart/add', {productId})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
}