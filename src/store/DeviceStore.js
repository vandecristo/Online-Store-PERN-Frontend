import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor () {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
        ]
        this._devices = [
            {id: 1, name: 'Samsung', price: 25000, rating: 5, img: 'D:/React js/0205/server/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 2, name: 'Aplle', price: 52000, rating: 5, img: 'D:/React js/0205/server/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 3, name: 'Lenovo', price: 75000, rating: 1, img: 'D:/React js/0205/server/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 4, name: 'Nokia', price: 34000, rating: 5, img: 'D:/React js/0205/server/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 5, name: 'Hp', price: 54000, rating: 3, img: 'D:/React js/0205/server/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 6, name: 'Razor', price: 64000, rating: 5, img: 'D:/React js/0205/server/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
            {id: 7, name: 'XiaOmi', price: 85000, rating: 4, img: 'D:/React js/0205/server/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'},
        ]
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
    
    

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    
    get devices() {
        return this._devices
    }
}