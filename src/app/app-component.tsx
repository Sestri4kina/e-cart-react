import * as React from "react";
import {History} from 'history';

import { 
    persistAccessToken, 
    accessTokenIsExpired } 
    from './utils/services/handle-token';
import {getAccessToken} from './utils/remote-api/auth-api';
//import {Route, Router, Switch} from 'react-router-dom';
import {ProductList} from './containers';
import { AppStore } from "./store";
import {Provider as ReduxProvider} from 'react-redux';
export interface AppComponentProps {
    store: AppStore;
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
    }

    componentDidMount() {
        this.getAccessToken();
    }

    render() {
        const {hasAccessToken} = this.state;
        const {store} = this.props;

        return hasAccessToken && (
            <ReduxProvider store={store}>
                <ProductList />
            </ReduxProvider>
        );
    }
}
