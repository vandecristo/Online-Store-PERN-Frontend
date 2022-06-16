import React from 'react';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { NavLink, useLocation } from "react-router-dom";
import styles from './Auth.module.scss';

const Auth = () => {
    const location = useLocation();
    console.log('%%%%%%%%  location ===   ', location);
    const islogin = location.pathname === LOGIN_ROUTE;

    return (
        <form className={styles.auth}>
            <div className={styles.auth__body}>
                <h1 className={styles.auth__title}>{islogin? 'Authorization' : 'Registration' }</h1>
                <div className={styles.auth__itemWrapper}>
                    <div className={styles.auth__item}>
                        <input className={styles.auth__input} type="text" placeholder="Email" name="email"
                            // required
                        ></input>
                    </div>

                    <div className={styles.auth__item}>
                        <input className={styles.auth__input} type="password" placeholder="Password" name="psw"
                            // required
                        ></input>
                    </div>

                    <div className={styles.auth__buttonWrapper}>
                        <div className={styles.auth__signIn}>
                            {islogin ?
                                <>
                                    <span className={styles.auth__text}>No account? </span>
                                    <NavLink className={styles.auth__text_link} to={REGISTRATION_ROUTE}>
                                        <span>Sign in</span>
                                    </NavLink>
                                </>
                                :
                                <>
                                    <span className={styles.auth__text}>Have account? </span>
                                    <NavLink className={styles.auth__text_link} to={LOGIN_ROUTE}>
                                        <span>Log in</span>
                                    </NavLink>
                                </>
                            }
                        </div>
                        {islogin ?
                            <button className={styles.auth__button} type="submit">Login</button>
                            :
                            <button className={styles.auth__button} type="submit">Sign&#160;up</button>
                        }
                    </div>

                </div>
            </div>
        </form>
  );
};

export default Auth;