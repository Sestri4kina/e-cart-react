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

import {
    ClearErrorMessage
} from './error';

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
    | RemoveCartError
    | ClearErrorMessage;
  
export * from './products';
export * from './cart';
export * from './error';
