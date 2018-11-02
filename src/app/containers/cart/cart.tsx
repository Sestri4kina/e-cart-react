import * as React from 'react';
import { CartItem } from '../../store/models/cart';
import {connect} from 'react-redux';
import {AppState, AppStore} from '../../store';
import {CartItemComponent} from '../../components';
import '../../../styles/grid.css';
import '../../../styles/index.css';
import { updateItem } from '../../store/actions/cart';

interface CartViewProps {
    cartItems: CartItem[];
    onUpdateItem: (itemId: string, quantity: number) => void
}

class CartView extends React.Component<CartViewProps, {}> {
    render() {
        const {cartItems, onUpdateItem} = this.props;
        return (
            <>
                <h1 className="marg-left-lg marg-top-md">Cart</h1>
                <div className="grid-container-rows">
                    {
                        cartItems.map(_cartItem => {
                            return <CartItemComponent 
                                key={_cartItem.id} 
                                cartItem={_cartItem}
                                onUpdateItem={onUpdateItem}/>
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
    Pick<CartViewProps, 'onUpdateItem'>, 
    {}, 
    AppState
>(
    ({cartState}: AppState) => ({cartItems: cartState.cartItems}),
    (dispatch: AppStore['dispatch']) => ({
        onUpdateItem: (itemId: string, quantity: number) => dispatch(updateItem(itemId, quantity))
    })
)(CartView);


