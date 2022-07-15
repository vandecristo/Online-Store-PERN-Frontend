export interface IdFromUseParams {
    id: string | undefined,
}

export interface PreparedDeviceData {
    name: string,
    price: string,
    typeId: string,
    brandId: string,
    img: File | string,
    imageName: string | undefined,
}

export interface BasicItem {
    id: number,
    name: string,
}

export interface BasicDevice extends BasicItem {
    price: number,
    rating: number,
    brandId: number,
    typeId: number,
    updatedAt: string,
    createdAt: string,
    deletedAt: string | null,
    img: File | string,
}

export interface DeviceArrayWithCount {
    count: number,
    row: Array<BasicDevice>,
}

export interface IUserStore {
    isAuth: boolean,
    user?: object,
    setIsAuth: (auth: boolean) => void,
    setUser: (user: object | null) => void,
}

interface selectedItem {
    id: number,
}

export interface IDeviceStore {
    types?:  Array<BasicItem>,
    brands?: Array<BasicItem>,
    devices?: Array<BasicDevice>,
    selectedType: selectedItem,
    selectedBrand: selectedItem,
    setTypes: (types: Array<BasicItem>) => void,
    setBrands: (brands: Array<BasicItem>) => void,
    setDevices: (devices: DeviceArrayWithCount) => void,
    setSelectedType: (type: BasicItem) => void,
    setSelectedBrand: (type: BasicItem) => void,
}

export interface IMobx {
    userStore: IUserStore,
    deviceStore: IDeviceStore,
}

export interface ProtectedRouteProps {
    ({ auth, redirectPath } : { auth: boolean| undefined, redirectPath: string }): JSX.Element,
}

export interface IProcessEnv {
    [key: string]: string | undefined,
}

export interface IconProps {
    size?: number,
    name: string,
    className: string,
    onClick?: () => void,
    width?: number,
    height?: number,
}
