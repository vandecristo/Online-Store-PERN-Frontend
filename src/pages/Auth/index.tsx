import { FC, MouseEvent, useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';
import { login, registration } from '../../http/userAPI';
import { AxiosError } from 'axios';
import { IMobx } from '../../../interfaces';

import styles from './styles.module.scss';

interface PreparedUserData {
    email: string,
    password: string,
}

const Auth: FC = observer(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userStore } = useContext<IMobx>(Context);
    const [data, setData] = useState<PreparedUserData>({email: '', password: ''});
    const isLogin = location.pathname === LOGIN_ROUTE;

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await login(data.email, data.password);
            } else {
                await registration(data.email, data.password);
            }
            userStore.setUser({data});
            userStore.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            const err = e as AxiosError;
            alert(err);
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
                            value={data.email}
                            onChange={e => setData({...data, email: e.target.value})}
                        ></input>
                    </div>
                    <div className={styles.auth__item}>
                        <input
                            className={styles.auth__input}
                            type="password"
                            placeholder="Password"
                            name="psw"
                            value={data.password}
                            onChange={e => setData({...data, password: e.target.value})}
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
                                    onClick={(e: MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}>Login</button>
                        ) : (
                            <button className={styles.auth__button} type="submit"
                                    onClick={(e: MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}>Sign&#160;up
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </form>
    );
});

export default Auth;
