import React from "react";

import { BasicItem } from "../../../interfaces";

import styles from "./styles.module.scss";

type ItemProps = {items: Array<BasicItem>}

const AdminBody: React.FC<ItemProps> = ({ items }) =>{
    const openEditPopup = (item: BasicItem) => {
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
