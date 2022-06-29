import { Component } from 'react';

import CreateType from "../modals/CreateType";
import CreateBrand from "../modals/CreateBrand";
import CreateDevice from "../modals/CreateDevice";

import styles from './styles.module.scss';

class AdminBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            device: this.props.device,
            currentPopup: null,
            isPopupOpen: false
        };
        this.openPopup = this.openPopup.bind(this);
    };

    closePopupHandler = () => {
        this.setState({isPopupOpen: false});
    };

    openPopup = e => {
        const { value } = e.target;
        this.setState({isPopupOpen: true, currentPopup: value});
    };

    showItems(name){
        this.props.showAllItems(name);
        this.setState({isPopupOpen : false});
    };

    createPopup() {
        if (this.state.isPopupOpen) {
            switch (this.state.currentPopup) {
                case 'type':
                    return  <CreateType closePopupHandler={this.closePopupHandler}/>;
                case 'brand':
                    return  <CreateBrand closePopupHandler={this.closePopupHandler}/>;
                case 'device':
                    return  <CreateDevice closePopupHandler={this.closePopupHandler}/>;
                case 'showDevices':
                    return this.showItems('showDevices');
                case 'showBrands':
                    return   this.showItems('showBrands');
                case 'showTypes':
                    return  this.showItems('showTypes');
                case 'showUser':
                    return   <CreateType closePopupHandler={this.closePopupHandler}/>;
                case 'banUser':
                    return   <CreateBrand closePopupHandler={this.closePopupHandler}/>;
                case 'roleUser':
                    return <CreateDevice closePopupHandler={this.closePopupHandler}/>;
                default:
                    return ;
            }
        }
    };

    render() {
        return (
            <div className={styles.adminBar}>
                {this.createPopup()}
                <div className={styles.adminBar__wrapper}>
                    <span className={styles.adminBar__title}>Admin bar:</span>
                    <div className={styles.adminBar__btnGroup}>
                        <span>Create new items </span>
                        <div className={styles.admin__item} onClick={e => this.openPopup(e)}>
                            <button className={styles.admin__button} value="type">
                                Add Type
                            </button>
                            <button className={styles.admin__button} value="brand">
                                Add Brand
                            </button>
                            <button className={styles.admin__button} value="device">
                                Add Device
                            </button>
                        </div>
                    </div>
                    <div className={styles.adminBar__btnGroup}>
                        <span>Manage items </span>
                        <div className={styles.admin__item} onClick={e => this.openPopup(e)}>
                            <button className={styles.admin__button} value="showDevices">
                                Devices
                            </button>
                            <button className={styles.admin__button} value="showBrands">
                                Brands
                            </button>
                            <button className={styles.admin__button} value="showTypes">
                                Types
                            </button>
                        </div>
                    </div>
                    <div className={styles.adminBar__btnGroup}>
                        <span>Users </span>
                        <div className={styles.admin__item} onClick={e => this.openPopup(e)}>
                            <button className={styles.admin__button} value="showUser">
                                Show All
                            </button>
                            <button className={styles.admin__button} value="banUser">
                                Ban List
                            </button>
                            <button className={styles.admin__button} value="roleUser">
                                Add Role
                            </button>
                            <button className={styles.admin__button} value="editUser">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                    <div className={styles.adminBar__btnGroup}>
                        <span>Events </span>
                        <div className={styles.admin__item} onClick={e => this.openPopup(e)}>
                            <button className={styles.admin__button} value="showEvents">
                                Show
                            </button>
                            <button className={styles.admin__button} value="EditEvents">
                                Edit
                            </button>
                            <button className={styles.admin__button} value="deleteEvents">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default AdminBar;
