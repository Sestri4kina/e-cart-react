import { moltinAPI } from '../config';
import { Product } from '../../store/models';
import {composeProductArray} from '../services/product-utils';
import { getRequest } from './generic-api';

export async function getProducts(): Promise<Product[]> {
    try {
        const products = await getRequest(
            moltinAPI.productAPI
        ).then(res => {
            const productsWithoutImage = res.data.data;
            const images = res.data.included.main_images;
            return composeProductArray(productsWithoutImage, images);
        });
        return products;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export interface ProductsAPI {
    getProducts(): Promise<Product[]>;
}
