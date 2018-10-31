import {combineReducers} from 'redux';
import {AppState} from '../types';

import {productsReducer} from './products';
import { cartReducer } from './cart';

export default combineReducers<AppState>({
    productsState: productsReducer,
    cartState: cartReducer
});
