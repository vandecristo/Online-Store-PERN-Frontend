import { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";

import styles from './styles.module.scss';

const BrandsBar = observer(() => {
    const { device } = useContext(Context);
    return (
        <>
            {device?.brands?.map(item =>
                <div key={item.id} className={styles.brandBar__Item}>
                    <span>{item.name}</span>
                </div>
            )}
        </>
    );
});

export default BrandsBar;
