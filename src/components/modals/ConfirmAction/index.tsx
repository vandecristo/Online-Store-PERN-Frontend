import { FC } from 'react';

import styles from './styles.module.scss';

interface ConfirmAction {
    setPopup: (arg: string) => void,
    removeItem: (id: string) => void,
    id: string,
}

const ConfirmAction: FC<ConfirmAction> = ({ setPopup, removeItem, id }) => {
    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.createBrand}>
                    <div className={styles.createBrand__title}>
                        <span>Are you sure {'fhfghfghfh'}:</span>
                    </div>
                    <div className={styles.createBrand__btnWrapper} >
                        <button className={styles.createBrand__btn} onClick={() => setPopup('')}>
                            <span>Close</span>
                        </button>
                        <button className={styles.createBrand__btn} onClick={() => {
                            removeItem(id)
                            setPopup('') }}
                        >
                            <span>Yes</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAction;
