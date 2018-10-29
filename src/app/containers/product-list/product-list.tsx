import * as React from 'react';
import {Product} from "../../store/models";
import {connect} from 'react-redux';
import {AppState, fetchProducts, AppStore} from '../../store';
import { ProductItem } from '../../components';

class ProductListView extends React.Component<ProductListProps, {}> {
    componentDidMount() {
        this.props.onFetchProducts();
    }

    render() {
        const {products} = this.props; 
        const productList = products.map((product: Product) => {
            return (<ProductItem key={product.id} product={product} />)
        });
        
        return !!products.length && (
            <ul>
                {productList}
            </ul>
        )
    }
}

interface ProductListProps {
    products: Product[];
    onFetchProducts: () => void;
}

// connect<IMapStateToProps, IMapDispatchToProps, ICompProps, IReduxState>
// connect(mapStateToProps, mapDispatchToProps)
// pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> pick only specified properties;
export const ProductList = connect<
    Pick<ProductListProps, 'products'>,
    Pick<ProductListProps, 'onFetchProducts'>,
    {},
    AppState
>(
    ({productsState}: AppState) => ({products: productsState.products}),
    (dispatch: AppStore['dispatch']) => ({
        onFetchProducts: () => dispatch(fetchProducts())
    })
)(ProductListView);

