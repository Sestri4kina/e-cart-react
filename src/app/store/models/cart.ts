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
    data: CartItem[];
    meta: Meta;
}

export interface CartItemWithStock extends CartItem {
    numberInStock: number;
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
    meta: {
        display_price: {
            with_tax: {
                unit: {
                    amount: number;
                    currency: string;
                    formatted: string;
                };
                value: {
                    amount: number;
                    currency: string;
                    formatted: string;
                };
            };
            without_tax: {
                unit: {
                    amount: number;
                    currency: string;
                    formatted: string;
                };
                value: {
                    amount: number;
                    currency: string;
                    formatted: string;
                };
            }
        };
        timestamps: Timestamps
    };
}

export interface Meta {
    display_price: DisplayPrice;
    timestamps: Timestamps;
}

export interface CartReference {
    value: string;
    created_at: number;
    modified_at: number;
}
