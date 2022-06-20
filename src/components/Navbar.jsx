import React, { useContext } from 'react';
import { NavLink, Link  } from 'react-router-dom';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import styles from './Navbar.module.scss';

const Navbar = observer(() => {
    const { user } = useContext(Context);
    return (
        <div className={styles.navbar}>
            <NavLink className={styles.navbar__logo} to={SHOP_ROUTE}>
                <span className={styles.navbar__text}>TÜ shop</span>
            </NavLink>
            <nav className={styles.navbar__body}>
                {user.isAuth ?
                <div className={styles.navbar__row}>
                    <NavLink className={styles.navbar__button} to={ADMIN_ROUTE}>
                        <span className={styles.navbar__text}>Admin page</span>
                    </NavLink>
                    <NavLink className={styles.navbar__button} to={SHOP_ROUTE}
                             onClick={() => user.setIsAuth(false)}
                    >
                        <span className={styles.navbar__text}>Log out</span>
                    </NavLink>
                </div>
                
                :
                <div className={styles.navbar__row}>
                    <NavLink className={styles.navbar__button}  to={LOGIN_ROUTE}
                              onClick={() => user.setIsAuth(true)}
                    >
                        <span className={styles.navbar__text}>Log in</span>
                    </NavLink>
                </div>
                }
            </nav> 
        </div>
       
    )
})

export default Navbar