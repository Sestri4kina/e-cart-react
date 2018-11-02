import * as React from 'react';
import {Product} from "../../store/models";
import {connect} from 'react-redux';
import {AppState, AppStore} from '../../store';
import {ProductItem} from '../../components';
import '../../../styles/grid.css';
import { addProductToCart } from '../../store/actions/cart';

class ProductListView extends React.Component<ProductListProps, {}> {
    render() {
        const {products, onAddToCart} = this.props; 
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
    onAddToCart: (productId: string) => void;
}

// connect<IMapStateToProps, IMapDispatchToProps, ICompProps, IReduxState>
// connect(mapStateToProps, mapDispatchToProps)
// pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> pick only specified properties;
export const Home = connect<
    Pick<ProductListProps, 'products'>,
    Pick<ProductListProps, 'onAddToCart'>,
    {},
    AppState
>(
    ({productsState}: AppState) => ({products: productsState.products}),
    (dispatch: AppStore['dispatch']) => ({
        onAddToCart: (productId: string) => dispatch(addProductToCart(productId))
    })
)(ProductListView);

