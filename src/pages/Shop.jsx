import React from 'react';
import styles from './Shop.module.scss';
import BrandsBar from '../components/BrandsBar';
import TypesBar from '../components/TypesBar';
import GoodsList from "../components/GoodsList";

const Shop = () => {

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
};

export default Shop;