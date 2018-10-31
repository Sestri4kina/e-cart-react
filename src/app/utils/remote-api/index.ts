import { AuthAPI, getAccessToken } from './auth-api';
import { ProductsAPI, getProducts } from './products-api';
import { CartAPI, addProductToCart } from './cart-api';

export * from './auth-api';
export * from './products-api';
export * from './cart-api';

export interface ExternalAPI {
    authAPI: AuthAPI;
    productsAPI: ProductsAPI;
    cartAPI: CartAPI;
}

export const api = ():ExternalAPI => {
    return {
        authAPI: {
            getAccessToken
        },
        productsAPI: {
            getProducts
        },
        cartAPI: {
            addProductToCart
        }
    }
}
