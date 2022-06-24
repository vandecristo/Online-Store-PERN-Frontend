import { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import styles from './styles.module.scss';

const TypesBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <div className={styles.typeBar}>
            <span className={styles.typeBar__title}>Filter by:</span>
            <ul>
                {device.types.map(type =>
                    <li
                        className={type.id === device.selectedType.id ? styles.typeBar__Item_active : styles.typeBar__Item}
                        key={type.id}
                        onClick={() => device.setSelectedType(type)}
                    >
                        <span>{type.name}</span>
                    </li>
                )}
            </ul>
        </div>
    );
});

export default TypesBar;
