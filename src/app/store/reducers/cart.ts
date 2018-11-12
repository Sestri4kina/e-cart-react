import { CartState, INITIAL_CART_STATE } from "../types";
import {Action} from '../actions';
import { cartActionTypes } from "../actions/cart";
import { CartItem } from "../models/cart";

export const cartReducer = (
    state: CartState = INITIAL_CART_STATE,
    action: Action
): CartState => {
    switch(action.type) {
        case cartActionTypes.AddProductToCartSuccess: 
        case cartActionTypes.GetCartItemsSuccess:
        case cartActionTypes.UpdateItemSuccess:
        case cartActionTypes.RemoveItemSuccess: {
            const cartItems = action.payload;
            const totalItems = cartItems.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
            const _total = cartItems.reduce((sum: number, item: CartItem) => sum + item.value.amount, 0);
            const total = `$${_total * 0.01}.00`
            return {
                ...state,
                cartItems,
                totalItems,
                total
            }
        }
        case cartActionTypes.RemoveCartSuccess: {
            const cartItems: CartItem[] = [];
            const totalItems = 0;
            const total = '$0.00';
            return {
                ...state,
                cartItems,
                totalItems,
                total
            }
        }
        default:
            return state;
    }
}
