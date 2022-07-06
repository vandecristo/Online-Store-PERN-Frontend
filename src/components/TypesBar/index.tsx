import { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import styles from './styles.module.scss';

const TypesBar = observer(() => {
    const { deviceStore } = useContext(Context);

    return (
        <div className={styles.typeBar}>
            <span className={styles.typeBar__title}>Filter by:</span>
            <ul>
                {deviceStore?.types?.map(type =>
                    <li
                        className={type.id === deviceStore.selectedType.id ? styles.typeBar__Item_active : styles.typeBar__Item}
                        key={type.id}
                        onClick={() => deviceStore.setSelectedType(type)}
                    >
                        <span>{type.name}</span>
                    </li>
                )}
            </ul>
        </div>
    );
});

export default TypesBar;
