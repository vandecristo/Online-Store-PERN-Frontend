import { Component } from 'react';

import { createType } from '../../../http/deviceAPI';

import styles from './styles.module.scss';

class CreateType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {name: ''},
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        createType(this.state.data).then(() => this.props.closePopupHandler());
    };

    render() {
        return (
            <div className={styles.popup}>
                <div className={styles.popup__wrapper}>
                    <div className={styles.createType}>
                        <form id="newTypeData" className={styles.createType__form} onSubmit={e => this.handleSubmit(e)}>
                            <div className={styles.createType__title}>
                                <span>Create Type:</span>
                            </div>
                            <div className={styles.createType__item}>
                                <input
                                    className={styles.createType__input}
                                    type="text"
                                    name="name"
                                    placeholder='name'
                                    value={this.state.data.name}
                                    onChange={e => this.setState({data: {name: e.target.value}})}
                                />
                            </div>
                        </form>
                        <div className={styles.createType__btnWrapper}>
                            <button className={styles.createType__btn}
                                    onClick={() => this.props.closePopupHandler()}>
                                <span>Close</span>
                            </button>
                            <input
                                form="newTypeData"
                                className={styles.createType__btn}
                                type="submit"
                                value={'Add Type'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default CreateType;
