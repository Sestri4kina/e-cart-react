import * as React from "react";
import * as ReactDOM from "react-dom";

import {App} from "./app-component";
import { 
    persistAccessToken, 
    accessTokenIsExpired } 
    from './utils/services/handle-token';
import {getAccessToken} from './utils/remote-api/auth-api';
declare let module: any;

 import {createAppStore, defaultState, AppStore} from './store';
 import {Provider as ReduxProvider} from 'react-redux';
 import {fetchProducts} from './store';
 export interface AppStarterState {
    hasAccessToken: boolean;
 }
 export class AppStarter extends React.Component<{}, AppStarterState>{

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
        const store = createAppStore(
            defaultState
        );

        return hasAccessToken && (
            <ReduxProvider store={store}>
                <App/>
            </ReduxProvider>
        );
    }
}

ReactDOM.render(
    <AppStarter/>,
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept();
 }

