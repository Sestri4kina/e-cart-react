import {combineReducers} from 'redux';
import {AppState} from '../types';

import {productsReducer} from './products';

export default combineReducers<AppState>({
    productsState: productsReducer
});
