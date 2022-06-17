import React from 'react';
import styles from "./GoodsItem.module.scss";
import vector from '../assets/Vector.png'

const GoodsItem = ({device}) => {
    return (
        <div className={styles.goods}>
            <div className={styles.goods__body}>
                <div className={styles.goods__imageWrapper}>
                    <img
                        className={styles.goods__image}
                        src={device.img}
                        alt="no-pic"
                    />
                </div>

                <div className={styles.goods__content}>
                    <div className={styles.goods__name}>
                        <span>{device.name}</span>
                    </div>
                    <div className={styles.goods__price}>
                        <div>${device.price}</div>
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
                    <button className={styles.goods__fav}>
                       <span>To&nbsp;favorites</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;