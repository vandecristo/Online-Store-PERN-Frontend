import { FC } from 'react';

import { BasicItem } from '../../../interfaces';

import styles from './styles.module.scss';

const AdminBody: FC<BasicItem[]> = (items) =>{
    const openEditPopup = (item: BasicItem) => {
        // This function must be open popup for editing Devices/ types / brands
    };

    const deleteConfirmation = (id: number) => {
        // This function open popup that asks 'Are you sure want to delete Devices/types/ brands'
        // If yes then delete by id and type
    };

    return (
        <div className={styles.adminBody}>
            {items.length &&
                items.map((item) => (
                    <div key={item.id} className={styles.adminBody__item}>
                        <div className={styles.adminBody__block}>name: {item.name}</div>
                        <div className={styles.adminBody__block}>id: {item.id}</div>
                        <div className={styles.adminBody__btnWrapper}>
                            <button className={styles.adminBody__btn} onClick={() => openEditPopup(item)}>Edit</button>
                            <button className={styles.adminBody__btn} onClick={() => deleteConfirmation(item.id)}>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AdminBody;
