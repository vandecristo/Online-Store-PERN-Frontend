import { FC, useEffect, useState } from 'react';
import classnames from 'classnames';
import { useSnackbar } from 'notistack';

import AdminBody from '../../components/AdminBody';
import { BasicItem } from '../../../interfaces';
import ConfirmAction from '../../components/modals/ConfirmAction';
import CreateDevice from '../../components/modals/CreateDevice';
import EditItem from '../../components/modals//EditItem';
import { deleteBrand, deleteDevice, deleteType, fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';

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
    const [popupOptions, setPopupOptions] = useState<PopupOption>({ type: 'Devices', name: '', id: 0 });
    const [popup, setPopup] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const buttonsArr = [ ItemButton, UserButton, EventButton];

    useEffect(() => {
        fetchAndSpreadDevices()
    },[]);

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
                return setItems(await fetchTypes());
            case ItemButton.Brands:
                return setItems(await fetchBrands());
            default:
                break;
        }
    };

    const deleteConfirmation = async (id: number, name: string) => {
        setPopupOptions({...popupOptions, id, name})
        setPopup('ConfirmAction');
    };

    const removeItem = async (id: string, name: string) => {
        try {
            switch (popupOptions.type) {
                case Object.values(ItemButton)[0]:
                    setItems(await deleteDevice(id));
                    break;
                case Object.values(ItemButton)[1]:
                    setItems(await deleteType(id));
                    break;
                case Object.values(ItemButton)[2]:
                    setItems(await deleteBrand(id));
                    break;
                default:
                    break;
            }
            enqueueSnackbar(`${name} was successfully deleted from ${popupOptions.type}`);
        } catch (e) {
            enqueueSnackbar(`Error, something goes wrong, ${e}`);
        }
    };


    const createPopup = () => {
        console.log('########### popupOptions.id:', popupOptions.id);
        if (popup === 'ConfirmAction') {
            return (<ConfirmAction setPopup={setPopup} removeItem={removeItem} id={popupOptions.id.toString()} />)
        } else if (popup === 'EditItem') {
            return ( <EditItem setPopup={setPopup} popupOptions={popupOptions} /> );
        } else if (popup === 'CreateDevice') {
            return ( <CreateDevice setPopup={setPopup} /> );
        }
    };

    const openEditPopup = (item: BasicItem) => {
        setPopup('EditItem')
        setPopupOptions((prev) => ({ ...prev, name: item.name, id: item.id }));
    };

    return (
        <div className={styles.admin}>
            <div className={styles.adminBar}>
                {popup && <>{createPopup()}</>}
                <div className={styles.adminBar__wrapper}>
                    <span className={styles.adminBar__title}>Admin bar:</span>
                    <div className={styles.adminBar__btnGroup}>
                        <span>Create new items </span>
                        <div>
                            <button
                                className={styles.admin__button}
                                value="device"
                                onClick={() => {
                                    setPopup('CreateDevice');
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
                                            className={classnames(styles.admin__button, {[styles.admin__button_active]: buttonsArr[index][Number(item)] === popupOptions.type})}
                                            value={Number(item)}
                                            onClick={() => showItems(keyIndex)}
                                        >
                                            {buttonsArr[index][Number(item)]}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <AdminBody items={items} deleteConfirmation={deleteConfirmation} openEditPopup={openEditPopup} />
        </div>
    );
};

export default Admin;
