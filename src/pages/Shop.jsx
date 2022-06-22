import React, { useContext, useEffect } from 'react';
import styles from './Shop.module.scss';
import BrandsBar from '../components/BrandsBar';
import TypesBar from '../components/TypesBar';
import GoodsList from "../components/GoodsList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import {fetchBrands, fetchTypes} from "../http/deviceAPI";

const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect( () => {
        fetchTypes().then(types => device.setTypes(types));
        fetchBrands().then(brands => device.setBrands(brands));
    },[])

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