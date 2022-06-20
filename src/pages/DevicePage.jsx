import React from 'react';
import styles from './DevicePage.module.scss';

const DevicePage = () => {

    const mockPic = {id: 1, name: 'Samsung Galaxy S8 128gb', price: 72000, rating: 4.98, img: 'https://raw.githubusercontent.com/vandecristo/Online-Store-PERN-backend/95c23a52281e5577cb907a435fac43254fd144fa/static/543d7b8b-8f4e-47d1-9d4a-a7dd7c667962.jpg'}

  return (
      <div className={styles.device}>
          <div className={styles.device__wrapper}>
              <div className={styles.device__main}>
                  <div className={styles.device__picture}>
                      <img
                          width={356}
                          height={483}
                          className={styles.device__image}
                          src={mockPic.img}
                          alt="no-pic"
                      />
                  </div>
                  <div className={styles.device__header}>
                      <div className={styles.device__name}>{mockPic.name}</div>
                      <div className={styles.device__rate}>⭐  {mockPic.rating}</div>
                      <div className={styles.device__price}>{mockPic.price} Р</div>
                      <button className={styles.device__addBtn}>
                          <span>Add to cart</span>
                      </button>
                      <div className={styles.device__info}>
                          Скидка 100% на SIM-карту при покупке в комплекте со смартфоном
                          Подробнее Заказ должен быть оформлен на сайте или через терминал. Акция распространяется только на физических лиц.
                      </div>
                  </div>
              </div>
              <div className={styles.device__footer}>
                  <button className={styles.device__item}>
                      <span>about</span>
                  </button>
                  <button className={styles.device__item}>
                      <span>Specs</span>
                  </button>
                  <button className={styles.device__item}>
                      <span>Accessories</span>
                  </button>
                  <button className={styles.device__item}>
                      <span>Reviews</span>
                  </button>
              </div>
          </div>
      </div>
  );
};

export default DevicePage;