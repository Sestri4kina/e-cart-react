import {
    FetchProductsStart,
    FetchProductsSuccess,
    FetchProductsError
} from './products';

import {
    AddProductToCartStart,
    AddProductToCartSuccess,
    AddProductToCartError
} from './cart';

export type Action = 
    FetchProductsStart 
    | FetchProductsSuccess
    | FetchProductsError
    | AddProductToCartStart
    | AddProductToCartSuccess
    | AddProductToCartError;
  
export * from './products';
