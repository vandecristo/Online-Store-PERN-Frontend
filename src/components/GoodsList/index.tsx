import { FC, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import GoodsItem from '../GoodsItem';
import { MobxStores } from '../../../interfaces';

import styles from './styles.module.scss';

const GoodsList: FC = observer(() => {
    const { deviceStore } = useContext<MobxStores>(Context);

    return (
        <div className={styles.goodsList}>
            {deviceStore?.devices?.map((item) => (
                <GoodsItem key={item.id} device={item}/>
            ))}
        </div>
    );
});

export default GoodsList;
