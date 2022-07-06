import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DEVICE_ROUTE } from '../../utils/consts';

import vector from '../../assets/Vector.png'

import styles from './styles.module.scss';

const GoodsItem = ({ device }) => {
    const navigate = useNavigate();

    const [isPressed, setIsPressed] = useState(false);
    const addToFavorites = (e) => {
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
                    <button className={isPressed ? styles.goods__fav : styles.goods__fav_pressed} onClick={(e) => addToFavorites(e)}>
                        <span>{isPressed ? 'To favorites' : 'Added'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;
