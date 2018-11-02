import { AppAction, AppCommand } from '../types';
import { 
    addProductToCart as addProductToCartAPI, 
    getCartItems as getCartItemsAPI,
    updateItem as updateItemAPI,
    removeItem as removeItemAPI,
    removeCart as removeCartAPI
} from '../../utils/remote-api';
import { CartItem } from '../models/cart';


export const enum cartActionTypes {
    AddProductToCartStart = 'AddProductToCartStart',
    AddProductToCartSuccess = 'AddProductToCartSuccess',
    AddProductToCartError = 'AddProductToCartError',
    GetCartItemsStart = 'GetCartItemsStart',
    GetCartItemsSuccess = 'GetCartItemsSuccess',
    GetCartItemsError = 'GetCartItemsError',
    UpdateItemStart = 'UpdateItemStart',
    UpdateItemSuccess = 'UpdateItemSuccess',
    UpdateItemError = 'UpdateItemError',
    RemoveItemStart = 'RemoveItemStart',
    RemoveItemSuccess = 'RemoveItemSuccess',
    RemoveItemError = 'RemoveItemError',
    RemoveCartStart = 'RemoveCartStart',
    RemoveCartSuccess = 'RemoveCartSuccess',
    RemoveCartError = 'RemoveCartError',
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

// UPDATE ITEM
export type UpdateItemStart = AppAction<
    cartActionTypes.UpdateItemStart,
    {itemId: string; quantity: number;}
>;
export function updateItemStart(itemId: string, quantity: number): UpdateItemStart {
    return {
        type: cartActionTypes.UpdateItemStart,
        payload: { itemId, quantity }
    }
}

export type UpdateItemSuccess = AppAction<
    cartActionTypes.UpdateItemSuccess,
    CartItem[]
>;
export function updateItemSuccess(cartItems: CartItem[]): UpdateItemSuccess {
    return {
        type: cartActionTypes.UpdateItemSuccess,
        payload: cartItems
    }
}


export type UpdateItemError = AppAction<
    cartActionTypes.UpdateItemError,
    Error
>;
export function updateItemError(error: Error): UpdateItemError {
    return {
        type: cartActionTypes.UpdateItemError,
        error
    }
}

export const updateItem = (itemId: string, quantity: number): AppCommand =>
    async (dispatch, getState, {api}) => {
        dispatch(updateItemStart(itemId, quantity));
        try {
            const cartItems = await updateItemAPI(itemId, quantity);
            return dispatch(updateItemSuccess(cartItems));
        } catch(error) {
            return dispatch(updateItemError(error));
        }
    }

//  REMOVE ITEM
export type RemoveItemStart = AppAction<
    cartActionTypes.RemoveItemStart,
    string
>;
export function removeItemStart(itemId: string): RemoveItemStart {
    return {
        type: cartActionTypes.RemoveItemStart,
        payload: itemId
    }
}

export type RemoveItemSuccess = AppAction<
    cartActionTypes.RemoveItemSuccess,
    CartItem[]
>;
export function removeItemSuccess(cartItems: CartItem[]): RemoveItemSuccess {
    return {
        type: cartActionTypes.RemoveItemSuccess,
        payload: cartItems
    }
}

export type RemoveItemError = AppAction<
    cartActionTypes.RemoveItemError,
    Error
>;
export function removeItemError(error: Error): RemoveItemError {
    return {
        type: cartActionTypes.RemoveItemError,
        error
    }
}

export const removeItem = (itemId: string): AppCommand =>
    async (dispatch, getState, {api}) => {
        dispatch(removeItemStart(itemId));
        try {
            const cartItems = await removeItemAPI(itemId);
            return dispatch(removeItemSuccess(cartItems));
        } catch(error) {
            return dispatch(removeItemError(error));
        }
    }

//  REMOVE CART 
//  REMOVE ITEM
export type RemoveCartStart = AppAction<
    cartActionTypes.RemoveCartStart
>;
export function removeCartStart(): RemoveCartStart {
    return {
        type: cartActionTypes.RemoveCartStart
    }
}

export type RemoveCartSuccess = AppAction<
    cartActionTypes.RemoveCartSuccess,
    {type: string; id: string;}
>;
export function removeCartSuccess({type, id}: {type: string; id: string;}): RemoveCartSuccess {
    return {
        type: cartActionTypes.RemoveCartSuccess,
        payload: {type, id}
    }
}

export type RemoveCartError = AppAction<
    cartActionTypes.RemoveCartError,
    Error
>;
export function removeCartError(error: Error): RemoveCartError {
    return {
        type: cartActionTypes.RemoveCartError,
        error
    }
}

export const removeCart = (): AppCommand =>
    async (dispatch, getState, {api}) => {
        dispatch(removeCartStart());
        try {
            const result = await removeCartAPI();
            return dispatch(removeCartSuccess(result));
        } catch(error) {
            return dispatch(removeCartError(error));
        }
    }
