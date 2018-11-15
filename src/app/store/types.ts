import {Product, CartItem} from './models';
import {History} from 'history';
import {ThunkAction} from 'redux-thunk';
import {ParametricSelector, Selector} from 'reselect';
import {ExternalAPI} from '../utils/remote-api';
import {Action} from './actions';

export const enum dataStatus {
    isLoading = 'LOADING',
    isReady = 'READY',
    isNew = 'NEW'
};

export type DataStatus = dataStatus.isLoading | dataStatus.isReady | dataStatus.isNew;

export interface ProductsState {
    products: Product[];
    status: DataStatus;
}

export interface CartState {
    cartItems: CartItem[];
    status: DataStatus;
}

export interface ErrorState {
    error: string;
}

export const INITIAL_PRODUCTS_STATE: ProductsState = {
    products: [],
    status: dataStatus.isNew,
};

export const INITIAL_CART_STATE: CartState = {
    cartItems: [],
    status: dataStatus.isNew,
}

export const INITIAL_ERROR_STATE: ErrorState = {
    error: '',
}

export interface AppState {
    productsState: ProductsState;
    cartState: CartState;
    errorState: ErrorState;
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

export type AppSelector<R> = Selector<AppState, R>;
export type AppParametricSelector<P, R> = ParametricSelector<AppState, P, R>;
export type AppParametricSelectorCreator<P, R> = () => AppParametricSelector<P, R>;
