import * as React from 'react';
import { Product } from '../../store';
import '../../../styles/grid.css';
import '../../../styles/image.css';
import '../../../styles/containers.css';
import '../../../styles/product.css';
import '../../../styles/button.css';
import '../../../styles/index.css';
interface ProductItemProps {
    product: Product;
}

export const ProductItem = ({product}: ProductItemProps) => {
    const {name, imageHref} = product;
    const price = product.meta.display_price.with_tax.formatted;
    return (
        <div className="grid-item">
            <div className="product-container">
                <div className="img-container">
                    <img className="img" src={imageHref} />
                </div>
                <h3 className="product-name">{name}</h3>
                <h2 className="product-price">{price}</h2>
                <button type="button" className="btn btn-primary marg-v-md">Add to cart</button>
            </div>
        </div>
    )
}
