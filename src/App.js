import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Admin from './pages/Admin';
import Auth from './pages/Auth';
import DevicePage from "./pages/DevicePage";
import Navbar from './components/Navbar/index';
import Shop from './pages/Shop';
import Favorites from './pages/Favorites';

const App = observer(() => {

    const PrivateRoute = ({ children }) => {
        const isUserAuth = Boolean(localStorage.getItem('token'));
        if (isUserAuth) {
            return  children
        } else {
            return <Navigate to={'/'}/>
        }
    };

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Shop/>}/>
                <Route path={'/admin'} element={<PrivateRoute><Admin/></PrivateRoute>}/>
                <Route path={'/favorites'} element={<PrivateRoute><Favorites/></PrivateRoute>}/>
                <Route path={'/device'+ '/:id'} element={<PrivateRoute><DevicePage/></PrivateRoute>}/>
                <Route path={'/registration'} element={<Auth/>}/>
                <Route path={'/login'} element={<Auth/>}/>
                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Routes>
        </BrowserRouter>
    );
})

export default App;
