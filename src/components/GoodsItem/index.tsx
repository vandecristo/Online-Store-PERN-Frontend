import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import vector from '../../assets/Vector.png'
import { DEVICE_ROUTE } from '../../utils/consts';

import styles from './styles.module.scss';

type DeviceType = {
    brandId: number,
    createdAt: string
    deletedAt: string | null,
    id: number,
    img: string,
    name: string,
    price: number,
    rating: number,
    typeId: number,
    updatedAt: string,
}

interface GoodsProps {
    device: DeviceType
}

const GoodsItem: React.FC<GoodsProps> = ({ device }) => {
    const navigate = useNavigate();
    const [isPressed, setIsPressed] = useState<Boolean>(false);

    const addToFavorites = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsPressed(prev => !prev);
    };

    return (
        <div className={styles.goods} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <div className={styles.goods__body}>
                <div className={styles.goods__imageWrapper}>
                    <img
                        className={styles.goods__image}
                        src={process.env.REACT_APP_API_URL + device.img}
                        alt="no-pic"
                    />
                </div>
                <div className={styles.goods__content}>
                    <div className={styles.goods__name}>
                        <span>{device.name}</span>
                    </div>
                    <div className={styles.goods__price}>
                        <div>{device.price} P</div>
                    </div>
                    <div className={styles.goods__info}>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                    </div>
                </div>
                <div className={styles.goods__footer}>
                    <div className={styles.goods__rate}>
                        <img
                            className={styles.goods__star}
                            src={vector}
                            alt="no-pic"
                        />
                        {device.rating}
                    </div>
                    <button className={isPressed ? styles.goods__fav_pressed : styles.goods__fav } onClick={(e: React.MouseEvent<HTMLButtonElement>) => addToFavorites(e)}>
                        <span>{isPressed ? 'Added' : 'To favorites' }</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;