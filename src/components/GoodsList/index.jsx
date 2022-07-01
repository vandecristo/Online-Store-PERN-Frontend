import { useContext } from 'react';
import { observer } from "mobx-react-lite";

import { Context } from "../../index";
import GoodsItem from "../GoodsItem/index";

import styles from "./styles.module.scss";

const GoodsList = observer(() => {
    const { device } = useContext(Context);

    return (
        <div className={styles.goodsList}>
            {device.devices?.map(item =>
                <GoodsItem key={item.id} device={item}/>
            )}
        </div>
    );
});

export default GoodsList;
