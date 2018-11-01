import { AppAction, AppCommand } from '../types';
import { addProductToCart as addProductToCartAPI, getCartItems as getCartItemsAPI} from '../../utils/remote-api';
import { CartItem } from '../models/cart';


export const enum cartActionTypes {
    AddProductToCartStart = 'AddProductToCartStart',
    AddProductToCartSuccess = 'AddProductToCartSuccess',
    AddProductToCartError = 'AddProductToCartError',
    GetCartItemsStart = 'GetCartItemsStart',
    GetCartItemsSuccess = 'GetCartItemsSuccess',
    GetCartItemsError = 'GetCartItemsError'
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

//  GET CART ITEMS
export type GetCartItemsStart = AppAction<cartActionTypes.GetCartItemsStart>;
export function getCartItemsStart() : GetCartItemsStart {
    return {
        type: cartActionTypes.GetCartItemsStart
    }
}

export type GetCartItemsSuccess = AppAction<
    cartActionTypes.GetCartItemsSuccess,
    CartItem[]
>;
export function getCartItemsSuccess(cartItems: CartItem[]): GetCartItemsSuccess {
    return {
        type: cartActionTypes.GetCartItemsSuccess,
        payload: cartItems
    }
}

export type GetCartItemsError = AppAction<
    cartActionTypes.GetCartItemsError,
    Error
>;
export function getCartItemsError(error: Error): GetCartItemsError {
    return {
        type: cartActionTypes.GetCartItemsError,
        error
    }
}

export const getCartItems = (): AppCommand => 
    async (dispatch, getState, {api}) => {
        dispatch(getCartItemsStart());
        try {
            const cartItems = await getCartItemsAPI();
            return dispatch(getCartItemsSuccess(cartItems));
        } catch(error) {
            return dispatch(getCartItemsError(error));
        }
    }

