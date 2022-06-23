import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from "./index";

import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Navbar from './components/Navbar/index';
import Shop from "./pages/Shop";

const App = observer( () => {
    const {user} = useContext(Context);

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Shop/>}/>
                <Route path={user.isAuth ? '/admin' : '/'} element={<Admin/>}/>
                <Route path={user.isAuth ? '/basket' : '/'} element={<Basket/>}/>
                <Route path={'/registration'} element={<Auth/>}/>
                <Route path={'/login'} element={<Auth/>}/>
                <Route path={'/device'+ '/:id'} element={<DevicePage/>}/>
                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Routes>
        </BrowserRouter>
    );
})

export default App;
