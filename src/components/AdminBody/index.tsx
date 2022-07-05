import React from "react";

import styles from "./styles.module.scss";

type Devices = {
    items: Array<DeviceType>
};

type DeviceType = {
    brandId: number,
    createdAt: string
    deletedAt: string | null,
    id: number,
    img: string,
    name: string,
    price: number,
    rating: number,
    typeId: number,
    updatedAt: string,
};

const AdminBody: React.FC<Devices> = ({ items }) =>{
    const openEditPopup = (item: DeviceType) => {
    };

    const deleteConfirmation = (id: number) => {
    };

    return (
        <div className={styles.adminBody}>
            {items.length &&
                items.map(item =>
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
                )
            }
        </div>
    )
};

export default AdminBody;
