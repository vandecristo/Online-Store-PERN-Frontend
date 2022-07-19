import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import { MobxStores } from '../../../interfaces';
import Slider from '../../components/Slider';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';

import styles from './styles.module.scss';

const Home = observer(() => {
    const { deviceStore } = useContext<MobxStores>(Context);

    useEffect(() => {
        fetchTypes().then(types => deviceStore.setTypes(types));
        fetchBrands().then(brands => deviceStore.setBrands(brands));
        fetchDevices().then(devices => deviceStore.setDevices(devices.rows));
    }, []);

    return (
        <div className={styles.home}>
            <span className={styles.home__title}>Search</span>
            <div className={styles.home__item_slider}>
                <Slider/>
            </div>
            <div className={styles.home__itemWrapper}>
                <div className={styles.home__item}>
                    <span className={styles.home__title}>Categories:</span>
                    <div className={styles.home__categoryWrapper}>
                        {deviceStore.types?.map((item) => {
                            return (
                                <div key={item.id} className={styles.home__category}>
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.shop__itemWrapper}>
                <div className={styles.shop__item}>
                    <span>Reviews:</span>
                </div>
            </div>
            <div className={styles.shop__itemWrapper}>
                <div className={styles.shop__item}>
                    <span>News:</span>
                </div>
            </div>
            <div className={styles.shop__itemWrapper}>
                <div className={styles.shop__item}>
                    <span>Brands:</span>
                </div>

                <div className={styles.shop__itemWrapper}>
                    <div className={styles.shop__item}>
                        <span>Categories:</span>
                        {deviceStore.brands?.map((item) => {
                            return (
                                <div key={item.id}>
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div>Subscription</div>
        </div>
    );
});

export default Home;