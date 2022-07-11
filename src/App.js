import { BrowserRouter, Route, Navigate, Routes, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Admin from './pages/Admin';
import Auth from './pages/Auth';
import DevicePage from './pages/DevicePage';
import Navbar from './components/Navbar/index';
import Shop from './pages/Shop';
import Favorites from './pages/Favorites';

const App = observer(() => {
    const isUserAuth = Boolean(localStorage.getItem('token'));

    const ProtectedRoute = ({ user, redirectPath = '/' }) => {
        if (!user) {
            return <Navigate to={redirectPath} replace />;
        }
        return <Outlet />;
    };

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route element={<ProtectedRoute user={isUserAuth} />}>
                    <Route path={'/favorites'} element={<Favorites />} />
                    <Route path={'/admin'} element={<Admin />} />
                </Route>
                <Route element={<ProtectedRoute user={!isUserAuth} />}>
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
