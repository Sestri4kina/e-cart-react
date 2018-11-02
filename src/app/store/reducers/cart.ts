import { CartState, INITIAL_CART_STATE } from "../types";
import {Action} from '../actions';
import { cartActionTypes } from "../actions/cart";
import { CartItem } from "../models/cart";

export const cartReducer = (
    state: CartState = INITIAL_CART_STATE,
    action: Action
): CartState => {
    switch(action.type) {
        case cartActionTypes.AddProductToCartSuccess: {
            const cartItems = action.payload;
            const totalItems = cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)
            return {
                ...state,
                cartItems,
                totalItems
            }
        }
        case cartActionTypes.GetCartItemsSuccess: {
            const cartItems = action.payload;
            const totalItems = cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)
            return {
                ...state,
                cartItems,
                totalItems
            }
        }
        case cartActionTypes.UpdateItemSuccess: {
            const cartItems = action.payload;
            const totalItems = cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)
            return {
                ...state,
                cartItems,
                totalItems
            }
        }
        case cartActionTypes.RemoveItemSuccess: {
            const cartItems = action.payload;
            const totalItems = cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0)
            return {
                ...state,
                cartItems,
                totalItems
            }
        }
        default:
            return state;
    }
}
