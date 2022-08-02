import { $authHost, $host } from './index';
import { IdFromUseParams } from '../../types';

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');

    return data;
};

export const createType = async (type: FormData) => {
    const { data } = await $authHost.post('api/type', type);

    return data;
};

export const patchType = async (type: FormData) => {
    const { data } = await $authHost.patch('api/type', type);

    return data;
};

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand');

    return data;
};

export const createBrand = async (brand: FormData) => {
    const { data } = await $authHost.post('api/brand', brand);

    return data;
};

export const patchBrand = async (brand: FormData) => {
    const { data } = await $authHost.patch('api/brand', brand);

    return data;
};

export const fetchDevices = async (params?: object) => {
    const { data } = await $host.post('api/device', params);

    return data;
};

export const fetchDeviceById = async (id: IdFromUseParams ) => {
    const { data } = await $host.get(`api/device/${id}`);

    return data;
};

export const createDevice = async (device: FormData) => {
    const { data } = await $authHost.post('api/device/create', device);

    return data;
};

export const patchDevice = async (device: FormData) => {
    const { data } = await $authHost.patch('api/device', device);

    return data;
};

export const deleteDevice = async (id: IdFromUseParams) => {
    const { data } = await $authHost.delete(`api/device/${id}`);

    return data;
};

export const deleteType = async (id: IdFromUseParams) => {
    const { data } = await $authHost.delete(`api/type/${id}`);

    return data;
};

export const deleteBrand = async (id: IdFromUseParams) => {
    const { data } = await $authHost.delete(`api/brand/${id}`);

    return data;
};
