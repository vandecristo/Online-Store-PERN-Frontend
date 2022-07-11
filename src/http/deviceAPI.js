import { $host } from './index';

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
    return data;
};

export const createType = async (type) => {
    const { data } = await $host.post('api/type', type);
    return data;
};

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand');
    return data;
};

export const createBrand = async (brand) => {
    const { data } = await $host.post('api/brand', brand);
    return data;
};

export const fetchDevices = async () => {
    const { data } = await $host.get('api/device');
    return data;
};

export const fetchDeviceById = async (id) => {
    const { data } = await $host.get('api/device/' + id);
    return data;
};

export const createDevice = async (device) => {
    const { data } = await $host.post('api/device', device);
    return data;
};
