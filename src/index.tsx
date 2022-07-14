import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import { IMobx } from '../interfaces';
import { SnackbarProvider } from 'notistack';

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
            selectedBrand: {
                id: 0
            },
            setTypes: () => null,
            setBrands: () => null,
            setDevices: () => null,
            setSelectedType: () => null,
            setSelectedBrand: () => null
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
    <SnackbarProvider
        maxSnack={2}
        autoHideDuration={1500}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
    >
        <Context.Provider value={store}>
            <App/>
        </Context.Provider>
    </SnackbarProvider>
);
