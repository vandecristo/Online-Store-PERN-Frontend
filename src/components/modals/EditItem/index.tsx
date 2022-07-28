import { FC, FormEvent, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';

import Icon from '../../Icon';
import { patchBrand, patchDevice, patchType } from '../../../http/deviceAPI';

import styles from './styles.module.scss';
import {BasicItem} from "../../../../interfaces";

type DataOptions = {
    id: number,
    name: string,
    price: string,
    img: File | any,
};

type PopupOption = {
    type: string,
    name: string,
    id: number,
};

interface CreateBrandProps {
    setPopup: (arg: string) => void,
    popupOptions: PopupOption,
    setItems: (arg: BasicItem[]) => void,
    items?: BasicItem[],
}

const EditItem: FC<CreateBrandProps> = ({ setPopup, popupOptions, setItems }) => {
    const [data, setData] = useState<DataOptions>({ id: popupOptions.id, name: popupOptions.name, price: '0', img: '' });

    const [items, setItoooms] = useState<BasicItem[]>([]);

    const { enqueueSnackbar } = useSnackbar();

    const patchItem = async (type: string | undefined, formData: FormData) => {
        switch (type) {
            case 'Devices':
                return patchDevice(formData).then(() => setPopup(''));
            case 'Brands':
                await patchBrand(formData).then(async (res) =>  {
                    console.log('########### res:', res);
                    const arr = [...res];
                    await setItems(res);
                });
                break;
            case 'Types':
                return patchType(formData).then(() => setPopup(''));
            default:
                break;
        }
    };

    useEffect(() => {
        console.log('editItem', items);
    },[items]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('id', data.id.toString());
        if (popupOptions.type === 'Devices') {
            if (data.price !== '0')
            formData.append('price', data.price);
        }
        if (data.img) {
            formData.append('img', data.img);
        }
        patchItem(popupOptions.type, formData);
        enqueueSnackbar(`${data.name} from ${popupOptions.type} was successfully changed.`);
        setPopup('');
    };

    const showSelectedImage = () => {
        return (
            <div className={styles.createDevice__pictureName}>
                {data.img ? (
                    <>
                        <Icon className={styles.createDevice__icon} name="Image" size={20} />
                        <span>'Image added'</span>
                        <div className={styles.createDevice__removeItem} onClick={() => setData({...data, img: ''})}>
                            <Icon className={styles.createDevice__icon} name="TrashCan" size={20} />
                        </div>
                    </>
                ) : (
                    <div>
                        <span>File is not chosen</span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.createBrand}>
                    <form id="newBrandData" className={styles.createBrand__form} onSubmit={(e: FormEvent) => handleSubmit(e)}>
                        <div className={styles.createBrand__title}>
                            <span>Edit {popupOptions.name}:</span>
                        </div>
                        <div className={styles.createBrand__item}>
                            <input
                                className={styles.createBrand__input}
                                type="text"
                                name="name"
                                placeholder="name"
                                value={data.name}
                                onChange={e => setData({...data, name: e.target.value})}
                            />
                        </div>
                        {popupOptions.type === 'Devices' && (
                            <div className={styles.createBrand__item}>
                                <input
                                    className={styles.createBrand__input}
                                    type="number"
                                    name="price"
                                    placeholder="price"
                                    value={data.price}
                                    onChange={e => setData({...data, price: e.target.value})}
                                />
                            </div>
                            )}
                        <div className={styles.createBrand__item}>
                            <input
                                className={styles.createDevice__displayNone}
                                type="file"
                                id="file-upload"
                                onChange={(e) => setData({...data, img: e.target.files?.[0]})}
                            />
                            <label htmlFor="file-upload" className={styles.createDevice__btn_input}>
                                <span>+Image</span>
                            </label>
                            {showSelectedImage()}
                        </div>
                    </form>
                    <div className={styles.createBrand__btnWrapper}>
                        <button className={styles.createBrand__btn} onClick={() => setPopup('')}>
                            <span>Close</span>
                        </button>
                        <input
                            form="newBrandData"
                            className={styles.createBrand__btn}
                            type="submit"
                            value="Submit changes"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditItem;
