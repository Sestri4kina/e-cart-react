import { postRequest, getRequest, putRequest, deleteRequest } from './generic-api';
import {cartRef, isCartRefValid, createCartRef} from '../services/cart-utils';
import { CartItem } from '../../store/models/cart';
import { moltinAPI } from '../config';

export async function addProductToCart(productId: string): Promise<CartItem[]> {
    const cartRef = getCartRef();
    const item = {
        id: productId,
        quantity: 1,
        type: "cart_item"
    }
    try {
        const cartItems = await postRequest(
            moltinAPI.cartItemsAPI(cartRef),
            {data: item}
        ).then(res => res.data.data);

        return cartItems;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export async function getCartItems(): Promise<CartItem[]> {
    const cartRef = getCartRef();
    try {
        const cartItems = await getRequest(
            moltinAPI.cartItemsAPI(cartRef),
        ).then(res => {
            return res.data.data;
        });

        return cartItems;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export async function updateItem(itemId: string, quantity: number): Promise<CartItem[]> {
    const cartRef = getCartRef();
    const item = {
        id: itemId,
        quantity,
        type: "cart_item"
    }
    try {
        const cartItems = await putRequest(
            moltinAPI.cartItemAPI(cartRef, itemId),
            {data: item}
        ).then(res => {
            return res.data.data;
        });

        return cartItems
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export async function removeItem(itemId: string): Promise<CartItem[]> {
    const cartRef = getCartRef();
    try {
        const cartItems = await deleteRequest(
            moltinAPI.cartItemAPI(cartRef, itemId)
        ).then(res => {
            return res.data.data;
        });

        return cartItems
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export async function getCart(): Promise<any> {
    const cartRef = getCartRef();
    try {
        const cart = await getRequest(
            moltinAPI.cartAPI(cartRef),
        ).then(res => {
            console.log(res);
            return res.data.data;
        });

        return cart;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

function getCartRef() {
    if (!isCartRefValid()) {
        createCartRef();
    }

    return  cartRef();
}

export interface CartAPI {
    addProductToCart(productId: string): Promise<CartItem[]>;
    getCartItems(): Promise<CartItem[]>;
    updateItem(itemId: string, quantity: number): Promise<CartItem[]>;
    removeItem(itemId: string): Promise<CartItem[]>;
}
