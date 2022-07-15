import { FC, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    FAVORITES_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    SHOP_ROUTE
} from '../../utils/consts';
import { check } from '../../http/userAPI';
import Icon from '../Icon';
import { IMobx } from '../../../interfaces';

import styles from './styles.module.scss';


const Navbar: FC = observer(() => {
    const { userStore, userStore: { isAuth }} = useContext<IMobx>(Context);

    const logoutHandler = () => {
        userStore.setIsAuth(false);
        userStore.setUser(null);
        localStorage.removeItem('token');
    };

    useEffect(() => {
        if (isAuth) {
            check().then((data) => {
                userStore.setUser({data});
                userStore.setIsAuth(true);
            });
        }
    }, []);

    return (
        <div className={styles.navbar}>
            <NavLink className={styles.navbar__logo} to={SHOP_ROUTE}>
                <span className={styles.navbar__text}>TÜ shop</span>
            </NavLink>
            <nav>
                {userStore.isAuth ? (
                    <div className={styles.navbar__row}>
                        <NavLink className={styles.navbar__link} to={ADMIN_ROUTE}>
                            <span className={styles.navbar__text}>
                                Admin page
                            </span>
                            <Icon className={styles.navbar__icon} name='Admin' size={20}/>
                        </NavLink>
                        <NavLink className={styles.navbar__link} to={FAVORITES_ROUTE}>
                            <span className={styles.navbar__text}>
                                Favorites
                            </span>
                            <Icon className={styles.navbar__icon} name='Favorites' size={20}/>
                        </NavLink>
                        <NavLink className={styles.navbar__link} to={PROFILE_ROUTE}>
                            <span className={styles.navbar__text}>
                                Profile
                            </span>
                            <Icon className={styles.navbar__icon} name='Profile' size={20}/>
                        </NavLink>
                        <NavLink className={styles.navbar__link} to={BASKET_ROUTE}>
                            <span className={styles.navbar__text}>
                                Basket
                            </span>
                            <Icon className={styles.navbar__icon} name='Basket' size={20}/>
                        </NavLink>
                        <NavLink
                            className={styles.navbar__link} to={SHOP_ROUTE}
                            onClick={() => logoutHandler()}
                        >
                            <span className={styles.navbar__text}>
                                Log out
                            </span>
                            <Icon className={styles.navbar__icon} name='Logout' size={20}/>
                        </NavLink>
                    </div>
                ) : (
                    <div className={styles.navbar__row}>
                        <NavLink className={styles.navbar__link} to={LOGIN_ROUTE}>
                            <span className={styles.navbar__text}>
                                Log in
                            </span>
                            <Icon className={styles.navbar__icon} name='Login' size={20}/>
                        </NavLink>
                    </div>
                )}
            </nav>
        </div>
    );
});

export default Navbar;
