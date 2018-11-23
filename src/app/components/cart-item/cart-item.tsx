import * as React from 'react';
import { CartItemWithStock } from '@store/index';
import '@styles/image.css';
import '@styles/containers.css';
import '@styles/index.css';
import '@styles/button.css';

interface CartItemProps {
    cartItem: CartItemWithStock;
    onUpdateItem: (itemId: string, quantity: number) => void;
    onRemoveItem: (itemId: string) => void;
}
export const CartItemComponent = ({cartItem, onUpdateItem, onRemoveItem}: CartItemProps) => {
    const {
        name, image, description, 
        quantity, id, numberInStock, product_id
    } = cartItem;
    
    return (
        <div className="grid-container-cart-item grey-container marg-h-sm"
            data-testid="cart-item">
            <div className="grid-item-cart">
                <img src={image.href} className="img img-sm" />
            </div>
            
            <div className="grid-item-cart">
                <h3>{name}</h3>
                <h5 className="text-grey marg-top-md">{description.slice(0,  100)}...</h5>
                <button type="button" 
                    className="btn btn-primary-inverse marg-top-md" 
                    onClick={() => onRemoveItem(id)}>
                    Remove from cart
                </button>
            </div>

            

            <div className="grid-item-cart">
                <h3 className="price text-grey">{price(cartItem)}</h3>
            </div>

            <div className="grid-item-cart t-center">
                <div className="control-buttons">
                    <button type="button" 
                        className={"btn btn-primary-inverse d-inline-block " + (quantity === 1 && "disabled")}
                        disabled={quantity === 1}
                        onClick={() => onUpdateItem(id, quantity - 1)}>-</button>
                    <h2 className="d-inline-block marg-h-sm">{quantity}</h2>
                    <button type="button" 
                        className="btn btn-primary-inverse d-inline-block"
                        disabled={quantity >= numberInStock}
                        onClick={() => onUpdateItem(id, quantity + 1)}>+</button>
                </div>
            </div>

            <div className="grid-item-cart">
                <h3 className="price">{amount(cartItem)}</h3>
            </div>
            
        </div>
    )
}

const price = (cartItem: CartItemWithStock) => {
    return cartItem.meta.display_price.with_tax.unit.formatted;
}

 const amount = (cartItem: CartItemWithStock) => {
    return cartItem.meta.display_price.with_tax.value.formatted;
 }
