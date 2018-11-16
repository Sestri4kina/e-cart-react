import { CartState, INITIAL_CART_STATE, dataStatus } from "@store/types";
import { Action } from '@store/actions';
import { cartActionTypes } from "@store/actions/cart";
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
        case cartActionTypes.AddProductToCartError: {

        }
    }
})
