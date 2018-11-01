import * as React from "react";
import {History} from 'history';

import { 
    persistAccessToken, 
    accessTokenIsExpired } 
    from './utils/services/handle-token';
import {getAccessToken} from './utils/remote-api/auth-api';

import {Route, Router, Switch} from 'react-router-dom';
import { AppStore, fetchProducts, getCartItems } from "./store";
import {Provider as ReduxProvider} from 'react-redux';
import {Header, Cart, Home} from "./containers";
export interface AppComponentProps {
    store: AppStore;
    history: History;
}
export interface AppComponentState {
    hasAccessToken: boolean;
 }
export class App extends React.Component<AppComponentProps, AppComponentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            hasAccessToken: false
        };
    }

    async getAccessToken() {
        if  (accessTokenIsExpired()) {
            const authenticate = await getAccessToken();
            persistAccessToken(authenticate.access_token, authenticate.expires);
        } else {
            console.log("there is already token in the storage");
        }

        this.setState({
            hasAccessToken: true
        });

        const {store} = this.props;
        store.dispatch(getCartItems());
    }

    componentDidMount() {
        this.getAccessToken();
    }

    private renderHome = () => {
        const {store} = this.props;
        store.dispatch(fetchProducts());
        return <Home />;
    }

    private renderCart = () => {
        return <Cart/>;
    }

    render() {
        const {hasAccessToken} = this.state;
        const {store, history} = this.props;
      
        return hasAccessToken && (
            <ReduxProvider store={store}>
                <Router history={history}>
                    <div>
                        <Header/>
                        <Switch>
                            <Route path="/" exact render={this.renderHome} />
                            <Route path="/cart"  render={this.renderCart} />
                        </Switch>
                    </div>
                </Router>
            </ReduxProvider>
        );
    }
}
