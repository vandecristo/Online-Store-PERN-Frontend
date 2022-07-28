import { FC, FormEvent, useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';

import { BasicItem, PreparedDeviceData } from '../../../../interfaces';
import { fetchBrands, fetchTypes } from '../../../http/deviceAPI';
import CreateEntity from '../CreateEntity';
import Icon from '../../Icon';

import styles from './styles.module.scss';

interface SelectEntityList {
    entityName: string,
    data: PreparedDeviceData,
    setData: (arg: PreparedDeviceData) => void,
    entityId: string,
}

type OptionType = {
    [key: string]: BasicItem[],
};

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8 + 5,
            width: 350,
        },
    },
};

const SelectEntityList: FC<SelectEntityList> = ({
    entityName,
    data,
    setData,
    entityId
}) => {
    const [options, setOptions] = useState<OptionType>({ types: [], brands: [] });
    const [selectedEntity, setSelectedEntity] = useState<string>('');
    const [isEntityFormOpen, toggleEntityForm] = useState<boolean>(false);

    const entityArrName: string = `${entityName}`.toLowerCase() + 's';

    const fetchOptions = async () => {
        setOptions({ types: await fetchTypes(), brands: await fetchBrands() });
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    const switchEntityForm = (param = false) => {
        toggleEntityForm(param);
    };

    const closeFormWithNoPropagation = (e: FormEvent) => {
        e.stopPropagation();
        switchEntityForm(true);
    };

    const handleChange = (
        event: SelectChangeEvent,
        inputData: string,
        setInputData: (value: string) => void,
        id: string
    ) => {
        const { target: { value }} = event;
        inputData !== value && setInputData(value);
        setData({...data, [id]: value});
        event.target.value = '';
    };

    return (
        <div className={styles.selectEntityList}>
            <FormControl className={styles.selectEntityList__form}>
                <InputLabel className={styles.selectEntityList__inputText} id={`${entityName}select-label`}>
                    {`${entityName.toLowerCase()}`}
                </InputLabel>
                <Select
                    className={styles.selectEntityList__select}
                    id={`${entityName}` + '-input'}
                    value={selectedEntity}
                    onChange={(e) => handleChange(e, selectedEntity, setSelectedEntity, entityId)}
                    onClick={() => switchEntityForm(false)}
                    MenuProps={MenuProps}
                    label={`${entityName}` + 's'} // 'Types' or 'Brands'
                >
                    <MenuItem disabled>
                        <em>{`${entityName}` + 's'}</em>
                    </MenuItem>
                    {options[entityArrName]?.map((entity) => (
                        <MenuItem value={entity.id} key={entity.id}>{entity.name}</MenuItem>
                    ))}
                    {!isEntityFormOpen ? (
                        <div className={styles.selectEntityList__inputButtonWrapper_left}>
                            <button className={styles.selectEntityList__inputButton} onClick={closeFormWithNoPropagation}>
                                <Icon className={styles.selectEntityList__icon} name="Plus" size={12} />
                            </button>
                        </div>
                    ) : (
                        <CreateEntity
                            options={options}
                            setOptions={setOptions}
                            switchEntityForm={switchEntityForm}
                            entityName={entityName}
                        />
                    )}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectEntityList;
