import { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Context } from '../../index';

import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { login, registration } from "../../http/userAPI";

import styles from './styles.module.scss';

const Auth = observer(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userStore } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isLogin = location.pathname === LOGIN_ROUTE;

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            userStore.setUser(data);
            userStore.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <form className={styles.auth}>
            <div className={styles.auth__body}>
                <h1 className={styles.auth__title}>{isLogin ? 'Authorization' : 'Registration'}</h1>
                <div className={styles.auth__itemWrapper}>
                    <div className={styles.auth__item}>
                        <input
                            className={styles.auth__input}
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className={styles.auth__item}>
                        <input
                            className={styles.auth__input}
                            type="password"
                            placeholder="Password"
                            name="psw"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div className={styles.auth__buttonWrapper}>
                        <div className={styles.auth__signIn}>
                            {isLogin ? (
                                <>
                                    <span className={styles.auth__text}>No account? </span>
                                    <NavLink className={styles.auth__text_link} to={REGISTRATION_ROUTE}>
                                        <span>Sign in</span>
                                    </NavLink>
                                </>
                            ) : (
                                <>
                                    <span className={styles.auth__text}>Have account? </span>
                                    <NavLink className={styles.auth__text_link} to={LOGIN_ROUTE}>
                                        <span>Log in</span>
                                    </NavLink>
                                </>
                            )}
                        </div>
                        {isLogin ? (
                            <button className={styles.auth__button} type="submit"
                                    onClick={e => handleSubmit(e)}>Login</button>
                        ) : (
                            <button className={styles.auth__button} type="submit"
                                    onClick={e => handleSubmit(e)}>Sign&#160;up
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
});

export default Auth;
