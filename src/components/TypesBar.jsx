import React, { useContext } from 'react';
import styles from './TypesBar.module.scss';
import { observer } from "mobx-react-lite";
import {Context} from "../index";

const TypesBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <div className={styles.typeBar}>
            <span>Filter by:</span>
            <ul>
            {device.types.map(type =>
                <li
                    className={styles.typeBar__Item}
                    key={type.id}
                    onClick={() => device.setSelectedType(type)}
                >
                    <span className={ type.id === device.selectedType.id ? styles.active : ''}>
                        {type.name}</span>
                </li>)}
            </ul>
        </div>
    );
});

export default TypesBar;