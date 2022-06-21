import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.wrapper}>
                <div className={styles.ldsEllipsis}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>

    );
};

export default Loading;