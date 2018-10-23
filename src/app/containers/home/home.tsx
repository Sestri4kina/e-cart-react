import React from "react";
// import { getAccessToken } from '../../utils/remote-api/auth-api';
// import { persistAccessToken, accessTokenIsExpired } from '../../utils/services/handle-token';
// import { getProducts } from '../../utils/remote-api/products-api';
// import { ProductList } from "../../components/product-list";

export interface HomeProps {}

export interface HomeState {}

// move products logic here
export class Home extends React.Component<HomeProps, HomeState> {
    // constructor(props: any) {
    //     super(props);
    //     this.state = {
    //         products: []
    //     };
    // }

    // async fetchProducts() {
    //     if  (accessTokenIsExpired()) {
    //         const authenticate = await getAccessToken();
    //         persistAccessToken(authenticate.access_token, authenticate.expires);
    //     } else {
    //         console.log("there is already token in the storage");
    //     }

    //     const products = await getProducts();
    //     this.setState({
    //         products
    //     });
    // }

    // componentDidMount() {
    //     this.fetchProducts();
    // }

    // render() {
    //     const { products } = this.state;

    //     return !!products.length && (
    //         <div>
    //             <h1>
    //                 products
    //             </h1>
    //             <ProductList products={products} />
    //         </div>
    //     );
    // }
}
