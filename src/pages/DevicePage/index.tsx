import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchDeviceById } from '../../http/deviceAPI';
import { BasicDevice, IdFromUseParams, IProcessEnv } from '../../../interfaces';

import styles from './styles.module.scss';

const DevicePage: FC = () => {
    const { id } = useParams<string>();
    const [device, setDevice] = useState<BasicDevice>({
        id: 0,
        name: '',
        price: 0,
        rating: 0,
        brandId: 0,
        typeId: 0,
        updatedAt: '',
        createdAt: '',
        deletedAt: '',
        img: '',
    });
    const { REACT_APP_API_URL }: IProcessEnv = process.env;

    const fetchCurrentDevice = async (id: IdFromUseParams) => {
        const data = await fetchDeviceById(id);
        setDevice(data);
    };

    const createImageLink = () =>
        String(REACT_APP_API_URL ? REACT_APP_API_URL + device.img : 'http://localhost:5000/' + device.img);
    
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
                        <div className={styles.device__name}>{device.name}</div>
                        <div className={styles.device__rate}>⭐ {device.rating}</div>
                        <div className={styles.device__price}>{device.price} Р</div>
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
