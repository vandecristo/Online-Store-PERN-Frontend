import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import BrandsBar from '../../components/BrandsBar';
import TypesBar from '../../components/TypesBar';
import GoodsList from "../../components/GoodsList";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceAPI";
import { IMobx } from "../../../interfaces";

import styles from './styles.module.scss';

const Shop: React.FC = observer(() => {
    const { deviceStore } = useContext<IMobx>(Context);

    useEffect(() => {
        fetchTypes().then(types => deviceStore.setTypes(types));
        fetchBrands().then(brands => deviceStore.setBrands(brands));
        fetchDevices().then(devices => deviceStore.setDevices(devices.rows));
    }, []);

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
