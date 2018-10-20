import * as React from "react";
import { getAccessToken } from './utils/remote-api/auth-api';
import { persistAccessToken, accessTokenIsExpired } from './utils/services/handle-token';
import { getProducts } from './utils/remote-api/products-api';
import { AccessToken } from "./store";

export class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    auth() {
        getAccessToken()
            .then((res: AccessToken) => {
                console.log(res);
                persistAccessToken(res.access_token, res.expires);
            })
            .catch(err => {
                console.log(err);
            })
    }

    products() {
        getProducts()
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            }) 
    }

    componentDidMount() {
        if(accessTokenIsExpired()) {
            this.auth();
        } else {
            console.log("there is already token in the storage");
        }
        this.products();
    }

    render() {
        return (
            <div>
                <h1>
                    Render react app
                </h1>
            </div>
        );
    }
}
