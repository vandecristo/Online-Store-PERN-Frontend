import { $authHost, $host } from './index';
import { IdFromUseParams } from '../../types';

type CreateParams = { name: string };

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');

    return data;
};

export const createType = async (type: CreateParams) => {
    const { data } = await $authHost.post('api/type', type);

    return data;
};

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand');

    return data;
};

export const createBrand = async (brand: CreateParams) => {
    const { data } = await $authHost.post('api/brand', brand);

    return data;
};

export const fetchDevices = async () => {
    const { data } = await $host.get('api/device');

    return data;
};

export const fetchDeviceById = async (id: IdFromUseParams ) => {
    const { data } = await $host.get(`api/device/${id}`);

    return data;
};

export const createDevice = async (device: FormData) => {
    const { data } = await $authHost.post('api/device', device);

    return data;
};
