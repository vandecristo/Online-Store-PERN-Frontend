import { useState } from 'react';

import AdminBody from "../../components/AdminBody";
import AdminBar from "../../components/AdminBar";

import styles from './styles.module.scss';
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceAPI";

const Admin = () => {
    const [items, setItems] = useState([]);

    const fetchAndSpreadDevices = async () => {
        const res = await fetchDevices();
        setItems(res.rows);
    };

    const showAllItems = async name => {

        switch (name) {
            case 'showDevices':
                return fetchAndSpreadDevices();
            case 'showBrands':
                return setItems(await fetchBrands());
            case 'showTypes':
                return setItems(await fetchTypes());
            default:
                break;
        }
    };

    return (
        <div className={styles.admin}>
            <AdminBar showAllItems={showAllItems}/>
            <AdminBody items={items}/>
        </div>
    );
};

export default Admin;
