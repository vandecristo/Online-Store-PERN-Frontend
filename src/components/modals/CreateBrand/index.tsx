import React, { useState } from 'react';

import { createBrand } from '../../../http/deviceAPI';

import styles from './styles.module.scss';

interface CreateBrandProps {
    closePopupHandler: () => void;
}

type DataType = {
    name: string
}

const CreateBrand: React.FC<CreateBrandProps> = ({ closePopupHandler }) => {
    const [data, setData] = useState<DataType>({name: ''});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createBrand(data).then(() => closePopupHandler());
    };

    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.createBrand}>
                    <form id="newBrandData" className={styles.createBrand__form} onSubmit={(e:React.FormEvent) => handleSubmit(e)}>
                        <div className={styles.createBrand__title}>
                            <span>Create Brand:</span>
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
                        <button className={styles.createBrand__btn} onClick={() => closePopupHandler()}>
                            <span>Close</span>
                        </button>
                        <input
                            form="newBrandData"
                            className={styles.createBrand__btn}
                            type="submit"
                            value={'Add brand'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBrand;
