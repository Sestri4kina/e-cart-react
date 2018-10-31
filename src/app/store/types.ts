import {Product, CartItem} from './models';
import {History} from 'history';
import {ThunkAction} from 'redux-thunk';
// import {ParametricSelector, Selector} from 'reselect';
import {ExternalAPI} from '../utils/remote-api';
import {Action} from './actions';

export interface ProductsState {
    products: Product[];
    isLoading: boolean;
}

export interface CartState {
    cartItems: CartItem[];
}

export const INITIAL_PRODUCTS_STATE: ProductsState = {
    products: [],
    isLoading: false
};

export const INITIAL_CART_STATE: CartState = {
    cartItems: []
}

export interface AppState {
    productsState: ProductsState;
    cartState: CartState;
}

export type AppAction<T extends string, P = null> = {type: T} & (
    P extends Error ? {error: P} : 
    P extends NonNullable<P> ? {payload: P} : 
    {}
);

export type AppCommand<T = any> = ThunkAction<
    Promise<T>,
    AppState,
    { api: ExternalAPI },
    Action
>;
