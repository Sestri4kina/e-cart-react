import * as React from "react";
import { Product } from "../../store";

export interface HomeState {
    products: Product[]
}

// move products logic here
export class Home extends React.Component<{}, {}> {
    render() {
        return (
        <div>
            Home component
        </div>
        )
    }
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
