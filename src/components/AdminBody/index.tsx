import {FC, useEffect} from 'react';

import { BasicItem, ProcessEnv } from '../../../interfaces';

import styles from './styles.module.scss';

interface AdminBody {
    items: BasicItem[],
    deleteConfirmation: (id: number, name: string) => void,
    openEditPopup: (item: BasicItem) => void,
}

const AdminBody: FC<AdminBody> = ({ items, deleteConfirmation, openEditPopup }) => {
    const { REACT_APP_API_URL }: ProcessEnv = process.env;

    const defaultImage = { category: 'defaultCategory.png'};

    const createImageLink = (item: BasicItem) => {
        const image = item.img ? item.img : defaultImage;

        return String(REACT_APP_API_URL ? REACT_APP_API_URL + image : 'http://localhost:5000/' + image);
    };

    useEffect(() => {
        console.log('irtr3453409853049534',items)
    },[items]);
    return (
        <div className={styles.adminBody}>
        {items?.map((item) => (
            <div key={item.id} className={styles.adminBody__item}>
                <div className={styles.device__picture}>
                    <img className={styles.device__image} src={createImageLink(item)} alt="no-picture"/>
                </div>
                <div className={styles.adminBody__block}>id: {item.id}</div>
                <div className={styles.adminBody__block}>name: {item.name}</div>
                {item.price && <div className={styles.adminBody__block}>price: {item.price}</div>}
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
