import React, { useEffect, useState } from 'react';

import { createDevice, fetchBrands, fetchTypes } from "../../../http/deviceAPI";
import { BasicItem, PreparedDeviceData } from "../../../../interfaces";
import { useSnackbar } from 'notistack';

import styles from "./styles.module.scss";

interface CreateBrandProps {
    togglePopup: () => void;
}

type OptionType = {
    types: Array<BasicItem>,
    brands: Array<BasicItem>
};

const CreateDevice: React.FC<CreateBrandProps> = ({ togglePopup }) => {
    const [data, setData] = useState<PreparedDeviceData>({
        name: '',
        price: '',
        typeId: '',
        brandId: '',
        img: ''
    });
    const [options, setOptions] = useState<OptionType>({types: [], brands: []});

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('typeId', data.typeId);
        formData.append('brandId', data.brandId);
        formData.append('img', data.img);
        createDevice(formData)
            .then(() => {enqueueSnackbar('Device was successfully created.')})
            .catch(() => enqueueSnackbar(`Device wasn't been created, check inputs.`));
        togglePopup();
    };

    const fetchOptions = async () => {
        setOptions({types: await fetchTypes(), brands: await fetchBrands()})
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.createDevice}>
                    <form className={styles.createDevice__form} id="newDeviceData" onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
                        <div className={styles.createDevice__title}>
                            <span>Create Device:</span>
                        </div>
                        <div className={styles.createDevice__item}>
                            <input
                                className={styles.createDevice__input}
                                type="text"
                                placeholder='name'
                                onChange={e => setData({...data, name: e.target.value})}
                            />
                            <input
                                className={styles.createDevice__input}
                                type="text"
                                placeholder='price'
                                onChange={e => setData({...data, price: e.target.value})}
                            />
                        </div>
                        <div className={styles.createDevice__item}>
                            <select
                                className={styles.createDevice__input}
                                form="newDeviceData"
                                onChange={e => setData({...data, typeId: e.target.value})}
                            >
                                <option hidden>choose type</option>
                                {options.types?.map(type =>
                                    <option value={type.id} key={type.id}> {type.name}</option>
                                )}
                            </select>
                            <select
                                className={styles.createDevice__input}
                                form="newDeviceData"
                                onChange={e => setData({...data, brandId: e.target.value})}
                            >
                                <option hidden>choose Brand</option>
                                {options.brands?.map(brand =>
                                    <option value={brand.id} key={brand.id}>{brand.name}</option>
                                )}
                            </select>
                            {/*<input type="text" placeholder='Write info about device '/>*/}
                            <input
                                className={styles.createDevice__input_file}
                                type="file"
                                placeholder='file'
                                onChange={e => setData({...data, img: e.target?.files?.[0] ? e.target.files?.[0] : 'no picture' })}
                            />
                        </div>
                    </form>
                    <div className={styles.createDevice__btnWrapper}>
                        <button className={styles.createDevice__btn} onClick={() => togglePopup()}>
                            <span>Close</span>
                        </button>
                        <input className={styles.createDevice__btn} form="newDeviceData" type="submit" value='Add'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDevice;
