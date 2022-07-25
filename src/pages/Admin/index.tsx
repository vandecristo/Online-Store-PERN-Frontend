import { FC, useState } from 'react';

import { BasicItem } from '../../../interfaces';
import CreateDevice from '../../components/modals/CreateDevice';
import EditItem from '../../components/modals//EditItem';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';

import styles from './styles.module.scss';

enum ItemButton {
    Devices,
    Types,
    Brands,
}

enum UserButton {
    Users,
    'Ban list',
    Roles,
    'Edit Users',
}

enum EventButton {
    Events,
    'Ban list',
    'Edit Events',
    Completes,
}

type PopupOption = {
    type: string,
    name: string,
    id: number,
};

const Admin: FC = () => {
    const [items, setItems] = useState<BasicItem[]>([]);
    const [isPopupOpen, setPopupOpen] = useState<boolean>(false);
    const [popupOptions, setPopupOptions] = useState<PopupOption>({ type: '', name: '', id: 0 });
    
    const buttonsArr = [ ItemButton, UserButton, EventButton];

    const fetchAndSpreadDevices = async () => {
        const { rows } = await fetchDevices();
        setItems(rows);
    };

    const showItems = async (name: ItemButton) => {
        setPopupOptions({ type: ItemButton[name], name: '', id: 0 });

        switch (+name) {
            case ItemButton.Devices:
                return fetchAndSpreadDevices();
            case ItemButton.Types:
                return setItems(await fetchBrands());
            case ItemButton.Brands:
                return setItems(await fetchTypes());
            default:
                break;
        }
    };

    const openEditPopup = (item: BasicItem) => {
        togglePopup();
        setPopupOptions((prev) => ({ ...prev, name: item.name, id: item.id }));
    };

    const deleteConfirmation = (id: number) => {
        //Delete by id
    };

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };

    const createPopup = (option: PopupOption) => {
        if (option.name === 'device') {
            return ( <CreateDevice togglePopup={togglePopup} /> );
        } else {
            return ( <EditItem togglePopup={togglePopup} popupOptions={popupOptions} /> );
        }
    };

    return (
        <div className={styles.admin}>
            <div className={styles.adminBar}>
                {isPopupOpen && <>{createPopup(popupOptions)}</>}
                <div className={styles.adminBar__wrapper}>
                    <span className={styles.adminBar__title}>Admin bar:</span>
                    <div className={styles.adminBar__btnGroup}>
                        <span>Create new items </span>
                        <div>
                            <button
                                className={styles.admin__button}
                                value="device"
                                onClick={() => {
                                    togglePopup();
                                    setPopupOptions({ type: '', name:'device', id: 0 });
                                }}>
                                Add Device
                            </button>
                        </div>
                    </div>
                    {buttonsArr.map((item, index) => (
                        <div className={styles.adminBar__btnGroup} key={index}>
                            <span>Manage {item[0]} </span>
                            <div className={styles.admin__item}>
                                {(Object.keys(buttonsArr) as Array<keyof typeof buttonsArr>).map(
                                    (item, keyIndex) => (
                                        <button
                                            key={index + Number(item) + 1}
                                            className={styles.admin__button}
                                            value={Number(item)}
                                            onClick={() => showItems(keyIndex)}>
                                            {buttonsArr[index][Number(item)]}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.adminBody}>
                {items?.map((item) => (
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
                ))}
            </div>
        </div>
    );
};

export default Admin;
