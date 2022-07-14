import React, { useContext, useState } from 'react';
import classnames from 'classnames';

import Icon from '../Icon';
import { BasicItem } from '../../../interfaces';
import { Context } from '../../index';

import styles from './styles.module.scss';

interface FilterDropdownProps {
    name: string,
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ name }) => {
    const { deviceStore } = useContext(Context);

    const [isDropdownActive, setDropDownActive] = useState<boolean>(false);
    const [currentActiveId, setCurrentActiveId] = useState<number>(0);

    const openList = () => {
        setDropDownActive(!isDropdownActive);
    };

    const setSelectedEntity = () => {
        if (name === 'Brand') {
           return 'setSelectedBrand';
        } else {
            return 'setSelectedType';
        }
    };

    const nameOfStore = () => {
        if (name === 'Brand') {
            return 'brands';
        } else {
            return 'types';
        }
    };

    const handleClick = (item: BasicItem) => {
        deviceStore[setSelectedEntity()](item);
        setCurrentActiveId(item.id);
    };

    return (
        <div className={styles.dropdown}>
            <div
                className={classnames(styles.dropDown__button, {[styles.dropDown__button_active]: isDropdownActive})}
                onClick={() => openList()}
            >
                <span className={styles.dropDown__text}>
                    {name + 's'}
                </span>
                <div
                    className={classnames(styles.dropdown__iconWrapper, {[styles.dropdown__iconWrapper_open]: isDropdownActive})}>
                    <Icon className={styles.dropdown__icon} name='ArrowDown' size={16}/>
                </div>
            </div>
            <div className={styles.dropdown__listWrapper}>
                <div
                    className={classnames(styles.dropdown__list, {[styles.dropdown__list_active]: isDropdownActive})}
                >
                    {deviceStore[nameOfStore()]?.map((item) => { // .types or .brands
                        return (
                            <li
                                className={classnames(styles.dropdown__listElement, {[styles.dropdown__listElement_active]: item.id === currentActiveId})}
                                key={item.id}
                                onClick={() => handleClick(item)}
                            >
                                <span>{item.name}</span>
                            </li>
                        )}
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterDropdown;
