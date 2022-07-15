import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import FilterDropdown from '../FilterDropdown';

import styles from './styles.module.scss';

const TypesBar: FC = observer(() => {
    return (
        <div className={styles.typeBar}>
            <span className={styles.typeBar__title}>Filters:</span>
                <div className={styles.typeBarWrapper}>
                    <div className={styles.typeBar__item}>
                        <span>All</span>
                    </div>
                    <FilterDropdown name={'Type'}/>
                    <FilterDropdown name={'Brand'}/>
                </div>
        </div>
    );
});

export default TypesBar;
