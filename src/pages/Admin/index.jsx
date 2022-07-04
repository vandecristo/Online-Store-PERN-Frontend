import { useState, useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import AdminPopup from '../../components/modals/AdminPopup/index';

const Admin = observer(() => {
    const { deviceStore: { devices, brands, types }} = useContext(Context);
    const [currentPopup, setCurrentPopup] = useState(null);
    const [popupStatus, togglePopup] = useState(false);

    const openPopup = (e) => {
        setCurrentPopup(e.target.value);
        togglePopup(true);
    };

    return (
        <div >
            Admin panel:
            <div onClick={e => openPopup(e)}>
                <button value="type">
                    Add Type
                </button>
                <button value="brand">
                    Add Brand
                </button>
                <button value="device">
                    Add Device
                </button>
            </div>
            <div>Devices: {devices.length || 0}</div>
            <div>Brands: {brands.length || 0}</div>
            <div>Types: {types.length || 0}</div>
            <div>Users: 0</div>
            {popupStatus && (<AdminPopup currentPopup={currentPopup} togglePopup={togglePopup}/>)}
        </div>
    );
});

export default Admin;
