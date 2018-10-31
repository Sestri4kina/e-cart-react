import { AppAction, AppCommand } from '../types';
import { addProductToCart as addProductToCartAPI} from '../../utils/remote-api';
import { CartItem } from '../models/cart';


export const enum cartActionTypes {
    AddProductToCartStart = 'AddProductToCartStart',
    AddProductToCartSuccess = 'AddProductToCartSuccess',
    AddProductToCartError = 'AddProductToCartError'
}

// ADD PRODUCT TO CART
export type AddProductToCartStart = AppAction<
    cartActionTypes.AddProductToCartStart,
    {productId: string}
>;
export function addProductToCartStart(productId: string): AddProductToCartStart {
    return {
        type: cartActionTypes.AddProductToCartStart,
        payload: {productId}
    };
}

export type AddProductToCartSuccess = AppAction<
    cartActionTypes.AddProductToCartSuccess,
    CartItem[]
>;
export function addProductToCartSuccess(cartItems: CartItem[]): AddProductToCartSuccess {
    return {
        type: cartActionTypes.AddProductToCartSuccess,
        payload: cartItems
    }
}

export type AddProductToCartError = AppAction<
    cartActionTypes.AddProductToCartError,
    Error
>;
export function addProductToCartError(error: Error): AddProductToCartError {
    return {
        type: cartActionTypes.AddProductToCartError,
        error
    }
}

export const addProductToCart = (productId: string): AppCommand =>
    async (dispatch, getState, {api}) => {
        dispatch(addProductToCartStart(productId));
        try {
            const cartItems = await addProductToCartAPI(productId);
            return dispatch(addProductToCartSuccess(cartItems));
        } catch (error) {
            return dispatch(addProductToCartError(error));
        }
    }
