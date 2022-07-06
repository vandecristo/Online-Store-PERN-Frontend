import React, {useEffect, useState} from 'react';

import AdminBody from "../../components/AdminBody";
import AdminBar from "../../components/AdminBar";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceAPI";
import { IItem } from "../../../interfaces";

import styles from './styles.module.scss';

const Admin: React.FC = () => {
    const [items, setItems] = useState<Array<IItem>>([]);

    const fetchAndSpreadDevices = async () => {
        const res = await fetchDevices();
        setItems(res.rows);
    };
    const showAllItems = async (name: string) => {
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
