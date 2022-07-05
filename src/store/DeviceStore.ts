import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    _types: [];
    _brands = [];
    _devices = [];
    _selectedType = {};

    constructor () {
        this._types = [];
        this._brands = [];
        this._devices = [];
        this._selectedType = {};
        makeAutoObservable(this);
    };

    setTypes(types:[]) {
        this._types = types;
    };

    setBrands(brands:[]) {
        this._brands = brands;
    };

    setDevices(devices:[]) {
        this._devices = devices;
    };

    setSelectedType(type:object) {
        this._selectedType = type;
    };

    get types() {
        return this._types;
    };

    get brands() {
        return this._brands;
    };
    
    get devices() {
        return this._devices;
    };

    get selectedType() {
       return  this._selectedType;
    };
};
