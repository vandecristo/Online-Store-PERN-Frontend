export interface PreparedDeviceData {
    name: string,
    price: string,
    typeId: string,
    brandId: string,
    img: File | string
}

export interface BasicItem {
    id: number,
    name: string
}

export interface BasicDevice extends BasicItem {
    price: number,
    rating: number,
    brandId: number,
    typeId: number,
    updatedAt: string,
    createdAt: string,
    deletedAt: string | null,
    img: File | string
}

export interface DeviceArrayWithCount {
    count: number,
    row: Array<BasicDevice>
}

export interface IMobx {
    userStore: {
        isAuth?: boolean,
        user?: object,
        setIsAuth: (auth: boolean) => void,
        setUser: (user:object | null) => void,

    },
    deviceStore: {
        types?: any[],
        brands?: any[],
        devices?: any[],
        selectedType: {
            id: number
        },
        setTypes: (types: Array<BasicItem>) => void,
        setBrands: (brands: Array<BasicItem>) => void,
        setDevices: (devices: DeviceArrayWithCount) => void,
        setSelectedType: (type: BasicItem) => void
    }
}

export interface IRoute {
    ({auth, redirectPath}:{auth: boolean| undefined, redirectPath: string}): JSX.Element;
}

export interface IProcessEnv {
    [key: string]: string | undefined;
}