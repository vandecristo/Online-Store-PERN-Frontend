import { FC, FormEvent, useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';

import { BasicItem, PreparedDeviceData } from '../../../../interfaces';
import { createBrand, createType, fetchBrands, fetchTypes } from '../../../http/deviceAPI';
import Icon from '../../Icon';

import styles from './styles.module.scss';

interface CreateEntity {
    entityName: string,
    data: PreparedDeviceData,
    setData: (arg: PreparedDeviceData) => void,
    entityId: string,
    showMessage: (message: string) => void,
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

const CreateEntity: FC<CreateEntity> = ({
    entityName,
    data,
    setData,
    entityId,
    showMessage
}) => {
    const [options, setOptions] = useState<OptionType>({ types: [], brands: [] });
    const [newEntityData, setNewEntityData] = useState<string>('');
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
        setNewEntityData('');
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

    const createNewEntity = async (type: string) => {
        try {
            let res: BasicItem = { id: 0, name: 'default',  img: '' };
            switch (type) {
                case 'Brand':
                    res = await createBrand({ name: newEntityData });
                    setOptions({...options, brands: [...options.brands, res]});
                    break;
                case 'Type':
                    res = await createType({ name: newEntityData });
                    setOptions({...options, types: [...options.types, res]});
                    break;
                default:
                    break;
            }
            showMessage(`${entityName} ${newEntityData} was successfully created`);
        } catch (e) {
            showMessage(`Error, please check data`);
        }
        switchEntityForm();
    };

    return (
        <div className={styles.createDevice__entityFormWrapper}>
            <FormControl className={styles.createDevice__entityForm}>
                <InputLabel className={styles.createDevice__inputText} id={`${entityName}select-label`}>
                    {`${entityName.toLowerCase()}`}
                </InputLabel>
                <Select
                    className={styles.createDevice__select}
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
                        <div className={styles.createDevice__inputButtonWrapper_left}>
                            <button
                                className={styles.createDevice__inputButton}
                                onClick={closeFormWithNoPropagation}
                            >
                                <Icon className={styles.createDevice__icon} name="Plus" size={12}/>
                            </button>
                        </div>
                    ) : (
                        <label className={styles.createDevice__createEntity} onKeyDown={(e) => e.stopPropagation()}>
                            <input
                                className={styles.createDevice__input_inList}
                                value={newEntityData}
                                onClick={(e) => e.stopPropagation()}
                                onChange={(e) => setNewEntityData(e.target.value)}
                                type="text"
                                placeholder={`${entityName}`}/>

                            <div className={styles.createDevice__inputButtonWrapper}>
                                <button
                                    className={styles.createDevice__inputButton}
                                    onClick={() => createNewEntity(`${entityName}`)}
                                >
                                    <Icon className={styles.createDevice__icon} name="Plus" size={12}/>
                                </button>
                            </div>
                        </label>
                    )}
                </Select>
            </FormControl>
        </div>
    );
};

export default CreateEntity;
