import React from 'react';
import CreateType from "./CreateType";
import CreateDevice from "./CreateDevice";
import CreateBrand from "./CreateBrand";
import styles from "./AdminPopup.module.scss";

const AdminPopup = ({ currentPopup, togglePopup }) => {

    const renderPopup = () => {

        switch (currentPopup) {
            case 'type':
                return <CreateType/>

            case 'brand':
                return <CreateBrand/>

            case 'device':
                return <CreateDevice/>

            default:
                return null
        }
    }
    return (
        <div className={styles.popup}>
            <div className={styles.popupWrapper}>
                create {currentPopup}
                {renderPopup()}

                <button className={styles.popup__Btn} onClick={() => togglePopup(false)}>
                   <span>Close popup</span>
                </button>
                <button className={styles.popup__Btn}>
                   <span>Add {currentPopup}</span>
                </button>
            </div>

        </div>
    );
};

export default AdminPopup;