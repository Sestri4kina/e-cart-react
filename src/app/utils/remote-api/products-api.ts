import { moltinBaseAPI, moltinAPI } from '../config';
import axios from 'axios';
import { accessToken } from '../services/handle-token';
import { Product } from '../../store/models';

export async function getProducts(): Promise<Product[]> {
    try {
        const productsPath = moltinBaseAPI + moltinAPI.productAPI;
        const token = accessToken();

        const headers: any = {};
        headers['Authorization'] = `Bearer ${token}`;

        const products = await axios.get(
            productsPath,
            { headers }
        ).then(res => res.data.data);

        return products;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export interface ProductsAPI {
    getProducts(): Promise<Product[]>
}
