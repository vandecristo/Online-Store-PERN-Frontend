import { useContext, useState } from 'react';

import { Context } from "../../../index";
import { createDevice } from "../../../http/deviceAPI";

import styles from "./styles.module.scss";

const CreateDevice = ({togglePopup}) => {
    const {device} = useContext(Context);
    const [data, setData] = useState({name: '', price: 0, typeId: 0, brandId: 0, img: {}});

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('img', data.img);
        formData.append('typeId', data.typeId);
        formData.append('brandId', data.brandId);
        //formData.append('info', JSON.stringify(data.info));
        createDevice(formData)
            .then(data => {
                console.log('Create new device was successful:', data);
                togglePopup(false);
            }
        );
    };

    return (
        <div className={styles.createDevice}>
            <form className={styles.createDevice__form} id="newDeviceData" onSubmit={e => handleSubmit(e)}>
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
                        onChange={e => setData({...data, price: Number(e.target.value)})}
                    />
                </div>
                <div className={styles.createDevice__item}>
                    <select
                        className={styles.createDevice__input}
                        form="newDeviceData"
                        onChange={e => setData({...data, typeId: Number(e.target.value)})}
                    >
                        {device.types.map(type => <option value={type.id} key={type.id}> {type.name}</option>)}
                    </select>
                    <select
                        className={styles.createDevice__input}
                        form="newDeviceData"
                        onChange={e => setData({...data, brandId: Number(e.target.value)})}
                    >
                        {device.brands.map(brand => <option value={brand.id} key={brand.id}>{brand.name}</option>)}
                    </select>
                    {/*<input type="text" placeholder='Write info about device '/>*/}
                    <input
                        className={styles.createDevice__input_file}
                        type="file"
                        placeholder='file'
                        onChange={e => setData({...data, img: e.target.files[0]})}
                    />
                </div>
            </form>
            <div className={styles.createDevice__btnWrapper}>
                <button className={styles.createDevice__btn} onClick={() => togglePopup(false)}>
                    <span>Close</span>
                </button>
                <input className={styles.createDevice__btn} form="newDeviceData" type="submit" value='Add'/>
            </div>
        </div>
    );
};

export default CreateDevice;
