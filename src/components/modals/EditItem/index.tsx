import { FC, FormEvent, useState } from 'react';
import { useSnackbar } from 'notistack';

import { createBrand } from '../../../http/deviceAPI';

import styles from './styles.module.scss';

type PopupOption = {
    type: string,
    name: string,
    id: number,
};

interface CreateBrandProps {
    setPopup: (arg: string) => void,
    popupOptions: PopupOption,
}

const EditItem: FC<CreateBrandProps> = ({ setPopup, popupOptions }) => {
    const [data, setData] = useState<{ name: string }>({ name: '' });

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        createBrand(data).then(() => setPopup(''));
        enqueueSnackbar(`${popupOptions.type} was successfully changed.`);
        setPopup('');
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
                                onChange={e => setData({ name: e.target.value })}
                            />
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
