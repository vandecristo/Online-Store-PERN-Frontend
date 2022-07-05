export interface IMobx {
    userStore: {
        isAuth?: boolean
        user?: object
    },
    deviceStore: {
        types?: any[],
        brands?: any[],
        devices?: any[],
        selectedType?: {},
    }
}

export interface IRoute {
    ({auth, redirectPath}:{auth: boolean| undefined, redirectPath: string}): JSX.Element;
}