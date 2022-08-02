import { FC, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { BasicItem } from '../../../interfaces';
import { Context } from '../../index';
import { fetchDevices } from '../../http/deviceAPI';
import FilterDropdown from '../FilterDropdown';
import * as data from '../../mock/index.json';

import styles from './styles.module.scss';

const TypesBar: FC = observer(() => {
    const { deviceStore } = useContext(Context);
    const [filterParams, setFilterParams] = useState({});
    const { filterDropdowns } = data;

    const setParams = async (item: BasicItem, name: string) => {
        switch (name) {
            case 'all':
                return fetchDevices({ limit: 5, page: 1 }).then((devices) => deviceStore.setDevices(devices.rows));
            case 'types':
                fetchDevices({ ...filterParams, limit: 5, page: 1, typeId: item.id }).then((devices) => deviceStore.setDevices(devices.rows));
                await setFilterParams({ ...filterParams, typeId: item.id });
                break;
            case 'brands':
                fetchDevices({ ...filterParams, limit: 5, page: 1, brandId: item.id }).then((devices) => deviceStore.setDevices(devices.rows));
                 await setFilterParams({ ...filterParams, brandId: item.id });
                 break;
            default:
                break;
        }
    };

    return (
        <div className={styles.typeBar}>
            <span className={styles.typeBar__title}>Filters:</span>
            <div className={styles.typeBarWrapper}>
                <div className={styles.typeBar__item}>
                    <span>All</span>
                </div>
                    {filterDropdowns.map((item) => (
                        <FilterDropdown name={item.name as 'brands' | 'types'} key={item.id} setParams={setParams} method={item.method} />
                    ))}
            </div>
        </div>
    );
});

export default TypesBar;
