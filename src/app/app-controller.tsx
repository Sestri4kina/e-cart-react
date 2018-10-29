import * as React from 'react';
import {render} from 'react-dom';

import {App} from './app-component';

declare let module: any;

 import {createAppStore, defaultState} from './store';

 export const AppStarter = () => {
    const store = createAppStore(defaultState);
    return (<App store={store} />);
}

const rootNode = document.getElementById("root");
render(<AppStarter />, rootNode);

if (module.hot) {
    module.hot.accept();
 }
