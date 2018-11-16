import { AppAction, AppCommand } from '@store/types';
import { Product } from '@store/models';
import {getProducts} from '@utils/remote-api';


export const enum productsActionTypes {
    FetchProductsStart = 'FetchProductsStart',
    FetchProductsSuccess = 'FetchProductsSuccess',
    FetchProductsError = 'FetchProductsError'
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

