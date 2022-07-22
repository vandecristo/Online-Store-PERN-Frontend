import { FC, useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import CardList from '../../components/CardList';
import CategoryBar from '../../components/CategoryBar';
import { Context } from '../../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../../http/deviceAPI';
import { homePageCard, MobxStores } from '../../../interfaces';
import Icon from '../../components/Icon';
import Slider from '../../components/Slider';

import styles from './styles.module.scss';

const Home: FC = observer(() => {
    const { deviceStore } = useContext<MobxStores>(Context);
    const [placeholder, setPlaceholder] = useState<string>('Looking for something?');

    const defaultImage = { category: 'defaultCategory.png', brand: 'defaultBrand.png' };
    const placeholderVariants: string[] = [
        'Fridges?',
        'Smartphones?',
        'Laptops?',
        'Desktops?',
        'Monitors?',
        'Find something?',
        'Consoles?',
        'Apple?',
        'Samsung?',
        'Razer?',
        'Asus?',
        'IPhone?',
    ];
    const reviewsArr: homePageCard[] = [
        { id: 1, title: 'Why I think Xiaomi is overrated', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur, at atque dignissimos eos exercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus!', date: '21.06' },
        { id: 2, title: 'Apple made very budget smartphone again!', text: 'Exercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus!', date: '19.06' },
        { id: 3, title: 'I use my Radeon 6900XT as a shovel, but he doesn\'t mines', text: 'Labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus! xercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates volupta.\n', date: '15.06' },
        { id: 4, title: 'TLC air conditioner is meta', text: 'Consectetur adipisicing elit. Accusamus accusantium aspernatur, at atque dignissimos eos exercitationem facere labore libero minima molestias nam nesciunt quo repellat', date: '14.06' },
        { id: 5, title: 'Sony bend users again', text: 'Sony playstation 5 build most powerful console in the world, but they turn off 60fps framerate for all games', date: '9.05' },
        { id: 6, title: 'Air conditioner is perfect for last', text: 'Consectetur adipisicing elit. Accusamus accusantium aspernatur, at atque dignissimos eos exercitationem facere labore libero minima molestias nam nesciunt quo repellat', date: '7.06' },
    ];
    const newsArr: homePageCard[] = [
        { id: 101, title: 'Name of great news in our shop!', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur, at atque dignissimos eos exercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus!', date: '21.06' },
        { id: 102, title: 'Name of great news in our shop!', text: 'Exercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus!', date: '18.06' },
        { id: 103, title: 'Name of great news in our shop!', text: 'Labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus! xercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates volupta.', date: '16.06' },
        { id: 104, title: 'Name of great news in our shop!', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium aspernatur, at atque dignissimos eos exercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus!', date: '9.03' },
        { id: 105, title: 'Name of great news in our shop!', text: 'Labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus! xercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates volupta.', date: '7.03' },
        { id: 106, title: 'Name of great news in our shop!', text: 'Labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates voluptatibus! xercitationem facere labore libero minima molestias nam nesciunt quo repellat sit veritatis, voluptas voluptates volupta.', date: '7.03' },
    ];

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
                <input className={styles.home__input} type="text" placeholder={placeholder}/>
                <Icon className={styles.home__loupeIcon} name="Loupe" size={22}/>
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
                <CardList cards={reviewsArr} title="Reviews:"/>
            </div>
            <div className={styles.home__item}>
                <CardList cards={newsArr} title="News:"/>
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
                <input className={styles.home__input} type="text" placeholder="email"/>
                <Icon className={styles.home__loupeIcon} name="Plus" size={22}/>
            </div>
        </div>
    );
});

export default Home;
