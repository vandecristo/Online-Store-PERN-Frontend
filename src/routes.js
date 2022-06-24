import Admin from "./pages/Admin/index";
import Auth from "./pages/Auth/index";
import Basket from "./pages/Basket/index";
import DevicePage from "./pages/DevicePage/index";
import Shop from "./pages/Shop/index";
import { 
    ADMIN_ROUTE,
    BASKET_ROUTE,
    SHOP_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    DEVICE_ROUTE
 } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
];
