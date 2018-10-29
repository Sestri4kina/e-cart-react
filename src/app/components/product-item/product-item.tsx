import * as React from 'react';
import { Product } from '../../store';

interface ProductItemProps {
    product: Product;
}

export const ProductItem = ({product}: ProductItemProps) => {
    return (
        <li>{JSON.stringify(product)}</li>
    )
}
