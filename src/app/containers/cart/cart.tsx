import * as React from 'react';
import { CartItem } from '../../store/models/cart';
import {connect} from 'react-redux';
import {AppState, AppStore} from '../../store';
import {CartItemComponent} from '../../components';
import '../../../styles/grid.css';
import '../../../styles/index.css';
import { updateItem, removeItem, removeCart } from '../../store/actions/cart';

interface CartViewProps {
    cartItems: CartItem[];
    onUpdateItem: (itemId: string, quantity: number) => void;
    onRemoveItem: (itemId: string) => void;
    onRemoveCart: () => void;
}

class CartView extends React.Component<CartViewProps, {}> {
    render() {
        const {cartItems, onUpdateItem, onRemoveItem, onRemoveCart} = this.props;
        return (
            <>
                <h1 className="marg-left-lg marg-top-md">Cart</h1>
                <div className="grid-container-rows">
                    {
                        cartItems.map(_cartItem => {
                            return <CartItemComponent 
                                key={_cartItem.id} 
                                cartItem={_cartItem}
                                onUpdateItem={onUpdateItem}
                                onRemoveItem={onRemoveItem}/>
                        })
                    }
                </div>
                
                <div className="marg-v-lg marg-h-lg">
                    <button type="button" 
                        className="btn btn-primary-inverse" 
                        onClick={() => onRemoveCart()}>Clear cart</button>
                    <button type="button"
                        className="btn btn-primary float-right">Buy</button>
                </div>
            </>
        )
    }
}

export const Cart = connect<
    Pick<CartViewProps, 'cartItems'>, 
    Pick<CartViewProps, 'onUpdateItem' | 'onRemoveItem' | 'onRemoveCart'>, 
    {}, 
    AppState
>(
    ({cartState}: AppState) => ({cartItems: cartState.cartItems}),
    (dispatch: AppStore['dispatch']) => ({
        onUpdateItem: (itemId: string, quantity: number) => dispatch(updateItem(itemId, quantity)),
        onRemoveItem: (itemId: string) => dispatch(removeItem(itemId)),
        onRemoveCart: () => dispatch(removeCart())
    })
)(CartView);


