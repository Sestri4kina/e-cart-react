import * as React from 'react';
import { Product } from "../../store/models";

export interface ProductListProps {
    products: Product[];
}

export function ProductList(props: ProductListProps) {
    const { products } = props;
    const productList = products.map((product: Product) => {
        return (<li key={product.id}> {product.name} </li>)
    });

    return (
        <ul>
            { productList }
        </ul>
    )
}
