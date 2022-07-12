import React, { useContext } from 'react';
import { BrowserRouter, Route, Navigate, Routes, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Basket from './pages/Basket';
import { Context } from './index';
import DevicePage from './pages/DevicePage';
import Favorites from './pages/Favorites';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Shop from './pages/Shop';

import { IMobx, ProtectedRouteProps } from '../interfaces';

const App: React.FC = observer(() => {
    const { userStore: { isAuth }} = useContext<IMobx>(Context);

    const ProtectedRoute: ProtectedRouteProps = ({ auth, redirectPath = '/' }) => {
        if (auth) {
            return <Outlet />;
        }
        return <Navigate to={redirectPath} replace />;
    };

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route element={<ProtectedRoute auth={isAuth} redirectPath='/' />}>
                    <Route path={'/favorites'} element={<Favorites />} />
                    <Route path={'/admin'} element={<Admin />} />
                    <Route path={'/basket'} element={<Basket/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                </Route>
                <Route element={<ProtectedRoute auth={!isAuth} redirectPath='/' />}>
                    <Route path={'/registration'} element={<Auth/>}/>
                    <Route path={'/login'} element={<Auth/>}/>
                </Route>
                <Route path={'/'} element={<Shop/>}/>
                <Route path={'/device'+ '/:id'} element={<DevicePage/>}/>
                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
})

export default App;
