import { FC, MouseEvent, Dispatch, SetStateAction, useState } from 'react';
import classnames from 'classnames';
import { useSnackbar } from 'notistack';

import { BasicItem } from '../../../../interfaces';
import { createBrand, createType } from '../../../http/deviceAPI';
import Icon from '../../Icon';

import styles from './styles.module.scss';

type OptionType = {
    [key: string]: BasicItem[],
};

interface CreateEntity {
    options: OptionType,
    setOptions: Dispatch<SetStateAction<OptionType>>,
    switchEntityForm: () => void,
    entityName: string,
}

interface newEntityData {
    name: string,
    img: File | any,
}
// 'Any' because at file-input we set 'newEntityData.img?.files?.[0].name' in 'value'
// To fix error with picking same file. And write it for TS everywhere is very difficult and unnecessary
// Because we don't need to check format of file in TS

const CreateEntity: FC<CreateEntity> = ({
     options,
     setOptions,
     switchEntityForm,
     entityName
}) => {
    const [newEntityData, setNewEntityData] = useState<newEntityData>({ name: '', img: '' });
    const { enqueueSnackbar } = useSnackbar();

    const showMessage = (message: string): void => {
        enqueueSnackbar(message);
    };

    const createNewEntity = async (e: MouseEvent, type: string) => {
        e.stopPropagation();
        if (!newEntityData.img || !newEntityData.name) {
           return showMessage(`Error, please check data!`);
        }

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
                <button className={styles.createEntity__button}
                        onClick={(e) => {
                            e.preventDefault();
                            setNewEntityData({...newEntityData, img: ''});
                        }}
                >
                    <Icon className={styles.selectEntityList__icon} name="TrashCan" size={12} />
                </button>
            );
        }
        else {
            return null;
        }
    };

    return (
        <div className={styles.createEntity}>
            <label className={styles.createEntity__label} onKeyDown={(e) => e.stopPropagation()}>
                <input
                    className={styles.createEntity__input}
                    value={newEntityData.name}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => setNewEntityData({...newEntityData, name: e.target.value})}
                    type="text"
                    placeholder={`${entityName}`}
                />
                <div className={styles.createEntity__btnWrapper}>
                    <button
                        className={styles.createEntity__button}
                        onClick={(e) => createNewEntity(e,`${entityName}`)}
                    >
                        <Icon className={styles.createEntity__icon} name="Plus" size={12} />
                    </button>
                </div>
            </label>
            <input
                className={styles.createEntity__displayNone}
                type="file"
                id="image-upload"
                value={newEntityData.img?.files?.[0].name || ''}
                onChange={(e) => setNewEntityData({...newEntityData, img: e.target.files?.[0]})}
                onClick={(e) => e.stopPropagation()}
            />
            <label htmlFor="image-upload" className={styles.createEntity__imgUpload} onClick={(e) => e.stopPropagation()}>
                <div className={classnames(styles.createEntity__button, {[styles.createEntity__button_active]: newEntityData.img})}>
                    <Icon className={styles.selectEntityList__icon} name="Image" size={12} />
                </div>
                {switchRemoveButton()}
            </label>
        </div>
    );
};

export default CreateEntity;
