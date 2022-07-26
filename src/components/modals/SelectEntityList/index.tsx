import { FC, FormEvent, useEffect, useState } from 'react';
import classnames from 'classnames';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel } from '@mui/material';

import { BasicItem, PreparedDeviceData } from '../../../../interfaces';
import { createBrand, createType, fetchBrands, fetchTypes } from '../../../http/deviceAPI';
import Icon from '../../Icon';

import styles from './styles.module.scss';

interface SelectEntityList {
    entityName: string,
    data: PreparedDeviceData,
    setData: (arg: PreparedDeviceData) => void,
    entityId: string,
    showMessage: (message: string) => void,
}

type OptionType = {
    [key: string]: BasicItem[],
};

interface newEntityData {
    name: string,
    img: File | any,
}
// 'Any' because at file-input we set 'newEntityData.img?.files?.[0].name' in 'value'
// To fix error with picking same file. And write it for TS everywhere is very difficult and unnecessary
// Because we don't need to check format of file in TS

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
    entityId,
    showMessage,
}) => {
    const [options, setOptions] = useState<OptionType>({ types: [], brands: [] });
    const [newEntityData, setNewEntityData] = useState<newEntityData>({ name: '', img: '' });
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
        setNewEntityData({ name: '', img: '' });
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
        const formData = new FormData();
        formData.append('name', newEntityData.name);
        formData.append('img', newEntityData.img);
        try {
            let res: BasicItem = { id: 0, name: 'default', img: '' };
            switch (type) {
                case 'Brand':
                    res = await createBrand(formData);
                    setOptions({...options, brands: [...options.brands, res]});
                    break;
                case 'Type':
                    res = await createType(formData);
                    setOptions({...options, types: [...options.types, res]});
                    break;
                default:
                    break;
            }
            showMessage(`${type} ${newEntityData.name} was successfully created`);
        } catch (e) {
            showMessage(`Error, please check data`);
        }
        switchEntityForm();
    };

    const switchRemoveButton = () => {
        if (newEntityData.img) {
            return (
                <button className={styles.selectEntityList__inputButton}
                   onClick={(e) => {
                       e.preventDefault();
                       setNewEntityData({ name: '', img: '' });
                   }}
                >
                   <Icon className={styles.selectEntityList__icon} name="TrashCan" size={12}/>
                </button>
            );
        }
        else {
            return null;
        }
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
                            <button
                                className={styles.selectEntityList__inputButton}
                                onClick={closeFormWithNoPropagation}
                            >
                                <Icon className={styles.selectEntityList__icon} name="Plus" size={12}/>
                            </button>
                        </div>
                    ) : (
                        <div className={styles.selectEntityList__inputButtonWrapper_left}>
                            <label className={styles.selectEntityList__createEntity} onKeyDown={(e) => e.stopPropagation()}>
                                <input
                                    className={styles.selectEntityList__input_inList}
                                    value={newEntityData.name}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={(e) => setNewEntityData({...newEntityData, name: e.target.value})}
                                    type="text"
                                    placeholder={`${entityName}`}
                                />
                                <div className={styles.selectEntityList__inputButtonWrapper}>
                                    <button
                                        className={styles.selectEntityList__inputButton}
                                        onClick={() => newEntityData.img && newEntityData.name && createNewEntity(`${entityName}`)}
                                    >
                                        <Icon className={styles.selectEntityList__icon} name="Plus" size={12}/>
                                    </button>
                                </div>
                            </label>
                            <label htmlFor="image-upload" className={styles.selectEntityList__btnSection} onClick={(e) => e.stopPropagation()}>
                                <input
                                    className={styles.selectEntityList__displayNone}
                                    type="file"
                                    id="image-upload"
                                    value={newEntityData.img?.files?.[0].name || ''}
                                    onChange={(e) => setNewEntityData({...newEntityData, img: e.target.files?.[0]})}
                                />
                                <div className={classnames(styles.selectEntityList__inputButton, {[styles.selectEntityList__inputButton_active]: newEntityData.img})}>
                                    <Icon className={styles.selectEntityList__icon} name="Image" size={12}/>
                                </div>
                                {switchRemoveButton()}
                            </label>
                        </div>
                    )}
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectEntityList;
