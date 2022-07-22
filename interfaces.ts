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
    img: string | null,
}

export interface Device {
    id: number,
    name: string,
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
    row: Device[],
}

export interface UserStore {
    isAuth: boolean,
    user?: object,
    setIsAuth: (auth: boolean) => void,
    setUser: (user: object | null) => void,
}

interface selectedItem {
    id: number,
}

export interface DeviceStore {
    types?:  BasicItem[],
    brands?: BasicItem[],
    devices?: Device[],
    selectedType: selectedItem,
    selectedBrand: selectedItem,
    setTypes: (types: BasicItem[]) => void,
    setBrands: (brands: BasicItem) => void,
    setDevices: (devices: DeviceArrayWithCount) => void,
    setSelectedType: (type: BasicItem) => void,
    setSelectedBrand: (type: BasicItem) => void,
}

export interface MobxStores {
    userStore: UserStore,
    deviceStore: DeviceStore,
}

export interface ProtectedRouteProps {
    ({ auth, redirectPath } : { auth: boolean| undefined, redirectPath: string }): JSX.Element,
}

export interface ProcessEnv {
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

export interface homePageCard {
    id: number,
    title: string,
    text: string,
    date: string,
}
