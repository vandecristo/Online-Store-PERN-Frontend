import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor () {
        this._types = [
            {id: 1, name: 'SmartPhonesdfgfd'},
            {id: 2, name: 'Notebooks'},
            {id: 3, name: 'Computers'},
            {id: 4, name: 'Tablets'},
            {id: 5, name: 'ColdBox'},
            {id: 6, name: 'typebar'},
            {id: 7, name: 'typebar'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: 'Samsung Galaxy S8 128gb', price: 999, rating: 4.98, img: 'https://raw.githubusercontent.com/vandecristo/Online-Store-PERN-backend/95c23a52281e5577cb907a435fac43254fd144fa/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 2, name: 'Aplle iPhone 12 Pro 256gb', price: 1199, rating: 4.89, img: 'https://raw.githubusercontent.com/vandecristo/Online-Store-PERN-backend/95c23a52281e5577cb907a435fac43254fd144fa/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 3, name: 'Lenovo Yoga yoba HD 1gb', price: 750, rating: 1.09, img: 'https://raw.githubusercontent.com/vandecristo/Online-Store-PERN-backend/95c23a52281e5577cb907a435fac43254fd144fa/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 4, name: 'Nokia 3310 super max', price: 890, rating: 5, img: 'https://raw.githubusercontent.com/vandecristo/Online-Store-PERN-backend/95c23a52281e5577cb907a435fac43254fd144fa/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 5, name: 'Hp legion phone 1Tb', price: 1540, rating: 3.09, img: 'https://raw.githubusercontent.com/vandecristo/Online-Store-PERN-backend/95c23a52281e5577cb907a435fac43254fd144fa/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 6, name: 'Razor xueyzer phone gaming pro carbon', price: 1640, rating: 5, img: 'https://raw.githubusercontent.com/vandecristo/Online-Store-PERN-backend/95c23a52281e5577cb907a435fac43254fd144fa/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 7, name: 'XiaOmi realmi Lux pro super 1TB quad cam', price: 185, rating: 4, img: 'https://raw.githubusercontent.com/vandecristo/Online-Store-PERN-backend/95c23a52281e5577cb907a435fac43254fd144fa/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
        ]
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    
    

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    
    get devices() {
        return this._devices
    }

    get selectedType() {
       return  this._selectedType
    }
}