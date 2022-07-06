import styles from './styles.module.scss';

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div>User name</div>
            <div>User email</div>
            <div>Email confirmed</div>
            <div>About user</div>
            <div>User Phone</div>
        </div>
    );
};

export default Profile;
