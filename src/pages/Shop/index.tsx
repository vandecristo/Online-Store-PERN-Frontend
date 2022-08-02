import { FC, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import TypesBar from '../../components/TypesBar';
import GoodsList from '../../components/GoodsList';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import { MobxStores } from '../../../interfaces';

import styles from './styles.module.scss';

const Shop: FC = observer(() => {
    const { deviceStore } = useContext<MobxStores>(Context);

    useEffect(() => {
        fetchTypes().then((types) => deviceStore.setTypes(types));
        fetchBrands().then((brands) => deviceStore.setBrands(brands));
        fetchDevices().then((devices) => deviceStore.setDevices(devices.rows));
    }, []);

  return (
      <div className={styles.shop}>
          <div className={styles.shop__item}>
               <div className={styles.shop__typeBarWrapper}>
                   <TypesBar />
               </div>
               <div className={styles.shop__goodsWrapper}>
                   <GoodsList />
               </div>
          </div>
      </div>
  );
});

export default Shop;
