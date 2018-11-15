import { createSelector } from 'reselect';
import { AppSelector, AppState } from '../types';
import { CartItem, Product, CartItemWithStock } from '../models';

export const selectCartItems: AppSelector<CartItem[]> = 
    ({cartState}: AppState) => cartState.cartItems;
export const selectCartItemsLoadedStatus: AppSelector<boolean> = 
    ({cartState}: AppState) => cartState.status === 'READY';

export const selectProducts: AppSelector<Product[]> = 
    ({productsState}: AppState) => productsState.products;
export const selectProductsLoadedStatus: AppSelector<boolean> =
    ({productsState}: AppState) => productsState.status === 'READY';

export const selectLoadedStatus: AppSelector<boolean> = 
    ({cartState, productsState}: AppState) => 
    (cartState.status === 'READY') && (productsState.status === 'READY');

export const selectCartTotal = createSelector(
    selectCartItems, 
    cartItems => {
        return getCartTotal(cartItems);
    }
);

export const selectCartItemsTotal = createSelector(
    selectCartItems, 
    cartItems => {
        return getCartItemsTotal(cartItems);
    }
);

export const selectCartItemsWithStock = createSelector(
    selectCartItems,
    selectProducts,
    selectLoadedStatus,
    (cartItems, products, isLoaded) => {
        return isLoaded ? getCartItemsWithStock(cartItems, products) : [];
    }
);

const getCartTotal = (cartItems: CartItem[]) => {
    const _total = cartItems
        .reduce((sum: number, item: CartItem) => sum + item.value.amount, 0);
    return `$${_total * 0.01}.00`;
}

const getCartItemsTotal = (cartItems: CartItem[]) => {
    return cartItems
        .reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
}

const getCartItemsWithStock = (cartItems: CartItem[], products: Product[]): CartItemWithStock[] => {
    const cartItemsWithStock = cartItems.map(item => {
        const product = products.find(product => product.id === item.product_id);
        return {...item, numberInStock: product!.meta.stock.level};
    });
    return cartItemsWithStock;
};

