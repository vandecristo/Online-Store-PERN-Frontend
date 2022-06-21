import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import Loading from "./components/Loading";

const App = observer( ()=> {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setTimeout(() => {
            check().then( data => {
                user.setUser(true);
                user.setIsAuth(true);
            }).finally(() => setLoading(false));
        }, 2000)
    },[]);


    if (loading) {
        return <Loading/>
    }

    return (
        <BrowserRouter>
            <Navbar/>
            {loading ? <Loading/> : null}
            <AppRouter/>
        </BrowserRouter>
    );
})

export default App;