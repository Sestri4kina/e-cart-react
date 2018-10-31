import { CartReference } from "../../store/models/cart";
import { timeCartIsValid } from "../config";

export function generateCartRefValue(): string {
    return (Math.random() * Math.pow(10, 16)).toString(36);
}

export function createCartRef(): void {
    const created_at = Date.now(), 
        modified_at = Date.now(),
        value = generateCartRefValue();

    const cartReference: CartReference = {
        value,
        created_at,
        modified_at
    };

    try {
        localStorage.setItem("cart_ref", JSON.stringify(cartReference));
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export function updateCartRef(): void {
    let cartReference = cartRefObject();

    cartReference = { ...cartReference, modified_at: Date.now() };
    try {
        localStorage.setItem("cart_ref", JSON.stringify(cartReference));
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export function cartRef(): string {
    try {
        return (JSON.parse(localStorage.getItem("cart_ref")!) as CartReference).value;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export function isCartRefValid(): boolean {
    if (!!cartRefObject()) {
        const cartReference = cartRefObject();

        const modified_at = cartReference.modified_at;
        const now = Date.now();

        return now - modified_at < timeCartIsValid;
    }
    return false;
}


export function cartRefObject(): CartReference {
    try {
        return JSON.parse(localStorage.getItem("cart_ref")!);
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

