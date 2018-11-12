import {Action} from '../actions';
import {ProductsState, INITIAL_PRODUCTS_STATE} from '../types';
import { productsActionTypes } from '../actions/products';
import produce from 'immer';

export const productsReducer = (
    state: ProductsState = INITIAL_PRODUCTS_STATE,
    action: Action
): ProductsState => produce(state, (draft: ProductsState) => {
    switch (action.type) {
        case productsActionTypes.FetchProductsSuccess: {
            const products = action.payload;
            draft.products = products;
            draft.isLoading = false;
            break;
        } 
        case productsActionTypes.FetchProductsStart: {
            draft.isLoading = true;
            break;
        }
    }
})
