import styles from './styles.module.scss';

const Loading = () => {
    return (
        <div className={styles.loaderBackground}>
            <div className={styles.loader}>
                <div className={styles.loaderEllipsis}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loading;