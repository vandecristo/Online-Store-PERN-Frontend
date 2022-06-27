import { useState } from 'react';

import { createType } from '../../../http/deviceAPI';

import styles from './styles.module.scss';

const CreateType = ({togglePopup}) => {
    const [data, setData] = useState({name: ''});

    const handleSubmit = e => {
        e.preventDefault();
        createType(data).then(() => togglePopup(false));
    };

    return (
        <div className={styles.createType}>
            <form id="newTypeData" className={styles.createType__form} onSubmit={e => handleSubmit(e)}>
                <div className={styles.createType__title}>
                    <span>Create Type:</span>
                </div>
                <div className={styles.createType__item}>
                    <input
                        className={styles.createType__input}
                        type="text"
                        name="name"
                        placeholder='name'
                        value={data.name}
                        onChange={e => setData({name: e.target.value})}
                    />
                </div>
            </form>
            <div className={styles.createType__btnWrapper}>
                <button className={styles.createType__btn} onClick={() => togglePopup(false)}>
                    <span>Close</span>
                </button>
                <input form="newTypeData" className={styles.createType__btn} type="submit" value={'Add Type'}/>
            </div>
        </div>
    );
};

export default CreateType;
