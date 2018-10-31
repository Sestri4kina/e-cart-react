import { Timestamps, Price, DisplayPrice } from '../models';

export interface ItemRequest {
    quantity: number;
    type: "cart_item";
    id: string;
}

export interface Cart {
    data: {
        id: string;
        type: "cart";
        links: {
            self: string;
        };
        meta: Meta;
    }
}

export interface CartItems {
    data: Array<CartItem>;
    meta: Meta;
}

export interface CartItem {
    id: string;
    type: "cart_item";
    product_id: string;
    name: string
    description: string;
    sku: string;
    image: {
        mime_type: string;
        file_name: string;
        href: string;
    },
    quantity: number;
    manage_stock: boolean;
    unit_price: Price;
    value: Price;
    links: {
        product: string;
    };
    meta: Meta;
}

export interface Meta {
    display_price: DisplayPrice;
    timestamps: Timestamps;
}

