import { FC, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import { BasicItem, MobxStores } from '../../../interfaces';

import styles from './styles.module.scss';

const BrandsBar: FC = observer(() => {
    const { deviceStore } = useContext<MobxStores>(Context);

    return (
        <>
            {deviceStore?.brands?.map((item: BasicItem) =>
                <div key={item.id} className={styles.brandBar__Item}>
                    <span>{item.name}</span>
                </div>
            )}
        </>
    );
});

export default BrandsBar;
