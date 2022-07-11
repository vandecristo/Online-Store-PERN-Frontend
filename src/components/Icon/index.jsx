import Admin from './svg/admin';
import Favorites from './svg/favorites';
import Login from './svg/login';
import Logout from './svg/logout';

const components = {
    Admin,
    Favorites,
    Login,
    Logout
};

const Icon = (props) => {
    const { size, name, className, onClick } = props;
    const Component = components[name];

    if (Component) {
        return (
            <Component
                {...{ className, onClick }}
                width={size}
                height={size}
            />
        );
    }
    return null;
};

Icon.defaultProps = {
    className: '',
    size: 20
};

export default Icon;
