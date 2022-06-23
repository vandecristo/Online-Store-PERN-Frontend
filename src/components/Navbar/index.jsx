import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import {check} from "../../http/userAPI";
import Loading from "../Loading";

import styles from './styles.module.scss';

const Navbar = observer(() => {
    const { user } = useContext(Context);

    // const [loading, setLoading] = useState(true);
    //
    // useEffect( () => {
    //     check().then(data => {
    //         console.log('%%%%%%%%  data ===   ', data)
    //         //user.setUser(data);
    //         //user.setIsAuth(true);
    //     }).finally(() => setLoading(false));
    // },[]);

        /* fix loading *///////////////////////////////////////////////////////////////////////////
    const logoutHandler = () => {
        user.setIsAuth(false);
        user.setUser({});
        localStorage.removeItem('token');
    };

    return (
        <div className={styles.navbar}>
            {/*{loading ? (<Loading/>) : null}*/}
            <NavLink className={styles.navbar__logo} to={SHOP_ROUTE}>
                <span className={styles.navbar__text}>TÜ shop</span>
            </NavLink>
            <nav className={styles.navbar__body}>
                {user.isAuth ? (
                    <div className={styles.navbar__row}>
                        <NavLink className={styles.navbar__button} to={ADMIN_ROUTE}>
                        <span className={styles.navbar__text}>
                            Admin page
                        </span>
                        </NavLink>
                        <NavLink className={styles.navbar__button} to={SHOP_ROUTE}
                                 onClick={() => logoutHandler()}
                        >
                        <span className={styles.navbar__text}>
                            Log out
                        </span>
                        </NavLink>
                    </div>
                ) : (
                    <div className={styles.navbar__row}>
                        <NavLink className={styles.navbar__button} to={LOGIN_ROUTE}>
                            <span className={styles.navbar__text}>Log in</span>
                        </NavLink>
                    </div>
                )}
            </nav>
        </div>
    )
});

export default Navbar;
