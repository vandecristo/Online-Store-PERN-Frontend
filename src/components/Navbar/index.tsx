import React, { useContext, useEffect, useState } from 'react';
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
import { check } from "../../http/userAPI";
import Loading from "../Loading";
import { IMobx } from "../../../interfaces";

import styles from './styles.module.scss';


const Navbar: React.FC = observer(() => {
    const { userStore, userStore: { isAuth }} = useContext<IMobx>(Context);
    const [loading, setLoading] = useState<boolean>(true);

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
        setLoading(false);
    }, []);

    return (
        <div className={styles.navbar}>
            {loading && (<Loading/>)}
            <NavLink className={styles.navbar__logo} to={SHOP_ROUTE}>
                <span className={styles.navbar__text}>TÜ shop</span>
            </NavLink>
            <nav>
                {userStore.isAuth ? (
                    <div className={styles.navbar__row}>
                        <NavLink className={styles.navbar__button} to={ADMIN_ROUTE}>
                            <span className={styles.navbar__text}>
                                Admin page
                            </span>
                            <svg className={styles.navbar__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M4 13.5C4.27614 13.5 4.5 13.7239 4.5 14V21C4.5 21.2761 4.27614 21.5 4 21.5C3.72386 21.5 3.5 21.2761 3.5 21V14C3.5 13.7239 3.72386 13.5 4 13.5Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M4 2.5C4.27614 2.5 4.5 2.72386 4.5 3V10C4.5 10.2761 4.27614 10.5 4 10.5C3.72386 10.5 3.5 10.2761 3.5 10V3C3.5 2.72386 3.72386 2.5 4 2.5Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 11.5C12.2761 11.5 12.5 11.7239 12.5 12V21C12.5 21.2761 12.2761 21.5 12 21.5C11.7239 21.5 11.5 21.2761 11.5 21V12C11.5 11.7239 11.7239 11.5 12 11.5Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 2.5C12.2761 2.5 12.5 2.72386 12.5 3V8C12.5 8.27614 12.2761 8.5 12 8.5C11.7239 8.5 11.5 8.27614 11.5 8V3C11.5 2.72386 11.7239 2.5 12 2.5Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M20 15.5C20.2761 15.5 20.5 15.7239 20.5 16V21C20.5 21.2761 20.2761 21.5 20 21.5C19.7239 21.5 19.5 21.2761 19.5 21V16C19.5 15.7239 19.7239 15.5 20 15.5Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M20 2.5C20.2761 2.5 20.5 2.72386 20.5 3V12C20.5 12.2761 20.2761 12.5 20 12.5C19.7239 12.5 19.5 12.2761 19.5 12V3C19.5 2.72386 19.7239 2.5 20 2.5Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M0.5 14C0.5 13.7239 0.723858 13.5 1 13.5H7C7.27614 13.5 7.5 13.7239 7.5 14C7.5 14.2761 7.27614 14.5 7 14.5H1C0.723858 14.5 0.5 14.2761 0.5 14Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M8.5 8C8.5 7.72386 8.72386 7.5 9 7.5H15C15.2761 7.5 15.5 7.72386 15.5 8C15.5 8.27614 15.2761 8.5 15 8.5H9C8.72386 8.5 8.5 8.27614 8.5 8Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M16.5 16C16.5 15.7239 16.7239 15.5 17 15.5H23C23.2761 15.5 23.5 15.7239 23.5 16C23.5 16.2761 23.2761 16.5 23 16.5H17C16.7239 16.5 16.5 16.2761 16.5 16Z"
                                      fill="currentColor"/>
                            </svg>
                        </NavLink>
                        <NavLink className={styles.navbar__button} to={FAVORITES_ROUTE}>
                            <span className={styles.navbar__text}>
                                Favorites
                            </span>
                            <svg className={styles.navbar__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.7046 4.25632C13.8299 3.13054 15.3564 2.49805 16.9482 2.49805C18.5399 2.49805 20.0664 3.13051 21.1916 4.25624C22.3174 5.38152 22.95 6.90816 22.95 8.49987C22.95 10.0916 22.3175 11.6181 21.1917 12.7434C21.1917 12.7435 21.1917 12.7434 21.1917 12.7434L12.3517 21.5834C12.1565 21.7787 11.8399 21.7787 11.6446 21.5834L2.80461 12.7434C0.460963 10.3998 0.460963 6.59997 2.80461 4.25632C5.14826 1.91267 8.94807 1.91267 11.2917 4.25632L11.9982 4.96277L12.7046 4.25632C12.7046 4.25629 12.7046 4.25635 12.7046 4.25632ZM16.9482 3.49805C15.6217 3.49805 14.3496 4.02515 13.4118 4.96334L12.3517 6.02343C12.258 6.11719 12.1308 6.16987 11.9982 6.16987C11.8656 6.16987 11.7384 6.11719 11.6446 6.02343L10.5846 4.96343C8.63149 3.0103 5.46484 3.0103 3.51172 4.96343C1.55859 6.91655 1.55859 10.0832 3.51172 12.0363L11.9982 20.5228L20.4846 12.0363C21.4228 11.0986 21.95 9.82636 21.95 8.49987C21.95 7.17338 21.4229 5.90126 20.4847 4.96351C19.5469 4.02532 18.2747 3.49805 16.9482 3.49805Z"
                                      fill="currentColor"/>
                            </svg>
                        </NavLink>
                        <NavLink className={styles.navbar__button} to={PROFILE_ROUTE}>
                            <span className={styles.navbar__text}>
                                Profile
                            </span>
                            <svg className={styles.navbar__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M3.5 19C3.5 16.5147 5.51472 14.5 8 14.5H16C18.4853 14.5 20.5 16.5147 20.5 19V21C20.5 21.2761 20.2761 21.5 20 21.5C19.7239 21.5 19.5 21.2761 19.5 21V19C19.5 17.067 17.933 15.5 16 15.5H8C6.067 15.5 4.5 17.067 4.5 19V21C4.5 21.2761 4.27614 21.5 4 21.5C3.72386 21.5 3.5 21.2761 3.5 21V19Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7C16.5 9.48528 14.4853 11.5 12 11.5C9.51472 11.5 7.5 9.48528 7.5 7ZM12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5Z"
                                      fill="currentColor"/>
                            </svg>
                        </NavLink>
                        <NavLink className={styles.navbar__button} to={BASKET_ROUTE}>
                            <span className={styles.navbar__text}>
                                Basket
                            </span>
                            <svg className={styles.navbar__icon} width="24" height="24" viewBox="0 0 24 24"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5.5 21C5.5 19.6193 6.61929 18.5 8 18.5C9.38071 18.5 10.5 19.6193 10.5 21C10.5 22.3807 9.38071 23.5 8 23.5C6.61929 23.5 5.5 22.3807 5.5 21ZM8 19.5C7.17157 19.5 6.5 20.1716 6.5 21C6.5 21.8284 7.17157 22.5 8 22.5C8.82843 22.5 9.5 21.8284 9.5 21C9.5 20.1716 8.82843 19.5 8 19.5Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M17.5 21C17.5 19.6193 18.6193 18.5 20 18.5C21.3807 18.5 22.5 19.6193 22.5 21C22.5 22.3807 21.3807 23.5 20 23.5C18.6193 23.5 17.5 22.3807 17.5 21ZM20 19.5C19.1716 19.5 18.5 20.1716 18.5 21C18.5 21.8284 19.1716 22.5 20 22.5C20.8284 22.5 21.5 21.8284 21.5 21C21.5 20.1716 20.8284 19.5 20 19.5Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M1 0.5C0.723858 0.5 0.5 0.723858 0.5 1C0.5 1.27614 0.723858 1.5 1 1.5H4.58051C5.33783 5.79147 6.10333 10.0643 6.74931 14.3709C6.93288 15.5947 7.98416 16.5 9.22165 16.5H19.3597C20.5514 16.5 21.5774 15.6588 21.8111 14.4903L23.2503 7.29417C23.436 6.36599 22.726 5.5 21.7795 5.5H7.16046C6.8575 5.5 6.57797 5.58901 6.34436 5.74093L5.49239 0.913107C5.45023 0.674179 5.24262 0.5 5 0.5H1ZM6.666 7.07417C6.62065 6.77187 6.85478 6.5 7.16046 6.5H21.7795C22.095 6.5 22.3316 6.78866 22.2698 7.09806L20.8305 14.2942C20.6903 14.9953 20.0747 15.5 19.3597 15.5H9.22165C8.47916 15.5 7.84839 14.9568 7.73825 14.2225L6.666 7.07417Z"
                                      fill="currentColor"/>
                            </svg>
                        </NavLink>
                        <NavLink
                            className={styles.navbar__button} to={SHOP_ROUTE}
                            onClick={() => logoutHandler()}
                        >
                            <span className={styles.navbar__text}>
                                Log out
                            </span>
                            <svg className={styles.navbar__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5 2.5C4.17157 2.5 3.5 3.17157 3.5 4V20C3.5 20.8284 4.17157 21.5 5 21.5H10C10.2761 21.5 10.5 21.7239 10.5 22C10.5 22.2761 10.2761 22.5 10 22.5H5C3.61929 22.5 2.5 21.3807 2.5 20V4C2.5 2.61929 3.61929 1.5 5 1.5H10C10.2761 1.5 10.5 1.72386 10.5 2C10.5 2.27614 10.2761 2.5 10 2.5H5Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M16.6464 7.64645C16.8417 7.45118 17.1583 7.45118 17.3536 7.64645L21.3536 11.6464C21.5488 11.8417 21.5488 12.1583 21.3536 12.3536L17.3536 16.3536C17.1583 16.5488 16.8417 16.5488 16.6464 16.3536C16.4512 16.1583 16.4512 15.8417 16.6464 15.6464L20.2929 12L16.6464 8.35355C16.4512 8.15829 16.4512 7.84171 16.6464 7.64645Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M8.5 12C8.5 11.7239 8.72386 11.5 9 11.5H21C21.2761 11.5 21.5 11.7239 21.5 12C21.5 12.2761 21.2761 12.5 21 12.5H9C8.72386 12.5 8.5 12.2761 8.5 12Z"
                                      fill="currentColor"/>
                            </svg>
                        </NavLink>
                    </div>
                ) : (
                    <div className={styles.navbar__row}>
                        <NavLink className={styles.navbar__button} to={LOGIN_ROUTE}>
                            <span className={styles.navbar__text}>
                                Log in
                            </span>
                            <svg className={styles.navbar__icon} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M13.5 2C13.5 1.72386 13.7239 1.5 14 1.5H19C20.3807 1.5 21.5 2.61929 21.5 4V20C21.5 21.3807 20.3807 22.5 19 22.5H14C13.7239 22.5 13.5 22.2761 13.5 22C13.5 21.7239 13.7239 21.5 14 21.5H19C19.8284 21.5 20.5 20.8284 20.5 20V4C20.5 3.17157 19.8284 2.5 19 2.5H14C13.7239 2.5 13.5 2.27614 13.5 2Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M10.6464 7.64645C10.8417 7.45118 11.1583 7.45118 11.3536 7.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L11.3536 16.3536C11.1583 16.5488 10.8417 16.5488 10.6464 16.3536C10.4512 16.1583 10.4512 15.8417 10.6464 15.6464L14.2929 12L10.6464 8.35355C10.4512 8.15829 10.4512 7.84171 10.6464 7.64645Z"
                                      fill="currentColor"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M2.5 12C2.5 11.7239 2.72386 11.5 3 11.5H15C15.2761 11.5 15.5 11.7239 15.5 12C15.5 12.2761 15.2761 12.5 15 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12Z"
                                      fill="currentColor"/>
                            </svg>
                        </NavLink>
                    </div>
                )}
            </nav>
        </div>
    )
});

export default Navbar;
