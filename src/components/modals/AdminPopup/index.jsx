import { Component } from "react";
import CreateType from "../CreateType";
import CreateBrand from "../CreateBrand";
import CreateDevice from "../CreateDevice";

import styles from "./styles.module.scss";

class AdminPopup extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        console.log('########### 1111111:', 1111111);

        return (
            <div className={styles.popup}>
                <div className={styles.popup__wrapper}>
                    1111
                </div>
            </div>
        )
    };
}

export default AdminPopup;
