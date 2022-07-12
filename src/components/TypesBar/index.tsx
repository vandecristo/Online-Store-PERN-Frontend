import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import classnames from 'classnames';

import { Context } from "../../index";

import styles from './styles.module.scss';

const TypesBar: React.FC = observer(() => {
    const { deviceStore } = useContext(Context);
    const active = false;

    return (
        <div className={styles.typeBar}>
            <span className={styles.typeBar__title}>Filters:</span>
            <ul>
                <div>
                    <div className={classnames(styles.typeBar__item, { [styles.typeBar__item_active]: active })}>All</div>
                    <div className={classnames(styles.typeBar__item, { [styles.typeBar__item_active]: active })}>Types</div>
                    <div className={classnames(styles.typeBar__item, { [styles.typeBar__item_active]: active })}>brands</div>
                </div>
                {/*{deviceStore?.types?.map(type =>{*/}
                {/*        const active = type.id === deviceStore.selectedType.id;*/}
                {/*        return (*/}
                {/*            // <li*/}
                {/*            //     className={classnames(styles.typeBar__item, { [styles.typeBar__item_active]: active })}*/}
                {/*            //     key={type.id}*/}
                {/*            //     onClick={() => deviceStore.setSelectedType(type)}*/}
                {/*            // >*/}
                {/*            //     <span>{type.name}</span>*/}
                {/*            // </li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*)}*/}
            </ul>
        </div>
    );
});

export default TypesBar;
