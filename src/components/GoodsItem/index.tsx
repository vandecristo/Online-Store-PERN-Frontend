import { FC, MouseEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import classnames from 'classnames';

import { DEVICE_ROUTE } from '../../utils/consts';
import { BasicDevice, IProcessEnv } from "../../../interfaces";

import vector from '../../assets/Vector.png';

import styles from './styles.module.scss';

interface GoodsProps {
    device: BasicDevice,
}

const GoodsItem: FC<GoodsProps> = ({ device }) => {
    const navigate = useNavigate();
    const [isPressed, setIsPressed] = useState<Boolean>(false);
    const { REACT_APP_API_URL }: IProcessEnv = process.env;

    const addToFavorites = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setIsPressed(prev => !prev);
    };

    const createImageLink = () =>
        String(REACT_APP_API_URL ? REACT_APP_API_URL + device.img : 'http://localhost:5000/' + device.img);

    return (
        <div className={styles.goods} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <div className={styles.goods__body}>
                <div className={styles.goods__imageWrapper}>
                    <img
                        className={styles.goods__image}
                        src={createImageLink()}
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
                    <button
                        className={classnames(styles.goods__fav, {[styles.goods__fav_pressed]: isPressed})}
                        onClick={(e: MouseEvent<HTMLButtonElement>) => addToFavorites(e)}
                    >
                        <span>{isPressed ? 'Added' : 'To favorites'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;
