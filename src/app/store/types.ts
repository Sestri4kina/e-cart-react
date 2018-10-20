import { Product } from "./models";

//import {History} from 'history';
// import {ThunkAction} from 'redux-thunk';
// import {ParametricSelector, Selector} from 'reselect';

import { Action } from './actions';

export interface AppState {
    products: Product[]
}

export type AppAction<T extends string, P = null> = {type: T} & (
    P extends Error ? {error: P} : 
    P extends NonNullable<P> ? {payload: P} : 
    {}
);

// export type AppCommand<T = any> = ThunkAction<
//     Promise<T>,
//     AppState,
//     {dataLayer: AutoData, history: History},
//     Action
// >;




