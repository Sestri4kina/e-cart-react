import { AuthAPI, getAccessToken } from './auth-api';
import { ProductsAPI, getProducts } from './products-api';

export * from './auth-api';
export * from './products-api';
export interface ExternalAPI {
    authAPI: AuthAPI;
    productsAPI: ProductsAPI;
}

export const api = ():ExternalAPI => {
    return {
        authAPI: {
            getAccessToken
        },
        productsAPI: {
            getProducts
        }
    }
}
