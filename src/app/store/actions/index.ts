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
    UpdateItemError,
    RemoveItemStart,
    RemoveItemSuccess,
    RemoveItemError,
    RemoveCartStart,
    RemoveCartSuccess,
    RemoveCartError,
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
    | UpdateItemError
    | RemoveItemStart
    | RemoveItemSuccess
    | RemoveItemError
    | RemoveCartStart
    | RemoveCartSuccess
    | RemoveCartError;
  
export * from './products';
export * from './cart';
