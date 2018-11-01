import * as React from 'react';
import { CartItem } from '../../store';
import '../../../styles/image.css';
import '../../../styles/containers.css';
import '../../../styles/index.css';

interface CartItemProps {
    cartItem: CartItem;
}
export const CartItemComponent = ({cartItem}: CartItemProps) => {
    const {name, image, description} = cartItem;
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
                controls buttons
            </div>

            <div className="grid-item-cart">
                price
            </div>

            <div className="grid-item-cart">
                amount
            </div>
            
        </div>
    )
}
