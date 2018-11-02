import * as React from 'react';
import { CartItem } from '../../store';
import '../../../styles/image.css';
import '../../../styles/containers.css';
import '../../../styles/index.css';
import '../../../styles/button.css';

interface CartItemProps {
    cartItem: CartItem;
    onUpdateItem: (itemId: string, quantity: number) => void
}
export const CartItemComponent = ({cartItem, onUpdateItem}: CartItemProps) => {
    const {name, image, description, quantity, id} = cartItem;
    return (
        <div className="grid-container-cart-item grey-container marg-h-sm">
            <div className="grid-item-cart">
                <img src={image.href} className="img img-sm" />
            </div>
            
            <div className="grid-item-cart">
                <h3>{name}</h3>
                <h5 className="text-grey marg-top-md">{description.slice(0,  100)}...</h5>
                <button className="btn btn-primary-inverse marg-top-md" type="button">
                    Remove from cart
                </button>
            </div>

            

            <div className="grid-item-cart">
                <h3 className="price text-grey">{price(cartItem)}</h3>
            </div>

            <div className="grid-item-cart t-center">
                <div className="control-buttons">
                    <button type="button" 
                        className="btn btn-primary-inverse d-inline-block"
                        onClick={() => onUpdateItem(id, quantity - 1)}>-</button>
                    <h2 className="d-inline-block marg-h-sm">{quantity}</h2>
                    <button type="button" 
                        className="btn btn-primary-inverse d-inline-block"
                        onClick={() => onUpdateItem(id, quantity + 1)}>+</button>
                </div>
            </div>

            <div className="grid-item-cart">
                <h3 className="price">{amount(cartItem)}</h3>
            </div>
            
        </div>
    )
}

const price = (cartItem: CartItem) => {
    return cartItem.meta.display_price.with_tax.unit.formatted;
}

 const amount = (cartItem: CartItem) => {
    return cartItem.meta.display_price.with_tax.value.formatted;
 }
