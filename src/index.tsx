import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import { IMobx } from "../interfaces";

export const Context = createContext<IMobx>({userStore: {}, deviceStore: {}});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store:IMobx = {
    userStore: new UserStore(),
    deviceStore: new DeviceStore(),
};

root.render(
    <Context.Provider value={store}>
        <App/>
    </Context.Provider>
);
