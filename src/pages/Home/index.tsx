import React, {useContext, useEffect} from 'react';

import { Context } from '../../index';
import { MobxStores } from '../../../interfaces';
import Slider from '../../components/Slider';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';

import styles from './styles.module.scss';

const Home = () => {
    const { deviceStore } = useContext<MobxStores>(Context);

    useEffect(() => {
        fetchTypes().then(types => deviceStore.setTypes(types));
        fetchBrands().then(brands => deviceStore.setBrands(brands));
        fetchDevices().then(devices => deviceStore.setDevices(devices.rows));
    }, []);

    return (
        <div>
            <div>Search</div>
            <div className={styles.shop__item}>
                <Slider/>
            </div>
            <div>
                <span>Categories:</span>
                {deviceStore.types?.map((item) => {
                    return (
                        <div key={item.id}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
            <div>Reviews</div>
            <div>News</div>
            <div>
                Brands
                <div>
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
            <div>Subscription</div>
        </div>
    );
};

export default Home;