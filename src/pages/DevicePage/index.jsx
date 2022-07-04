import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { fetchDeviceById } from "../../http/deviceAPI";

import styles from './styles.module.scss';

const DevicePage = () => {
    const [currDevice, setCurrDevice] = useState({});
    const { id } = useParams();
    const { REACT_APP_API_URL } = process.env;

    const fetchCurrentDevice = async() => {
        const data = await fetchDeviceById(id);
        setCurrDevice(data);
    };

    const createImageLink = () => currDevice.img ? REACT_APP_API_URL + currDevice.img : REACT_APP_API_URL + 'default.jpg';
    
    useEffect(() => {
        fetchCurrentDevice(id);
    }, []);
    
    return (
        <div className={styles.device}>
            <div className={styles.device__wrapper}>
                <div className={styles.device__main}>
                    <div className={styles.device__picture}>
                        <img
                            width={356}
                            height={483}
                            className={styles.device__image}
                            src={createImageLink()}
                            alt="no-pic"
                        />
                    </div>
                    <div className={styles.device__header}>
                        <div className={styles.device__name}>{currDevice.name}</div>
                        <div className={styles.device__rate}>⭐ {currDevice.rating}</div>
                        <div className={styles.device__price}>{currDevice.price} Р</div>
                        <button className={styles.device__addBtn}>
                            <span>Add to cart</span>
                        </button>
                        <div className={styles.device__info}>
                            Скидка 100% на SIM-карту при покупке в комплекте со смартфоном
                            Подробнее Заказ должен быть оформлен на сайте или через терминал. Акция распространяется
                            только на физических лиц.
                        </div>
                    </div>
                </div>
                <div className={styles.device__footer}>
                    <button className={styles.device__item}>
                        <span>about</span>
                    </button>
                    <button className={styles.device__item}>
                        <span>Specs</span>
                    </button>
                    <button className={styles.device__item}>
                        <span>Accessories</span>
                    </button>
                    <button className={styles.device__item}>
                        <span>Reviews</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DevicePage;
