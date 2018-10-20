export interface Timestamps {
    created_at: string;
    updated_at: string;
}

export interface DisplayPrice {
    with_tax: {
        unit:FormattedPrice;
        value: FormattedPrice;
    };
    without_tax: {
        unit: FormattedPrice;
        value: FormattedPrice;
    }
}

export interface FormattedPrice {
    amount: number;
    currency: string;
    formatted: string;
}

export interface Price {
    amount: number;
    currency: string; 
    includes_tax: boolean;
}
