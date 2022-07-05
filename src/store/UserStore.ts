import { makeAutoObservable } from 'mobx';

export default class UserStore {
    _isAuth: boolean;
    _user: object;

    constructor () {
        this._isAuth = Boolean(localStorage.getItem('token'));
        this._user = {};
        makeAutoObservable(this);
    };

    setIsAuth(auth: boolean) {
        this._isAuth = auth;
    };

    setUser(user: object) {
        this._user = user;
    };

    get isAuth() {
        return this._isAuth;
    };

    get user() {
        return this._user;
    };
};
