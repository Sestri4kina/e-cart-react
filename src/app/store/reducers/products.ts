import {Action} from '../actions';
import {ProductsState, INITIAL_PRODUCTS_STATE} from '../types';
import { productsActionTypes } from '../actions/products';

export const productsReducer = (
    state: ProductsState = INITIAL_PRODUCTS_STATE,
    action: Action
): ProductsState => {
    switch (action.type) {
        case productsActionTypes.FetchProductsStart: 
            return {...state, isLoading: true};
        case productsActionTypes.FetchProductsSuccess: 
            const products = action.payload;
            return {...state, products, isLoading: false}
        default:
            return state;
    }
}
