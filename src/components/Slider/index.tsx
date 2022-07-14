import React from 'react';

import styles from './styles.module.scss';

const Slider: React.FC = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.slider__item}>
                <span>slider</span>
            </div>
        </div>
    );
};

export default Slider;