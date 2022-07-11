import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import classnames from 'classnames';

import { Context } from '../../index';

import styles from './styles.module.scss';

const TypesBar = observer(() => {
    const { deviceStore } = useContext(Context);

    return (
        <div className={styles.typeBar}>
            <span className={styles.typeBar__title}>Filter by:</span>
            <ul>
                {deviceStore?.types?.map(type =>{
                    const active = type.id === deviceStore.selectedType.id;
                        return (
                            <li
                                className={classnames(styles.typeBar__item, { [styles.typeBar__item_active]: active })}
                                key={type.id}
                                onClick={() => deviceStore.setSelectedType(type)}
                            >
                                <span>{type.name}</span>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    );
});

export default TypesBar;
