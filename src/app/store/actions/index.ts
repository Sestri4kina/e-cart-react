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
    GetCartItemsError,
    UpdateItemStart,
    UpdateItemSuccess,
    UpdateItemError
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
    | GetCartItemsError
    | UpdateItemStart
    | UpdateItemSuccess
    | UpdateItemError;
  
export * from './products';
export * from './cart';
