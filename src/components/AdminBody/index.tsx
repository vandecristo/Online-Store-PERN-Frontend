import { FC } from 'react';
import { useSnackbar } from 'notistack';

import { BasicItem } from '../../../interfaces';

import styles from './styles.module.scss';

interface AdminBody {
    items: BasicItem[],
    deleteConfirmation: (id: number, name: string) => void,
    openEditPopup: (item: BasicItem) => void,
}

const AdminBody: FC<AdminBody> = ({ items, deleteConfirmation, openEditPopup }) => {

    return (
        <div className={styles.adminBody}>
        {items?.map((item) => (
            <div key={item.id} className={styles.adminBody__item}>
                <div className={styles.adminBody__block}>name: {item.name}</div>
                <div className={styles.adminBody__block}>id: {item.id}</div>
                <div className={styles.adminBody__btnWrapper}>
                    <button className={styles.adminBody__btn} onClick={() => openEditPopup(item)}>Edit</button>
                    <button className={styles.adminBody__btn} onClick={() => deleteConfirmation(item.id, item.name)}>
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        ))}
    </div>
    );
};

export default AdminBody;
