import * as React from 'react';
import { Product } from '../../store';

interface ProductItemProps {
    product: Product;
}

export const ProductItem = ({product}: ProductItemProps) => {
    return (
        <li>
            <img src={product.imageHref} />
            <h3>{product.name}</h3>
        </li>
    )
}
