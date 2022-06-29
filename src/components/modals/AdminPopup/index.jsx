import { Component } from "react";

import styles from "./styles.module.scss";

class AdminPopup extends Component {
    constructor(props) {
        super(props);
    };

    render() {
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
