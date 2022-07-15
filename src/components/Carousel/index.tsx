import React, { useEffect, useState } from 'react';

import Icon from '../Icon';

import styles from './styles.module.scss';

interface CarouselProps {
    children: Array<React.ReactNode>
}
type StateUpdater = () => void


const Carousel: React.FC<CarouselProps> = ({ children }) => {
    const [offset, setOffset] = useState<number>(0);
    const [childrenLength, setChildrenLength] = useState<number>(children.length);

    const offsetStep: number = 100 / children.length;

    const handleLeftClick: StateUpdater = () => {
        // 'Offset > 0' because values like '-1' is turn to true in boolean

        if (childrenLength && offset > 0) {
            setChildrenLength((length) => length - 1);
            return setOffset((currentOffset) => {
                // If we still have length, but offset is already negative (-1.000234) we return to start
                if (childrenLength && !(currentOffset - offsetStep)) {
                    return 0;
                }
                return currentOffset - offsetStep;
            });
        } else {
            setChildrenLength(children.length);
            return setOffset(100 - offsetStep);
        }
    };

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
    },[offset]);

    return (
            <div className={styles.mainContainer}>
                <div className={styles.window}>
                    <div className={styles.allPagesContainer} style={{transform: `translateX(-${offset}%)`}}>
                        {children}
                    </div>
                    <div className={styles.swipeBarWrapper}>
                        <div className={styles.swipeBar}>
                            <Icon className={styles.left_arrow} onClick={() => handleLeftClick()} name='ArrowDown' size={25}/>
                            <Icon className={styles.right_arrow} onClick={() => handleRightClick()} name='ArrowDown' size={25}/>
                        </div>

                    </div>
                </div>
            </div>
    );
};

export default Carousel;
