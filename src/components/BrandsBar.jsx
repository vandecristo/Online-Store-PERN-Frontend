import React, { useContext } from 'react';
import styles from './BrandsBar.module.scss';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const BrandsBar = observer(() => {
    const {device} = useContext(Context);
    return (
        <>
            {device.brands.map(item =>
                <div key={item.id} className={styles.brandBar__Item}>
                    <span>{item.name}</span>
                </div>
            )
            }
        </>
    );
});

export default BrandsBar;