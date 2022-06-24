import { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import BrandsBar from '../../components/BrandsBar/index';
import TypesBar from '../../components/TypesBar/index';
import GoodsList from "../../components/GoodsList/index";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceAPI";

import styles from './styles.module.scss';

const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect( () => {
        fetchTypes().then(types => device.setTypes(types));
        fetchBrands().then(brands => device.setBrands(brands));
        fetchDevices().then(devices => device.setDevices(devices.rows));
    });

  return (
      <div className={styles.shop}>
          <div className={styles.shop__body}>
               <div className={styles.shop__typeBarWrapper}>
                   <TypesBar/>
               </div>
               <div className={styles.shop__goodsWrapper}>
                   <div className={styles.shop__brandBarWrapper}>
                       <BrandsBar/>
                   </div>
                   <GoodsList />
               </div>
          </div>
      </div>
  );
})

export default Shop;
