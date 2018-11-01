import * as React from 'react';
import { CartItem } from '../../store/models/cart';
import {connect} from 'react-redux';
import {AppState, AppStore} from '../../store';
import {CartItemComponent} from '../../components';
import '../../../styles/grid.css';
import '../../../styles/index.css';

interface CartViewProps {
    cartItems: CartItem[];
}

class CartView extends React.Component<CartViewProps, {}> {
    render() {
        const {cartItems} = this.props;
        return (
            <>
                <h1 className="marg-left-lg marg-top-md">Cart</h1>
                <div className="grid-container-rows">
                    {
                        cartItems.map(_cartItem => {
                            return <CartItemComponent 
                                key={_cartItem.id} 
                                cartItem={_cartItem}/>
                        })
                    }
                </div>
                
                <button className="btn btn-primary-inverse marg-v-lg" type="button">Clear cart</button>
                <button className="btn btn-primary marg-v-lg" type="button">Buy</button>
            </>
        )
    }
}

export const Cart = connect<
    Pick<CartViewProps, 'cartItems'>, 
    {}, 
    {}, 
    AppState
>(
({cartState}: AppState) => ({cartItems: cartState.cartItems})
)(CartView);


