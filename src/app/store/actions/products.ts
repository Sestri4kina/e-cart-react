import { AppAction, AppCommand } from '../types';
import { Product } from '../models';
import {getProducts} from '../../utils/remote-api';


export const enum productsActionTypes {
    FetchProductsStart = 'FetchProductsStart',
    FetchProductsSuccess = 'FetchProductsSuccess',
    FetchProductsError = 'FetchProductsError',
    AddProductToCartStart = 'AddProductToCartStart',
    AddProductToCartSuccess = 'AddProductToCartSuccess',
    AddProductToCartError = 'AddProductToCartError'
}

// FETCH PRODUCTS
export type FetchProductsStart = AppAction<productsActionTypes.FetchProductsStart, null>;
export function fetchProductsStart(): FetchProductsStart {
    return {type: productsActionTypes.FetchProductsStart};
}

export type FetchProductsSuccess = AppAction<
    productsActionTypes.FetchProductsSuccess,
    Product[]
    >;
export function fetchProductsSuccess(products: Product[]): FetchProductsSuccess {
    return {
        type: productsActionTypes.FetchProductsSuccess,
        payload: products
    }
}

export type FetchProductsError = AppAction<
    productsActionTypes.FetchProductsError,
    Error
    >;
export function fetchProductsError(error: Error): FetchProductsError {
    return {
        type: productsActionTypes.FetchProductsError,
        error
    }
}

export const fetchProducts = (): AppCommand => 
    async (dispatch, getState, {api}) => {
        dispatch(fetchProductsStart());
        try {
            const products = await getProducts();
            return dispatch(fetchProductsSuccess(products));
        } catch (error) {
            return dispatch(fetchProductsError(error));
        }
    };

// ADD PRODUCT TO CART ACTION
export type AddProductToCartStart = AppAction<productsActionTypes.AddProductToCartStart, null>;
export function addProductToCartStart(): AddProductToCartStart {
    return {type: productsActionTypes.AddProductToCartStart};
}

export type AddProductToCartSuccess = AppAction<
    productsActionTypes.AddProductToCartSuccess,
    Product
>;
export function addProductToCartSuccess(product: Product): AddProductToCartSuccess {
    return {
        type: productsActionTypes.AddProductToCartSuccess,
        payload: product
    }
}

export type AddProductToCartError = AppAction<
    productsActionTypes.AddProductToCartError,
    Error
>;
export function addProductToCartError(error: Error): AddProductToCartError {
    return {
        type: productsActionTypes.AddProductToCartError,
        error
    }
}
/*
export const addProductToCart = (product: Product): AppCommand =>
    async (dispatch, getState, {api}) => {
        dispatch(addProductToCartStart(product));
        try {

        } catch (error) {
            return dispatch(addProductToCartError(error));
        }
    }
*/
