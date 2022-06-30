import { useState, useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import AdminPopup from '../../components/modals/AdminPopup/index';

const Admin = observer(() => {
    const { device } = useContext(Context);
    const [currentPopup, setCurrentPopup] = useState(null);
    const [popupStatus, togglePopup] = useState(false);

    const openPopup = (e) => {
        const { value } = e.target;
        setCurrentPopup(value);
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
            <div>Devices: {device.devices.length}</div>
            <div>Brands: {device.brands.length}</div>
            <div>Types: {device.types.length}</div>
            <div>Users: 0</div>
            {popupStatus && (<AdminPopup currentPopup={currentPopup} togglePopup={togglePopup}/>)}
        </div>
    );
});

export default Admin;
