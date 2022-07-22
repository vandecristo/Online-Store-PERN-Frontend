import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import { BasicItem, ProcessEnv } from '../../../interfaces';

import styles from './styles.module.scss';

interface CategoryBarProps {
    items: BasicItem[] | undefined,
    defaultImage: string,
    withBottomText: boolean,
    title: string,
}

const CategoryBar: FC<CategoryBarProps> = observer(({
    items,
    defaultImage,
    withBottomText,
    title
}) => {
    const { REACT_APP_API_URL }: ProcessEnv = process.env;

    const createImageLink = (item: BasicItem) => {
        const image = item.img ? item.img : defaultImage;
        return String(REACT_APP_API_URL ? REACT_APP_API_URL + image : 'http://localhost:5000/' + image);
    };

    return (
        <div className={styles.categoryBar}>
            <span className={styles.categoryBar__header}>{title}</span>
            <div className={styles.categoryBar__body}>
                {items?.map((item) => {
                    return (
                        <div className={styles.category__item} key={item.id}>
                            <div className={styles.category__imageWrapper}>
                                <img
                                    width={85}
                                    height={56}
                                    className={styles.category__image}
                                    src={createImageLink(item)}
                                    alt="no-picture"
                                />
                            </div>
                            {withBottomText && (<span className={styles.category__text}>{item.name}</span>)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

export default CategoryBar;
