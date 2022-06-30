import { useContext } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from "./index";
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import DevicePage from "./pages/DevicePage";
import Navbar from './components/Navbar/index';
import Shop from './pages/Shop';
import Favorites from './pages/Favorites';

const App = observer(() => {
    const { user } = useContext(Context);

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Shop/>}/>
                <Route path={user.isAuth ? '/admin' : '/'} element={<Admin/>}/>
                <Route path={user.isAuth ? '/favorites' : '/'} element={<Favorites/>}/>
                <Route path={user.isAuth ? '/' : '/registration'} element={<Auth/>}/>
                <Route path={user.isAuth ? '/' :'/login'} element={<Auth/>}/>
                <Route path={'/device'+ '/:id'} element={<DevicePage/>}/>
                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Routes>
        </BrowserRouter>
    );
})

export default App;
