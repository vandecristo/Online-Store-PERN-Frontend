import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import Icon from '../../components/Icon';
import { MobxStores, ProcessEnv } from '../../../interfaces';
import Slider from '../../components/Slider';

import styles from './styles.module.scss';

type DefaultImage = {
    [key: string]: string,
};

const Home = observer(() => {
    const { deviceStore } = useContext<MobxStores>(Context);
    const [offset, setOffset] = useState<string>('Find something?');
    const { REACT_APP_API_URL }: ProcessEnv = process.env;

    const defaultImage: DefaultImage = { category: 'defaultCategory.png', brand: 'defaultBrand.png' };
    const placeholderItems: string[] = [
        'Fridges?',
        'SmartPhones?',
        'Laptops?',
        'Desktops?',
        'Monitors?',
        'Find something?',
        'Consoles?',
        'Apple?',
        'Samsung?',
        'Razer?',
        'Asus?',
        'IPhone',
    ];

    const swapPlaceholderItem = () => {
        setOffset(placeholderItems[Math.floor(Math.random() * placeholderItems.length)]);
    };

    useEffect(() => {
        fetchTypes().then(types => deviceStore.setTypes(types));
        fetchBrands().then(brands => deviceStore.setBrands(brands));
        fetchDevices().then(devices => deviceStore.setDevices(devices.rows));
    }, []);

    useEffect(() => {
        const nextPlaceholderItem = () => swapPlaceholderItem();
        const timeout = setTimeout(nextPlaceholderItem, 3000);

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }}
    }, [offset]);

    const createImageLink = (pic: string) => {
        return String(REACT_APP_API_URL ? REACT_APP_API_URL + pic : 'http://localhost:5000/' + pic);
    };

    return (
        <div className={styles.home}>
            <div className={styles.home__inputWrapper}>
                <input className={styles.home__input} type="text" placeholder={offset}/>
                <Icon className={styles.home__loupeIcon} name="Loupe" size={22}/>
            </div>
            <div className={styles.home__item_slider}>
                <Slider />
            </div>
            <div className={styles.home__itemWrapper}>
                <div className={styles.home__item}>
                    <span className={styles.home__section}>Categories:</span>
                    <div className={styles.home__categoryWrapper}>
                        {deviceStore.types?.map((item) => {
                            return (
                                <div key={item.id} className={styles.home__category}>
                                    <div className={styles.home__categoryImageWrapper}>
                                        <img
                                            width={85}
                                            height={56}
                                            className={styles.home__categoryImage}
                                            src={createImageLink(defaultImage.category)}
                                            alt="no-picture"
                                        />
                                    </div>
                                    <span className={styles.home__categoryText}>{item.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.home__itemWrapper}>
                <div className={styles.home__item}>
                    <span className={styles.home__section}>Reviews:</span>
                    <div className={styles.home__categoryWrapper}>
                        <div className={styles.home__textCard}>
                            <div className={styles.home__title}>I think Xiaomi is overrated</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur, at atque dignissimos eos exercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus!
                            </div>
                            <div className={styles.home__date}>21.06</div>
                        </div>
                        <div className={styles.home__textCard}>
                            <div className={styles.home__title}>Apple made very budget smartphone again!</div>
                            <div>
                                Exercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus!
                            </div>
                            <div className={styles.home__date}>19.06</div>
                        </div>
                        <div className={styles.home__textCard}>
                            <div className={styles.home__title}>I use my Radeon 6900XT as a shovel, but he doesn't mines</div>
                            <div>
                                Labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus! xercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates volupta.
                            </div>
                            <div className={styles.home__date}>15.06</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.home__itemWrapper}>
                <div className={styles.home__item}>
                    <span className={styles.home__section}>News:</span>
                    <div className={styles.home__categoryWrapper}>
                        <div className={styles.home__textCard}>
                            <div className={styles.home__title}>Name of great news in our shop!</div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur, at atque dignissimos eos exercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus!
                            </div>
                            <div className={styles.home__date}>21.06</div>
                        </div>
                        <div className={styles.home__textCard}>
                            <div className={styles.home__title}>Name of great news in our shop!</div>
                            <div>
                               Exercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus!
                            </div>
                            <div className={styles.home__date}>19.06</div>
                        </div>
                        <div className={styles.home__textCard}>
                            <div className={styles.home__title}>Name of great news in our shop!</div>
                            <div>
                                Labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus! xercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates volupta.
                            </div>
                            <div className={styles.home__date}>15.06</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.home__itemWrapper}>
                <div className={styles.home__item}>
                    <span className={styles.home__section}>Brands:</span>
                    <div className={styles.home__categoryWrapper}>
                        {deviceStore.brands?.map((item) => {
                            return (
                                <div key={item.id} className={styles.home__category}>
                                    <div className={styles.home__categoryImageWrapper}>
                                        <img
                                            width={85}
                                            height={56}
                                            className={styles.home__categoryImage}
                                            src={createImageLink(defaultImage.brand)}
                                            alt="no-picture"
                                        />
                                    </div>
                                    <span className={styles.home__categoryText}>{item.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.home__subscription}>
                <div className={styles.home__text}>I want to be aware of promotions and new products</div>
                <input className={styles.home__input} type="text" placeholder="email"/>
                <Icon className={styles.home__loupeIcon} name="Plus" size={22}/>
            </div>
        </div>
    );
});

export default Home;
