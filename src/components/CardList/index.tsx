import { FC } from 'react';

import { homePageCard } from '../../../interfaces';

import styles from './styles.module.scss';

interface CardListProps {
    cards: homePageCard[],
    title: string,
}

const CardList: FC<CardListProps> = ({ cards, title }) => (
    <div className={styles.cardList}>
        <span className={styles.cardList__header}>{title}</span>
        <div className={styles.cardList__body}>
            {cards.map((item) => (
                <div className={styles.cardList__card} key={item.id}>
                    <div className={styles.cardList__title}>{item.title}</div>
                    <span>{item.text}</span>
                    <div className={styles.cardList__date}>{item.date}</div>
                </div>
            ))}
        </div>
    </div>
);

export default CardList;
