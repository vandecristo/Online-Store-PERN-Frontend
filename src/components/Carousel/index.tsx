import { FC, ReactNode, useEffect, useState } from 'react';

import Icon from '../Icon';

import styles from './styles.module.scss';

interface CarouselProps {
    children: ReactNode[],
}
type StateUpdater = () => void;

const Carousel: FC<CarouselProps> = ({ children }) => {
    const [offset, setOffset] = useState<number>(0);

    const offsetStep: number = 100 / children.length;

    const handleRightClick: StateUpdater = () => {
        if (Math.round(offset) !== Math.round(100 - offsetStep)) { // if not equal to endpoint, then swipe right
            return setOffset((currOffset) => currOffset + offsetStep);
        } else {
            return setOffset(0);
        }
    };

    useEffect(() => {
        const nextSlide = () => handleRightClick();
        const timeout = setTimeout(nextSlide, 6000);

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }}
    }, [offset]);

    const handleLeftClick: StateUpdater = () => {
        if (Math.floor(offset) < Math.floor(offsetStep)) {
            setOffset(100 - offsetStep);
        } else {
            setOffset((currentOffset) => {
                if (Math.floor(offset) === Math.floor(offsetStep)) {
                    return 0;
                }

                return currentOffset - offsetStep;
            });
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.window}>
                <div className={styles.allPagesContainer} style={{transform: `translateX(-${offset}%)`}}>
                    {children}
                </div>
                <div className={styles.swipeBarWrapper}>
                    <div className={styles.swipeBar}>
                        <Icon className={styles.left_arrow} onClick={handleLeftClick} name="ArrowDown" size={25} />
                        <Icon className={styles.right_arrow} onClick={handleRightClick} name="ArrowDown" size={25} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
