import { moltinAPI } from '@utils/config';
import { Product } from '@store/models';
import {composeProductArray} from '@utils/services/product-utils';
import { getRequest, handleError } from './generic-api';

export async function getProducts(): Promise<Product[]> {
    try {
        const products = await getRequest(
            moltinAPI.productAPI
        ).then(res => {
            //console.log(res.data);
            const productsWithoutImage = res.data.data;
            const images = res.data.included.main_images;
            return composeProductArray(productsWithoutImage, images);
        });
        return products;
    } catch(err) {
        return handleError(err);
    }
}

export interface ProductsAPI {
    getProducts(): Promise<Product[]>;
}
