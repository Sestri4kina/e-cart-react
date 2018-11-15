import * as React from 'react';
import {Product} from "../../store/models";
import {connect} from 'react-redux';
import {AppState, AppStore, clearErrorMessage} from '../../store';
import {ProductItem} from '../../components';
import '../../../styles/grid.css';
import { addProductToCart } from '../../store/actions/cart';
import { createStructuredSelector } from 'reselect';
import { selectProducts, selectErrorMessage } from '../../store/selectors';

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
        
        return !!products.length && (
            <div className="grid-container-columns">
                {productList}
            </div>
        )
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

