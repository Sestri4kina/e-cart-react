import { AuthAPI } from './auth-api';
import { ProductsAPI } from './products-api';

export * from './auth-api';
export * from './products-api';
export interface ExternalAPI {
    authAPI: AuthAPI;
    productsAPI: ProductsAPI;
}
