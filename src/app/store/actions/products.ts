import { AppAction } from '../types';
import { Product } from '../models';

export type FetchProductsStart = AppAction<'FetchProductsStart', null>;
export function fetchProductsStart(): FetchProductsStart {
    return {type: 'FetchProductsStart'};
}

export type FetchProductsSuccess = AppAction<
    'FetchProductsSuccess',
    Product[]
    >;
export function fetchProductsSuccess(products: Product[]): FetchProductsSuccess {
    return {
        type: 'FetchProductsSuccess',
        payload: products
    }
}

export type FetchProductsError = AppAction<
    'FetchProductsError',
    Error
    >;
export function fetchProductsError(error: Error): FetchProductsError {
    return {
        type: 'FetchProductsError',
        error
    }
}

