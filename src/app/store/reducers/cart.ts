import { CartState, INITIAL_CART_STATE, dataStatus } from "../types";
import {Action} from '../actions';
import { cartActionTypes } from "../actions/cart";
import { CartItem } from "../models/cart";
import produce from 'immer';

export const cartReducer = (
    state: CartState = INITIAL_CART_STATE,
    action: Action
): CartState => produce(state, (draft: CartState)  => {
    switch(action.type) {
        case cartActionTypes.AddProductToCartSuccess: 
        case cartActionTypes.GetCartItemsSuccess:
        case cartActionTypes.UpdateItemSuccess:
        case cartActionTypes.RemoveItemSuccess: {
            const cartItems = action.payload;
            draft.cartItems = cartItems;
            draft.status = dataStatus.isReady;
            break;
        }
        case cartActionTypes.RemoveCartSuccess: {
            draft.cartItems = [];
            draft.status = dataStatus.isNew;
            break;
        }
    }
})

/*
const getTotalAmount = (cartItems: CartItem[]) => {
    const _total = cartItems
        .reduce((sum: number, item: CartItem) => sum + item.value.amount, 0);
    return `$${_total * 0.01}.00`;
}

const getTotalItems = (cartItems: CartItem[]) => {
    return cartItems
        .reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
}
*/
