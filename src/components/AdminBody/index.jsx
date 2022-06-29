
import styles from "./styles.module.scss";

const AdminBody = ({items}) =>{

    const openEditPopup = item => {
        console.log('########### edit:', item);

    };
    const deleteConfirmation = id => {
      console.log('########### ?:', id);

    };

    return (
        <div className={styles.adminBody}>
            { items.length
            ?
                items.map(item =>
                (
                <div key={item.id} className={styles.adminBody__item}>
                    <div className={styles.adminBody__block}>name: {item.name}</div>
                    <div className={styles.adminBody__block}>id: {item.id}</div>
                    <div className={styles.adminBody__btnWrapper}>
                        <button className={styles.adminBody__btn} onClick={() => openEditPopup(item)}>Edit</button>
                        <button className={styles.adminBody__btn} onClick={ () => deleteConfirmation(item.id)}>
                            <span>Delete</span>
                        </button>
                    </div>

                </div>
                ))
            :
                null
            }
        </div>
    )
};

export default AdminBody;
