import { FC } from 'react';
import classnames from 'classnames';

import Carousel from '../Carousel';
import * as data from '../../mock/index.json';

import styles from './styles.module.scss';

const Slider: FC = () => {
    const { sliderPages } = data;

    return (
        <div className={styles.slider}>
            <Carousel>
                {sliderPages.map((item) => (
                    <div key={item.id} className={classnames(styles.slider__item, styles[`${item.style}`])}>
                        {item.name}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
