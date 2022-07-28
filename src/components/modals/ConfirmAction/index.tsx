import { FC } from 'react';

import styles from './styles.module.scss';

type PopupOption = {
    type: string,
    name: string,
    id: number,
};

interface ConfirmAction {
    setPopup: (arg: string) => void,
    removeItem: (popupOptions: PopupOption) => Promise<void>,
    popupOptions: PopupOption,
}

const ConfirmAction: FC<ConfirmAction> = ({ setPopup, removeItem, popupOptions }) => {
    const handleClick = () => {
        removeItem(popupOptions);
        setPopup('');
    };

    return (
        <div className={styles.confirmAction} onClick={() => setPopup('')}>
            <div className={styles.confirmAction__wrapper}>
                <div className={styles.confirmAction__body}>
                    <div className={styles.confirmAction__title}>
                        <span>Are you sure you want to remove the {popupOptions.name}?</span>
                    </div>
                    <div className={styles.confirmAction__btnGroup}>
                        <button className={styles.confirmAction__btn} onClick={handleClick}>
                            <span>Yes</span>
                        </button>
                        <button className={styles.confirmAction__btn} onClick={() => setPopup('')}>
                            <span>No</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmAction;
