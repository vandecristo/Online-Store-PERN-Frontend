import { FC, FormEvent, useState } from 'react';
import { useSnackbar } from 'notistack';

import { createDevice } from '../../../http/deviceAPI';
import CreateEntity from '../CreateEntity';
import Icon from '../../Icon';
import { PreparedDeviceData } from '../../../../interfaces';

import styles from './styles.module.scss';

interface CreateBrandProps {
    togglePopup: () => void,
}

const CreateDevice: FC<CreateBrandProps> = ({ togglePopup }) => {
    const initialState: PreparedDeviceData = {
        name: '',
        price: '',
        typeId: '',
        brandId: '',
        img: '',
        imageName: ''
    };
    const [data, setData] = useState<PreparedDeviceData>(initialState);
    const { enqueueSnackbar } = useSnackbar();

    const showMessage = (message: string) : void => {
        enqueueSnackbar(message);
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
        );
    };

    const setImage = (e: FormEvent) => {
        const target = e.target as HTMLInputElement
        setData({
            ...data,
            img: target.files?.[0] || 'no picture',
            imageName: target.files?.[0].name.slice(0, 15) + '... '
        });
        target.value = '';
    };

    const handleSubmit = (e: FormEvent) => {
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

    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.createDevice}>
                    <form className={styles.createDevice__form} id="newDeviceData"
                          onSubmit={(e: FormEvent) => handleSubmit(e)}>
                        <div className={styles.createDevice__title}>
                            <span>Create Device:</span>
                        </div>
                        <div className={styles.createDevice__item}>
                            <input
                                className={styles.createDevice__input}
                                type="text"
                                placeholder="name"
                                onChange={(e) => setData({...data, name: e.target.value})}
                            />
                            <input
                                className={styles.createDevice__input}
                                type="text"
                                placeholder="price"
                                onChange={(e) => setData({...data, price: e.target.value})}
                            />
                        </div>
                        <div className={styles.createDevice__item}>
                            <CreateEntity
                                data={data}
                                setData={setData}
                                entityId="typeId"
                                entityName="Type"
                                showMessage={showMessage}
                            />
                            <CreateEntity
                                data={data}
                                setData={setData}
                                entityId="brandId"
                                entityName="Brand"
                                showMessage={showMessage}
                            />
                            <div className={styles.createDevice__inputWrapper}>
                                <input
                                    className={styles.createDevice__displayNone}
                                    type="file"
                                    id="file-upload"
                                    onChange={(e) => setImage(e)}
                                />
                                <label htmlFor="file-upload" className={styles.createDevice__btn_input}>
                                    <span>+Image</span>
                                </label>
                                {showSelectedImage()}
                            </div>
                        </div>
                    </form>
                    <div className={styles.createDevice__btnWrapper}>
                        <button className={styles.createDevice__btn} onClick={() => handleCloseForm()}>
                            <span>Close</span>
                        </button>
                        <input className={styles.createDevice__btn} form="newDeviceData" type="submit" value="Add"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDevice;
