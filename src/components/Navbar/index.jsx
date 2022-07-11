import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import { ADMIN_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { check } from '../../http/userAPI';
import Icon from '../Icon';

import styles from './styles.module.scss';

const Navbar = observer(() => {
    const { userStore } = useContext(Context);
    const [loading, setLoading] = useState(true);

    const logoutHandler = () => {
        userStore.setIsAuth(false);
        userStore.setUser({});
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const isToken = localStorage.getItem('token');
        if (isToken) {
            check().then(data => {
                userStore.setUser(data);
                userStore.setIsAuth(true);
            }).finally(() => setLoading(false));
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
                        <NavLink className={styles.navbar__link} to={SHOP_ROUTE} onClick={() => logoutHandler()}>
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
    )
});

export default Navbar;
