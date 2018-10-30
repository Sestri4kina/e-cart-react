import { ProductWithoutImage, Product, ImageData } from "../../store/models";

export function composeProductArray(products: ProductWithoutImage[], images: ImageData[]): Product[] {
    let productsWithImages: Product[] = [];

    products.forEach(product => {
        let productWithImage: Product;
        const imageId = product.relationships.main_image.data.id;

        const image = images.find(image => {
            return image.id === imageId
        })

        const imageHref = !!image ? image.link.href : '';

        productWithImage = { ...product, imageHref };

        productsWithImages.push(productWithImage);
    });

    return productsWithImages;
}
