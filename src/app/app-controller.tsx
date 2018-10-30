import * as React from 'react';
import {render} from 'react-dom';
import {createHashHistory} from 'history';
import {App} from './app-component';

declare let module: any;

 import {createAppStore, defaultState} from './store';

 export const AppStarter = () => {
    const store = createAppStore(defaultState);
    const history = createHashHistory();
    return (<App store={store} history={history}/>);
}

const rootNode = document.getElementById("root");
render(<AppStarter />, rootNode);

module.hot.accept();
 
