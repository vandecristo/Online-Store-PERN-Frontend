import { FC, useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import CardList from '../../components/CardList';
import CategoryBar from '../../components/CategoryBar';
import { Context } from '../../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import { MobxStores } from '../../../interfaces';
import Icon from '../../components/Icon';
import * as data from '../../mock/index.json';
import Slider from '../../components/Slider';

import styles from './styles.module.scss';

const Home: FC = observer(() => {
    const { deviceStore } = useContext<MobxStores>(Context);
    const [placeholder, setPlaceholder] = useState<string>('Looking for something?');

    const { placeholderVariants, newsArr, reviewsArr } = data;
    const defaultImage = { category: 'defaultCategory.png', brand: 'defaultBrand.png' };

    const swapPlaceholderVariant = () => {
        setPlaceholder(placeholderVariants[Math.floor(Math.random() * placeholderVariants.length)]);
    };

    useEffect(() => {
        fetchTypes().then(types => deviceStore.setTypes(types));
        fetchBrands().then(brands => deviceStore.setBrands(brands));
        fetchDevices().then(devices => deviceStore.setDevices(devices.rows));
    }, []);

    useEffect(() => {
        const anotherPlaceholderVariant = () => swapPlaceholderVariant();
        const timeout = setTimeout(anotherPlaceholderVariant, 3000);

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }}
    }, [placeholder]);

    return (
        <div className={styles.home}>
            <div className={styles.home__inputWrapper}>
                <input className={styles.home__input} type="text" placeholder={placeholder} />
                <Icon className={styles.home__loupeIcon} name="Loupe" size={22} />
            </div>
            <div className={styles.home__item_slider}>
                <Slider />
            </div>
            <div className={styles.home__item}>
                <CategoryBar
                    items={deviceStore.types}
                    defaultImage={defaultImage.category}
                    withBottomText={true}
                    title="Categories:"
                />
            </div>
            <div className={styles.home__item}>
                <CardList cards={reviewsArr} title="Reviews:" />
            </div>
            <div className={styles.home__item}>
                <CardList cards={newsArr} title="News:" />
            </div>
            <div className={styles.home__item}>
                <CategoryBar
                    items={deviceStore.brands}
                    defaultImage={defaultImage.brand}
                    withBottomText={false}
                    title="Brands:"
                />
            </div>
            <div className={styles.home__subscription}>
                <div className={styles.home__text}>I want to be aware of promotions and new products</div>
                <input className={styles.home__input} type="text" placeholder="email" />
                <Icon className={styles.home__loupeIcon} name="Plus" size={22} />
            </div>
        </div>
    );
});

export default Home;
