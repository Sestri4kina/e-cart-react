import {Action} from '@store/actions';
import {ProductsState, INITIAL_PRODUCTS_STATE, dataStatus} from '@store/types';
import { productsActionTypes } from '@store/actions/products';
import produce from 'immer';

export const productsReducer = (
    state: ProductsState = INITIAL_PRODUCTS_STATE,
    action: Action
): ProductsState => produce(state, (draft: ProductsState) => {
    switch (action.type) {
        case productsActionTypes.FetchProductsSuccess: {
            const products = action.payload;
            draft.products = products;
            draft.status = dataStatus.isReady;
            break;
        } 
        case productsActionTypes.FetchProductsStart: {
            draft.status = dataStatus.isLoading;
            break;
        }
    }
})
