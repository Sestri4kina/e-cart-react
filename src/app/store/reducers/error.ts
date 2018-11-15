import { 
    ErrorState, 
    INITIAL_ERROR_STATE 
} from "../types";
import { Action } from '../actions';
import { cartActionTypes, productsActionTypes, errorActionTypes } from "../actions";
import produce from 'immer';

export const errorReducer = (
    state: ErrorState = INITIAL_ERROR_STATE,
    action: Action
): ErrorState => produce(state, (draft: ErrorState)  => {
    switch(action.type) {
        case cartActionTypes.AddProductToCartError: 
        case cartActionTypes.GetCartItemsError:
        case cartActionTypes.UpdateItemError:
        case cartActionTypes.RemoveItemError: 
        case cartActionTypes.RemoveCartError: {
            const errorMessage = action.error.message;
            draft.error = errorMessage;
            break;
        }
        case productsActionTypes.FetchProductsError: {
            const errorMessage = action.error.message;
            draft.error = errorMessage;
            break;
        }
        case errorActionTypes.ClearErrorMessage: {
            draft.error = '';
            break;
        }
    }
})