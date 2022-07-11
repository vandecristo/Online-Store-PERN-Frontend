import React, { useEffect, useState } from 'react';

import { BasicItem, PreparedDeviceData } from '../../../../interfaces';
import { createDevice, fetchBrands, fetchTypes } from '../../../http/deviceAPI';
import Icon from '../../Icon';
import { useSnackbar } from 'notistack';

import styles from './styles.module.scss';

interface CreateBrandProps {
    togglePopup: () => void;
}

type OptionType = {
    types: Array<BasicItem>,
    brands: Array<BasicItem>
};

const CreateDevice: React.FC<CreateBrandProps> = ({ togglePopup }) => {
    const initialState = {
        name: '',
        price: '',
        typeId: '',
        brandId: '',
        img: '',
        imageName: ''
    };
    const [data, setData] = useState<PreparedDeviceData>(initialState);
    const [options, setOptions] = useState<OptionType>({types: [], brands: []});

    const { enqueueSnackbar } = useSnackbar();

    const showMessage = (message: string) :void => {
        enqueueSnackbar(message);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('typeId', data.typeId);
        formData.append('brandId', data.brandId);
        formData.append('img', data.img);
        createDevice(formData)
        .then(() => showMessage('Device was successfully created.'))
        .catch(() => showMessage(`Device wasn't been created, check data.`));
        handleCloseForm();
    };
    
    const handleCloseForm = () => {
        setData(initialState);
        togglePopup();
    };

    const showSelectedImage = () => {
        return (
            <div className={styles.createDevice__pictureName}>
                {data.img ? (
                    <>
                        <Icon className={styles.createDevice__icon} name='Image' size={20}/>
                        <span>{data.imageName}</span>
                        <div className={styles.createDevice__removeItem} onClick={() => setData({...data, img: ''})}>
                            <Icon className={styles.createDevice__icon} name='TrashCan' size={20}/>
                        </div>
                    </>
                ) : (
                    <div>
                        <span>File is not chosen</span>
                    </div>
                )}
            </div>
        )
    };

    const fetchOptions = async () => {
        setOptions({types: await fetchTypes(), brands: await fetchBrands()})
    };

    const setImage = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement
        setData({
            ...data,
            img: target.files?.[0] || 'no picture',
            imageName: target.files?.[0].name.slice(0, 15) + '... '
        })
        target.value = '';
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.createDevice}>
                    <form className={styles.createDevice__form} id="newDeviceData"
                          onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
                        <div className={styles.createDevice__title}>
                            <span>Create Device:</span>
                        </div>
                        <div className={styles.createDevice__item}>
                            <input
                                className={styles.createDevice__input}
                                type="text"
                                placeholder='name'
                                onChange={(e) => setData({...data, name: e.target.value})}
                            />
                            <input
                                className={styles.createDevice__input}
                                type="text"
                                placeholder='price'
                                onChange={(e) => setData({...data, price: e.target.value})}
                            />
                        </div>
                        <div className={styles.createDevice__item}>
                            <select
                                className={styles.createDevice__input}
                                form="newDeviceData"
                                onChange={(e) => setData({...data, typeId: e.target.value})}
                            >
                                <option hidden>choose type</option>
                                {options.types?.map(type =>
                                    <option value={type.id} key={type.id}> {type.name}</option>
                                )}
                            </select>
                            <select
                                className={styles.createDevice__input}
                                form="newDeviceData"
                                onChange={(e) => setData({...data, brandId: e.target.value})}
                            >
                                <option hidden>choose brand</option>
                                {options.brands?.map(brand =>
                                    <option value={brand.id} key={brand.id}>{brand.name}</option>
                                )}
                            </select>
                            {/*<input type="text" placeholder='Write info about device'/>*/}
                            <div className={styles.createDevice__inputWrapper}>
                                <input
                                    className={styles.createDevice__displayNone}
                                    type="file"
                                    id="file-upload"
                                    onChange={(e) => setImage(e)}
                                />
                                <label htmlFor="file-upload" className={styles.createDevice__btn_input}>
                                    <span>+image</span>
                                </label>
                                {showSelectedImage()}
                            </div>
                        </div>
                    </form>
                    <div className={styles.createDevice__btnWrapper}>
                        <button className={styles.createDevice__btn} onClick={() => handleCloseForm()}>
                            <span>close</span>
                        </button>
                        <input className={styles.createDevice__btn} form="newDeviceData" type="submit" value='add'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDevice;
