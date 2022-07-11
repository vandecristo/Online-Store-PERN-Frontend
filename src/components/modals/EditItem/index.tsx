import React, { useState } from 'react';

import { createBrand } from '../../../http/deviceAPI';
import { useSnackbar } from 'notistack';

import styles from './styles.module.scss';

type PopupOption = {
    type: string,
    name: string,
    id: number
};

interface CreateBrandProps {
    togglePopup: () => void;
    popupOptions: PopupOption
}

type DataType = {
    name: string
};

const EditItem: React.FC<CreateBrandProps> = ({ togglePopup, popupOptions }) => {
    const [data, setData] = useState<DataType>({name: ''});

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //createBrand(data).then(() => togglePopup());
        enqueueSnackbar(`${popupOptions.type} was successfully changed.`);
        togglePopup();
    };

    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.createBrand}>
                    <form id="newBrandData" className={styles.createBrand__form} onSubmit={(e:React.FormEvent) => handleSubmit(e)}>
                        <div className={styles.createBrand__title}>
                            <span>Edit {popupOptions.name}:</span>
                        </div>
                        <div className={styles.createBrand__item}>
                            <input
                                className={styles.createBrand__input}
                                type="text"
                                name="name"
                                placeholder='name'
                                value={data.name}
                                onChange={e => setData({name: e.target.value})}
                            />
                        </div>
                    </form>
                    <div className={styles.createBrand__btnWrapper}>
                        <button className={styles.createBrand__btn} onClick={() => togglePopup()}>
                            <span>Close</span>
                        </button>
                        <input
                            form="newBrandData"
                            className={styles.createBrand__btn}
                            type="submit"
                            value={'Submit changes'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditItem;
