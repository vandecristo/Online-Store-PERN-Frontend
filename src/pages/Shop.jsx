import React from 'react';
import styles from './Shop.module.scss';
import BrandsBar from '../components/BrandsBar';
import TypesBar from '../components/TypesBar';

const Shop = () => {
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
                        <TypesBar/>
               </div>
               <div className={styles.shop__goodsWrapper}>
                   <div className={styles.shop__brandBarWrapper}>
                       <BrandsBar/>
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