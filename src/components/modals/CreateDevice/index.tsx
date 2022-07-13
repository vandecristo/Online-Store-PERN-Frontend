import React, { useEffect, useState } from 'react';

import { BasicItem, PreparedDeviceData } from '../../../../interfaces';
import { createBrand, createDevice, createType, fetchBrands, fetchTypes } from '../../../http/deviceAPI';
import Icon from '../../Icon';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSnackbar } from 'notistack';

import styles from './styles.module.scss';
import CreateBrand from '../CreateBrand';

interface CreateBrandProps {
    togglePopup: () => void;
}

type OptionType = {
    types: Array<BasicItem>,
    brands: Array<BasicItem>
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 350,
        },
    },
};

const CreateDevice: React.FC<CreateBrandProps> = ({ togglePopup }) => {
    const initialState: PreparedDeviceData = {
        name: '',
        price: '',
        typeId: '',
        brandId: '',
        img: '',
        imageName: ''
    };
    const [data, setData] = useState<PreparedDeviceData>(initialState);
    const [options, setOptions] = useState<OptionType>({ types: [], brands: [] });
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const { enqueueSnackbar } = useSnackbar();

    const showMessage = (message: string) :void => {
        enqueueSnackbar(message);
    };

    const showSelectedImage = () => {
        return (
            <div className={styles.createDevice__pictureName}>
                {data.img ? (
                    <>
                        <Icon className={styles.createDevice__icon} name='Image' size={20}/>
                        <span>{data.imageName}</span>
                        <div className={styles.createDevice__removeItem} onClick={() => setData({...data, img: ''})}>
                            <Icon className={styles.createDevice__icon} name='TrashCan' size={20}/>
                        </div>
                    </>
                ) : (
                    <div>
                        <span>File is not chosen</span>
                    </div>
                )}
            </div>
        )
    };

    const setImage = (e: React.FormEvent) => {
        const target = e.target as HTMLInputElement
        setData({
            ...data,
            img: target.files?.[0] || 'no picture',
            imageName: target.files?.[0].name.slice(0, 15) + '... '
        });
        target.value = '';
    };

    const fetchOptions = async () => {
        setOptions({ types: await fetchTypes(), brands: await fetchBrands() });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('typeId', data.typeId);
        formData.append('brandId', data.brandId);
        formData.append('img', data.img);
        createDevice(formData)
            .then(() => showMessage('Device was successfully created.'))
            .catch(() => showMessage(`Device wasn't been created, check data.`));
        handleCloseForm();
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

    const handleCloseForm = () => {
        setData(initialState);
        togglePopup();
    };

    const [isEntityFormOpen, toggleEntityForm] = useState<boolean>(false);
    const [newEntityData, setNewEntityData] = useState('');
    
    const switchEntityForm = (param = false) => {
        toggleEntityForm(param);
        setNewEntityData('');
    };
    
    const createNewEntity = async (type: string) => {
        let res
        switch (type) {
            case 'Brand':
                res = createBrand({name: newEntityData});
                break;
            case 'Type':
                res = createType({name: newEntityData});
                break;
            default:
                break;
        }
        switchEntityForm();
        if (res) {
            showMessage(`${type} ${newEntityData} was successfully created`);
        } else {
            showMessage(`Error, please check data`);
        }
    };

    useEffect(() => {
        fetchOptions();
    }, [createNewEntity]);

    return (
        <div className={styles.popup}>
            <div className={styles.popup__wrapper}>
                <div className={styles.createDevice}>
                    <form className={styles.createDevice__form} id="newDeviceData"
                          onSubmit={(e: React.FormEvent) => handleSubmit(e)}>
                        <div className={styles.createDevice__title}>
                            <span>Create Device:</span>
                        </div>
                        <div className={styles.createDevice__item}>
                            <input
                                className={styles.createDevice__input}
                                type="text"
                                placeholder='name'
                                onChange={(e) => setData({...data, name: e.target.value})}
                            />
                            <input
                                className={styles.createDevice__input}
                                type="text"
                                placeholder='price'
                                onChange={(e) => setData({...data, price: e.target.value})}
                            />
                        </div>
                        <div className={styles.createDevice__item}>
                            <Select
                                className={styles.test}
                                id="type-input"
                                value={selectedType}
                                onChange={(e) => handleChange(e, selectedType, setSelectedType,'typeId')}
                                onClick={() => switchEntityForm(false)}
                                MenuProps={MenuProps}
                                label="Types"
                            >
                                <MenuItem disabled value="">
                                    <em>Types</em>
                                </MenuItem>
                                {options.types?.map(type =>
                                    <MenuItem value={type.id} key={type.id}>{type.name}</MenuItem>
                                )}
                                {!isEntityFormOpen ? (
                                    <MenuItem onClick={(e) => {
                                        e.stopPropagation()
                                        switchEntityForm(true)
                                        }}
                                    >
                                        +Add
                                    </MenuItem>
                                ) : (
                                    <label
                                        className={styles.createDevice__createEntity}
                                        onKeyDown={(e) => e.stopPropagation()}
                                    >
                                        <input
                                            className={styles.createDevice__input}
                                            value={newEntityData}
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={(e) => setNewEntityData(e.target.value)}
                                            type="text"
                                            placeholder='Type'/>
                                        <button
                                            className={styles.createDevice__btn_mini}
                                            onClick={() => createNewEntity('Type')}
                                        >
                                            Add
                                        </button>
                                    </label>
                                )}
                            </Select>
                            <Select
                                className={styles.test}
                                id="brand-input"
                                value={selectedBrand}
                                onChange={(e) => handleChange(e, selectedBrand, setSelectedBrand, 'brandId')}
                                onClick={() => switchEntityForm(false)}
                                MenuProps={MenuProps}
                                label="Brands"
                            >
                                <MenuItem disabled value="">
                                    <em>Brands</em>
                                </MenuItem>
                                {options.brands?.map(brand =>
                                    <MenuItem value={brand.id} key={brand.id}>{brand.name}</MenuItem>
                                )}
                                {!isEntityFormOpen ? (
                                    <MenuItem
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            switchEntityForm(true)
                                        }}
                                    >
                                        +Add
                                    </MenuItem>
                                ) : (
                                    <label
                                        className={styles.createDevice__createEntity}
                                        onKeyDown={(e) => e.stopPropagation()}
                                    >
                                        <input 
                                            className={styles.createDevice__input} 
                                            value={newEntityData}
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={(e) => setNewEntityData(e.target.value)}
                                            type="text"
                                            placeholder='Brand'/>
                                        <button
                                            className={styles.createDevice__btn_mini}
                                            onClick={() => createNewEntity('Brand')}
                                        >
                                            Add
                                        </button>
                                    </label>
                                )}





                            </Select>
                            <div className={styles.createDevice__inputWrapper}>
                                <input
                                    className={styles.createDevice__displayNone}
                                    type="file"
                                    id="file-upload"
                                    onChange={(e) => setImage(e)}
                                />
                                <label htmlFor="file-upload" className={styles.createDevice__btn_input}>
                                    <span>+Image</span>
                                </label>
                                {showSelectedImage()}
                            </div>
                        </div>
                    </form>
                    <div className={styles.createDevice__btnWrapper}>
                        <button className={styles.createDevice__btn} onClick={() => handleCloseForm()}>
                            <span>Close</span>
                        </button>
                        <input className={styles.createDevice__btn} form="newDeviceData" type="submit" value='Add'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateDevice;
