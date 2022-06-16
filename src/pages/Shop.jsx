import React from 'react';
import styles from './Shop.module.scss';
const Shop = () => {
  return (
      <div className={styles.shop}>
          <div className={styles.shop__body}>
               <div className={styles.shop__typeBarWrapper}>
                   <div className={styles.shop__typeBar}>
                       typebar
                   </div>
               </div>
               <div className={styles.shop__goodsWrapper}>
                   <div className={styles.shop__filterWrapper}>
                       filter
                   </div>
                   <div className={styles.shop__goodsList}>
                        GoodsList
                   </div>
                   <div>
                       Some changes
                   </div>
               </div>
          </div>
      </div>
  );
};

export default Shop;