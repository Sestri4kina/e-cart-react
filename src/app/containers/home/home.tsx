import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import '@styles/grid.css';

import {Product} from '@store/models';
import {AppState, AppStore, clearErrorMessage} from '@store/index';
import {ProductItem} from '@components/index';
import { addProductToCart } from '@store/actions';
import { selectProducts, selectErrorMessage } from '@store/selectors';

class ProductListView extends React.Component<ProductListProps, {}> {
    render() {
        const {products, error, onAddToCart, clearErrorMessage} = this.props; 

        if (error) {
            alert(error);
            console.log(`Error on home page: ${error}`);
            clearErrorMessage();
        }
        const productList = products.map((product: Product) => {
            return (<ProductItem 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
                />)
        });
        
        return (
            <>
                <h1 data-testid="home-title" className="marg-left-lg marg-top-md">Home</h1>
                {!!products.length && (
                    <div className="grid-container-columns">
                        {productList}
                    </div>)}
            </>)
    }
}

interface ProductListProps {
    products: Product[];
    error: string;
    onAddToCart: (productId: string) => void;
    clearErrorMessage: () => void;
}

// connect<IMapStateToProps, IMapDispatchToProps, ICompProps, IReduxState>
// connect(mapStateToProps, mapDispatchToProps)
// pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> pick only specified properties;
export const Home = connect<
    Pick<ProductListProps, 'products' | 'error'>,
    Pick<ProductListProps, 'onAddToCart' | 'clearErrorMessage'>,
    {},
    AppState
>(
    createStructuredSelector({
        products: selectProducts,
        error: selectErrorMessage
    }),
    (dispatch: AppStore['dispatch']) => ({
        onAddToCart: (productId: string) => dispatch(addProductToCart(productId)),
        clearErrorMessage: () => dispatch(clearErrorMessage()),
    })
)(ProductListView);

