import { useEffect, useState, useContext } from 'react';

import AdminPopup from '../../components/modals/AdminPopup/index';

import styles from './styles.module.scss';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {
    const {device} = useContext(Context);
    const [currentPopup, setCurrentPopup] = useState(null);
    const [popupStatus, togglePopup] = useState(false);

    const openPopup = (e) => {
        const { value } = e.target;
        setCurrentPopup(value);
        togglePopup(true);
    };

    useEffect(() => {
        console.log(device);
    },[]);

    return (
        <div className={styles.admin}>
            Admin panel:
            <div className={styles.admin__item} onClick={e => openPopup(e)}>
                <button className={styles.admin__type} value="type">
                    Add Type
                </button>
                <button className={styles.admin__brand} value="brand">
                    Add Brand
                </button>
                <button className={styles.admin__device} value="device">
                    Add Device
                </button>
            </div>
            <div className={styles.admin__item}>Devices: {device.devices.length}</div>
            <div className={styles.admin__item}>Brands: {device.brands.length}</div>
            <div className={styles.admin__item}>Types: {device.types.length}</div>
            <div className={styles.admin__item}>Users: 0</div>
            {popupStatus ? (<AdminPopup currentPopup={currentPopup} togglePopup={togglePopup}/>) : null}
        </div>
    );
});

export default Admin;
