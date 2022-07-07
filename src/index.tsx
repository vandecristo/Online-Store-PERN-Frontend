import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import { IMobx } from '../interfaces';


export const Context = createContext<IMobx>({
        userStore: {
            isAuth: false,
            setIsAuth: () => null,
            setUser: () => null,
        },
        deviceStore: {
            selectedType: {
                id: 0
            },
            setTypes: () => null,
            setBrands: () => null,
            setDevices: () => null,
            setSelectedType: () => null
        }
    }
);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store: any = {
    userStore : new UserStore(),
    deviceStore: new DeviceStore(),
};

root.render(
    <Context.Provider value={store}>
        <App/>
    </Context.Provider>
);
