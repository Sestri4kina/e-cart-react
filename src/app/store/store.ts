import {History} from 'history';
import {applyMiddleware, createStore as createReduxStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk, {ThunkMiddleware} from 'redux-thunk';

import {Action} from './actions';
import {throwErrorMiddleware} from './middlewares';
import reducer from './reducers';
import {
    AppState, 
    INITIAL_PRODUCTS_STATE, 
    INITIAL_CART_STATE, 
    INITIAL_ERROR_STATE
} from './types';
import {api, ExternalAPI} from '../utils/remote-api';

export const defaultState: AppState = {
    productsState: INITIAL_PRODUCTS_STATE,
    cartState: INITIAL_CART_STATE,
    errorState: INITIAL_ERROR_STATE
};

export function createAppStore(initialState: Partial<AppState>) {
    const logger = createLogger({
        duration: true,
        timestamp: false,
        diff: true,
        collapsed: true
    });

    const thunkMiddleware = thunk.withExtraArgument({api}) as ThunkMiddleware<
        AppState,
        Action,
        {api: ExternalAPI}
    >;

    return createReduxStore(
        reducer,
        {...defaultState, ...initialState},
        applyMiddleware(
            thunkMiddleware,
            throwErrorMiddleware,
            logger
        )
    );
}

export type AppStore = ReturnType<typeof createAppStore>;
