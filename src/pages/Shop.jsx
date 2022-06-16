import React from 'react';
import styles from './Shop.module.scss';
const Shop = () => {
    const filterOptions = [
        {id: 1, title: 'Apple'},
        {id: 2, title: 'Samsung'},
        {id: 3, title: 'Lenovo'},
        // {id: 4, title: 'filter'},
        // {id: 5, title: 'filter'},
        {id: 6, title: 'HP'},
        {id: 7, title: 'Philips!'},
        {id: 8, title: 'Siemens!'},
        {id: 9, title: 'Bosch'}];
    const typeBarOptions = [
        {id: 1, title: 'SmartPhonesdfgfdgdfgdfgfg'},
        {id: 2, title: 'Notebooks'},
        {id: 3, title: 'Computers'},
        {id: 4, title: 'Tablets'},
        {id: 5, title: 'ColdBox'},
        {id: 6, title: 'typebar'},
        {id: 7, title: 'typebar'}
    ];
    const goods = [
        {id: 1, title: 'Goods'},
        {id: 2, title: 'goods'},
        {id: 3, title: 'goods'},
        {id: 4, title: 'goods'},
        {id: 5, title: 'goods'},
        {id: 6, title: 'goods'},
        {id: 7, title: 'goods'},
        {id: 8, title: 'goods'},
        {id: 9, title: 'goods'},
        {id: 10, title: 'goods'},
        {id: 11, title: 'goods'},
        {id: 12, title: 'goods'}
    ];
  return (
      <div className={styles.shop}>
          <div className={styles.shop__body}>
               <div className={styles.shop__typeBarWrapper}>
                   <div className={styles.shop__typeBar}>
                       {typeBarOptions.map(item =>
                       <div
                           className={styles.shop__typebarItem}
                           key={item.id}>
                           <div>{item.title}</div>
                       </div>)}
                   </div>
               </div>
               <div className={styles.shop__goodsWrapper}>
                   <div className={styles.shop__filterWrapper}>
                       {filterOptions.map(item =>
                           <div
                               key={item.id}
                               className={styles.shop__filterItem}>
                               <span>{item.title}</span>
                           </div>)}
                   </div>
                   <div className={styles.shop__goodsList}>
                       {goods.map(item =>
                           <div  className={styles.shop__goods}
                                 key={item.id}>
                               {item.title}
                           </div>)}
                   </div>
               </div>
          </div>
      </div>
  );
};

export default Shop;