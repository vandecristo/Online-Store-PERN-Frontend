import CreateType from "../CreateType";
import CreateBrand from "../CreateBrand";
import CreateDevice from "../CreateDevice";

import styles from "./styles.module.scss";

const AdminPopup = ({currentPopup, togglePopup}) => {
    const selectCreationForm = () => {
        switch (currentPopup) {
            case 'type':
                return  <CreateType togglePopup={togglePopup}/>;
            case 'brand':
                return   <CreateBrand togglePopup={togglePopup}/>;
            case 'device':
                return  <CreateDevice togglePopup={togglePopup}/>;
            default:
                return alert(`Some problem occurred with  currentProp: ${currentPopup}`);
        }
    };

    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                {selectCreationForm()}
            </div>
        </div>
    );
};

export default AdminPopup;
