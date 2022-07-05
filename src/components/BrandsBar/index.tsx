import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import { IMobx } from '../../../interfaces';

import styles from './styles.module.scss';

const BrandsBar: React.FC = observer(() => {
    const { deviceStore } = useContext<IMobx>(Context);

    return (
        <>
            {deviceStore?.brands?.map(item =>
                <div key={item.id} className={styles.brandBar__Item}>
                    <span>{item.name}</span>
                </div>
            )}
        </>
    );
});

export default BrandsBar;
