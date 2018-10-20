import { moltinBaseAPI, moltinAPI } from '../config';
import axios from 'axios';
import { accessToken } from '../services/handle-token';

export async function getProducts() {
    try {
        const productsPath = moltinBaseAPI + moltinAPI.productAPI;
        const token = accessToken();

        const headers: any = {};
        headers['Authorization'] = `Bearer ${token}`;

        const products = await axios.get(
            productsPath,
            { headers }
        ).then(res => res.data);

        return products;
    } catch(err) {
        console.log(err);
    }
}