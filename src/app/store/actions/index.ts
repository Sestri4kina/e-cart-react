import {
    FetchProductsStart,
    FetchProductsSuccess,
    FetchProductsError
} from './products';

export type Action = 
    FetchProductsStart 
    | FetchProductsSuccess
    | FetchProductsError;
    