import * as React from 'react';
import { Product } from '@store/models';
import '@styles/grid.css';
import '@styles/image.css';
import '@styles/containers.css';
import '@styles/product.css';
import '@styles/button.css';
import '@styles/index.css';
interface ProductItemProps {
    product: Product;
    onAddToCart: (productId: string) => void
}

export const ProductItem = ({product, onAddToCart}: ProductItemProps) => {
    const {name, imageHref} = product;
    const price = product.meta.display_price.with_tax.formatted;
    return (
        <div className="grid-item" data-testid="product-item">
            <div className="grey-container">
                <div className="img-container" data-testid="product-img">
                    <img className="img" src={imageHref}/>
                </div>
                <h3 className="product-name" data-testid="product-name">{name}</h3>
                <h2 className="product-price" data-testid="product-price">{price}</h2>
                <button type="button" 
                    className="btn btn-primary marg-v-md"
                    data-testid="product-btn"
                    onClick={() => onAddToCart(product.id)}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}
