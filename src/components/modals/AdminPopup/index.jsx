import { useState } from "react";
import { createBrand, createDevice, createType } from "../../../http/deviceAPI";

import styles from "./styles.module.scss";

const AdminPopup = ({ currentPopup, togglePopup }) => {
    const [data, setData] = useState({name: ''});

    const handleSubmit = e => {
        e.preventDefault();
        switch (currentPopup) {
            case 'type':
               return  createType(data).then(() => togglePopup(false));
            case 'brand':
                return  createBrand(data).then(() => togglePopup(false));
            case 'device1':
                return  createDevice(data).then(() => togglePopup(false));
            default:
                return alert(`Some problem occurred with  currentProp: ${currentPopup}`);
        }
    };

    return (
        <div className={styles.popup}>
            <div className={styles.popupWrapper}>
                Create {currentPopup}:
                <form onSubmit={e => handleSubmit(e)}>
                    <label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={e => setData({name: e.target.value})}
                        />
                    </label>
                    <input className={styles.popup__Btn} type="submit" value={'Add' + ' ' + currentPopup} />
                </form>
                <div className={styles.popup__BtnWrapper} >
                    <button className={styles.popup__Btn} onClick={() => togglePopup(false)}>
                        <span>Close popup</span>
                    </button>
                    <button className={styles.popup__Btn}>
                        <span>Add {currentPopup}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPopup;
