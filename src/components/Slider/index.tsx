import React from 'react';

import classnames from 'classnames';

import styles from './styles.module.scss';
import Carousel from '../Carousel';

const Slider: React.FC = () => {
    const sliderImages = [
        {
            id: 1,
            name:'item 1',
            style: 'slider__item1'
        },
        {
            id: 2,
            name:'item 2',
            style: 'slider__item2'
        },
        {
            id: 3,
            name:'item 3',
            style: 'slider__item3'
        },
        {
            id: 4,
            name:'item 4',
            style: 'slider__item4'
        },
        {
            id: 5,
            name:'item 5',
            style: 'slider__item5'
        },
        {
            id: 6,
            name:'item 6',
            style: 'slider__item6'
        },
        {
            id: 7,
            name:'item 7',
            style: 'slider__item1'
        },
    ];

    return (
        <div className={styles.slider}>
            <Carousel>
                {sliderImages.map((item) => (
                    <div
                        key={item.id}
                        className={classnames(styles.slider__item, styles[`${item.style}`])}
                    >
                        {item.name}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
