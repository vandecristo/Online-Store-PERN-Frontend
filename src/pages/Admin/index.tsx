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
    const [popupTask, setPopupTask] = useState('');
    const { enqueueSnackbar } = useSnackbar();

    const buttonsArr = [ ItemButton, UserButton, EventButton];

    const fetchAndSpreadDevices = async () => {
        const { rows } = await fetchDevices();
        setItems(rows);
    };

    useEffect(() => {
        fetchAndSpreadDevices();
    },[]);

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
        setPopupTask('ConfirmAction');
    };

    const removeItem = async (popupOptions: PopupOption) => {
        const { id, name } = popupOptions;
        try {
            switch (popupOptions.type) {
                case Object.values(ItemButton)[0]:
                    setItems(await deleteDevice(id.toString()));
                    break;
                case Object.values(ItemButton)[1]:
                    setItems(await deleteType(id.toString()));
                    break;
                case Object.values(ItemButton)[2]:
                    setItems(await deleteBrand(id.toString()));
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
        switch (popupTask) {
            case 'ConfirmAction':
                return (<ConfirmAction setPopup={setPopupTask} removeItem={removeItem} popupOptions={popupOptions} />)
            case 'EditItem':
                return ( <EditItem setPopup={setPopupTask} popupOptions={popupOptions} setItems={setItems} items={items}/>);
            case 'CreateDevice':
                return ( <CreateDevice setPopup={setPopupTask} />);
            default:
                break;
        }
    };

    const openEditPopup = (item: BasicItem) => {
        setPopupTask('EditItem');
        setPopupOptions((prev) => ({...prev, name: item.name, id: item.id}));
    };

    return (
        <div className={styles.admin}>
            <div className={styles.adminBar}>
                {popupTask && <>{createPopup()}</>}
                <div className={styles.adminBar__wrapper}>
                    <span className={styles.adminBar__title}>Admin bar:</span>
                    <div className={styles.adminBar__btnGroup}>
                        <span>Create new items </span>
                            <button
                                className={styles.admin__button}
                                value="device"
                                onClick={() => {
                                    setPopupTask('CreateDevice');
                                    setPopupOptions({...popupOptions, name: 'device', id: 0 });
                                }}>
                                Add Device
                            </button>
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
