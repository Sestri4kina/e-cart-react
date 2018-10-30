import { Timestamps, DisplayPrice, Price } from "./shared";

export interface Products {
    data: Array<Product>;
    included: MainImages;
    links: Links;
    meta: ProductsMeta;
}

export interface Product extends ProductWithoutImage {
    imageHref: string;
}

export interface ProductWithoutImage {
    commodity_type: "physical" | "digital";
    description: string;
    id: string;
    manage_stock: boolean;
    meta: ProductMeta;
    name: string;
    price: Array<Price>;
    relationships: ProductRelationships;
    sku: string;
    slug: string;
    status: string;
    type: string;
}

interface ProductMeta {
    display_price: DisplayPrice;
    stock: {
        level: number;
        availability: "in-stock" | "out-stock"
    };
    variations: any;
    timestamps: Timestamps;
}


interface ProductRelationships {
    main_image: {
        data: {
            type: string; 
            id: string;
        }
    };
    files: {
        data: Array<{
            type: string; 
            id: string;
        }>
    };
    variations: any;
}

interface Links {
    current: string;
    first: string;
    last: string;
}

interface ProductsMeta {
    page: {
        current: number;
        limit: number;
        offset: number;
        total: number;
    };
    results: {
        total: number; 
        all: number;
    }
}

export interface MainImages {
    main_images: Array<ImageData>;
}

export interface ImageData {
    file_name: string;
    file_size: number;
    id: string;
    link: {
        href: string;
    },
    links: {
        self: string;
    },
    meta: {
        dimensions: {
            height: number;
            width: number;
        },
        timestamps: {
            created_at: string;
        }
    }
    mime_type: string;
    public: boolean;
    type: string;
}

