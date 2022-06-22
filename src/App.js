import { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from "./index";

import { check } from './http/userAPI';
import AppRouter from './components/AppRouter/index';
import Navbar from './components/Navbar/index';
import Loading from './components/Loading/index';

const App = observer( () => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        check().then(data => {
            user.setUser(data);
            user.setIsAuth(true);
        }).finally(() => setLoading(false));
    });

    return (
        <BrowserRouter>
            <Navbar/>
            {loading ? (<Loading/>) : null}
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;
