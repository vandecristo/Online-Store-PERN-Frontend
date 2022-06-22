import { useState } from 'react';

import AdminPopup from "../../components/modals/AdminPopup/index";

const Admin = () => {
    const [currentPopup, setCurrentPopup] = useState(null);
    const [popupStatus, togglePopup] = useState(false);

    const openPopup = (e) => {
        const { className } = e.target;
        setCurrentPopup(className);
        togglePopup(true);
    };

    return (
        <div>
            <div className="createManager" onClick={e => openPopup(e)}>
                Admin panel:
                <button className="type">
                    Add Type
                </button>
                <button className="brand">
                    Add Brand
                </button>
                <button className="device">
                    Add Device
                </button>
            </div>
            {popupStatus ? (<AdminPopup currentPopup={currentPopup} togglePopup={togglePopup}/>) : null}
        </div>
    );
};

export default Admin;
