import * as React from "react";

// import { History } from 'history';
// import { Provider as ReduxProvider } from 'react-redux';
// import { Route, Router, Switch  } from 'react-router-dom';

import { 
    persistAccessToken, 
    accessTokenIsExpired } 
    from './utils/services/handle-token';
import {getAccessToken} from './utils/remote-api/auth-api';
import {getProducts} from './utils/remote-api/products-api';
import {ProductList} from './components/product-list';

/*
app component should contain only structural logic 


import {History} from 'history';
import {Provider as ReduxProvider} from 'react-redux';
import {Route, Router, Switch} from 'react-router-dom';

import {AutoLayout, Home, NoMatch} from './handlers';
import { AppStore, fetchCollectionsList } from './store';

export interface AppProps {
    store: AppStore;
    history: History;
}

export class App extends React.Component<AppProps> {
    public render() {
        const {store, history} = this.props;

        return (
            <ReduxProvider store={store}>
                <Router history={history}>
                    <WixThemeRoot data-automation-id="APP_ROOT">
                        <Switch>
                            <Route exact path="/" render={this.renderHome}/>
                            <AutoLayout prefix=""/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </WixThemeRoot>
                </Router>
            </ReduxProvider>
        );
    }

    private renderHome = () => {
        const {store} = this.props;
        store.dispatch(fetchCollectionsList());
        return <Home />;
    }
}
*/

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            products: []
        };
    }

    async fetchProducts() {
        if  (accessTokenIsExpired()) {
            const authenticate = await getAccessToken();
            persistAccessToken(authenticate.access_token, authenticate.expires);
        } else {
            console.log("there is already token in the storage");
        }

        const products = await getProducts();
        this.setState({
            products
        });
    }

    componentDidMount() {
        this.fetchProducts();
    }

    render() {
        const { products } = this.state;

        return !!products.length && (
            <div>
                <h1>
                    products
                </h1>
                <ProductList products={products} />
            </div>
        );
    }
}
