import { CartState, INITIAL_CART_STATE } from "../types";
import {Action} from '../actions';
import { cartActionTypes } from "../actions/cart";

export const cartReducer = (
    state: CartState = INITIAL_CART_STATE,
    action: Action
): CartState => {
    switch(action.type) {
        case cartActionTypes.AddProductToCartSuccess: 
            const cartItems = action.payload;
            return {
                ...state,
                cartItems
            }
        default:
            return state;
    }
}