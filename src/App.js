import { useContext } from 'react';
import { BrowserRouter, Route, Navigate, Routes, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from "./index";

import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Navbar from './components/Navbar/index';
import Profile from './pages/Profile/index';
import Shop from "./pages/Shop";
import Favorites from "./pages/Favorites";

const App = observer(() => {
    const { userStore: { isAuth }} = useContext(Context);

    const ProtectedRoute = ({ auth, redirectPath = '/' }) => {
        if (auth) {
            return <Outlet />;
        }
        return <Navigate to={redirectPath} replace />;
    };

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route element={<ProtectedRoute auth={isAuth} />}>
                    <Route path={'/favorites'} element={<Favorites />} />
                    <Route path={'/admin'} element={<Admin />} />
                    <Route path={'/basket'} element={<Basket/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                </Route>
                <Route element={<ProtectedRoute auth={!isAuth} />}>
                    <Route path={'/registration'} element={<Auth/>}/>
                    <Route path={'/login'} element={<Auth/>}/>
                </Route>
                <Route path={'/'} element={<Shop/>}/>
                <Route path={'/device'+ '/:id'} element={<DevicePage/>}/>
                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Routes>
        </BrowserRouter>
    );
})

export default App;
