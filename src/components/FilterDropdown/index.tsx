import { FC, useContext, useState } from 'react';
import classnames from 'classnames';

import Icon from '../Icon';
import { Context } from '../../index';
import { BasicItem } from '../../../interfaces';

import styles from './styles.module.scss';

interface FilterDropdown {
    name: 'brands' | 'types',
    setParams: (item: BasicItem, name: string) => void,
    method: string,
}


const FilterDropdown: FC<FilterDropdown> = ({ name, setParams, method }) => {
    const { deviceStore } = useContext(Context);

    const [isDropdownActive, setDropDownActive] = useState<boolean>(false);
    const [currentActiveId, setCurrentActiveId] = useState<number>(0);

    const openList = () => {
        setDropDownActive(!isDropdownActive);
    };

    const handleClick = (item: BasicItem, name: string) => {
        setCurrentActiveId(item.id);
        setParams(item, name);
    };

    return (
        <div className={styles.dropdown}>
            <div
                className={classnames(styles.dropDown__button, {[styles.dropDown__button_active]: isDropdownActive})}
                onClick={() => openList()}
            >
                <span className={styles.dropDown__text}>
                    {name}
                </span>
                <div
                    className={classnames(styles.dropdown__iconWrapper, {[styles.dropdown__iconWrapper_open]: isDropdownActive})}>
                    <Icon className={styles.dropdown__icon} name="ArrowDown" size={16} />
                </div>
            </div>
            <div className={styles.dropdown__listWrapper}>
                <div className={classnames(styles.dropdown__list, {[styles.dropdown__list_active]: isDropdownActive})}>
                    {deviceStore[name]?.map((item) => ( // .types or .brands
                        <li
                            className={classnames(styles.dropdown__listElement, {[styles.dropdown__listElement_active]: item.id === currentActiveId})}
                            key={item.id}
                            onClick={() => handleClick(item, name)}
                        >
                            <span>{item.name}</span>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterDropdown;
