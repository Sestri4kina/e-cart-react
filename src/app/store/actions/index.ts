import {
    FetchProductsStart,
    FetchProductsSuccess,
    FetchProductsError
} from './products';

import {
    AddProductToCartStart,
    AddProductToCartSuccess,
    AddProductToCartError,
    GetCartItemsStart,
    GetCartItemsSuccess,
    GetCartItemsError
} from './cart';

export type Action = 
    FetchProductsStart 
    | FetchProductsSuccess
    | FetchProductsError
    | AddProductToCartStart
    | AddProductToCartSuccess
    | AddProductToCartError
    | GetCartItemsStart
    | GetCartItemsSuccess 
    | GetCartItemsError;
  
export * from './products';
export * from './cart';
