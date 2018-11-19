import * as React from 'react';
import { CartItemWithStock } from '@store/models';
import { connect } from 'react-redux';
import { AppState, AppStore } from '@store/index';
import { CartItemComponent } from '@components/index';
import '@styles/grid.css';
import '@styles/index.css';
import { updateItem, removeItem, removeCart } from '@store/actions';
import { createStructuredSelector } from 'reselect';
import { 
    selectCartItemsWithStock,
    selectLoadedStatus, 
    selectCartTotal, 
} from '@store/selectors/selectors';

interface CartViewProps {
    cartItemsWithStock: CartItemWithStock[];
    isLoaded: boolean;
    total: string;
    onUpdateItem: (itemId: string, quantity: number) => void;
    onRemoveItem: (itemId: string) => void;
    onRemoveCart: () => void;
}

class CartView extends React.Component<CartViewProps, {}> {
    render() {
        const { 
            cartItemsWithStock, isLoaded, total,
            onUpdateItem, onRemoveItem, onRemoveCart} = this.props;

        return (
            <>
                <h1 className="marg-left-lg marg-top-md">Cart</h1>
                {isLoaded &&
                    (<>
                        <div className="grid-container-rows">
                            {
                                cartItemsWithStock.map(item => {
                                    return <CartItemComponent 
                                        key={item.id} 
                                        cartItem={item}
                                        onUpdateItem={onUpdateItem}
                                        onRemoveItem={onRemoveItem}/>
                                })
                            }
                        </div>
                        <div className="marg-v-lg marg-h-lg">
                            <button type="button" 
                                className="btn btn-primary-inverse" 
                                onClick={() => onRemoveCart()}>Clear cart</button>
                            <div className="float-right">
                                <h1 className="marg-v-md">Total: {total}</h1>
                                <button type="button"
                                className="btn btn-primary btn-lg">Buy</button>
                            </div>
                        </div>
                    </>)}
            </>
        )
    }
}

export const Cart = connect<
    Pick<CartViewProps, 
    'cartItemsWithStock'
    | 'isLoaded'
    | 'total' 
    >, 
    Pick<CartViewProps, 'onUpdateItem' | 'onRemoveItem' | 'onRemoveCart'>, 
    {}, 
    AppState
>(
    createStructuredSelector({
        cartItemsWithStock: selectCartItemsWithStock,
        isLoaded: selectLoadedStatus,
        total: selectCartTotal
    }),
    (dispatch: AppStore['dispatch']) => ({
        onUpdateItem: (itemId: string, quantity: number) => dispatch(updateItem(itemId, quantity)),
        onRemoveItem: (itemId: string) => dispatch(removeItem(itemId)),
        onRemoveCart: () => dispatch(removeCart())
    })
)(CartView);
