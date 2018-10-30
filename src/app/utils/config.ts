export const clientId: string = "IvSweUpOW5OSrmVitHQmH09oSnTTkQcfhB7ZSHjYoc";

export const moltinBaseAPI: string = "https://api.moltin.com/";

export const moltinAPI = {
    accessTokenAPI: "oauth/access_token",
    productAPI: "v2/products?include=main_image",
    cartAPI: (cartRef: string) => `v2/carts/${cartRef}`,
    cartItemsAPI: (cartRef: string) => `v2/carts/${cartRef}/items`,
    cartItemAPI: (cartRef: string, itemId: string) => `v2/carts/${cartRef}/items/${itemId}`,
}

// cart reference is valid for 7 days since last update
// 7 days minus 5 minutes
export const timeCartIsValid: number = 7 * 24 * 55 * 60 * 1000; 
