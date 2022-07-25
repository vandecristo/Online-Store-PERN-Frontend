import { FC } from 'react';

import Admin from './svg/admin';
import ArrowDown from './svg/arrowDown';
import Basket from './svg/basket';
import Favorites from './svg/favorites';
import Image from './svg/image';
import Login from './svg/login';
import Logo from './svg/logo';
import Logout from './svg/logout';
import Loupe from './svg/loupe';
import Shop from './svg/shop';
import Plus from './svg/plus';
import Profile from './svg/profile';
import TrashCan from './svg/trashCan';
import { IconProps } from '../../../interfaces';

const components = {
    Admin,
    ArrowDown,
    Basket,
    Favorites,
    Image,
    Login,
    Logo,
    Logout,
    Loupe,
    Shop,
    Plus,
    Profile,
    TrashCan
};

const Icon: FC<IconProps> = (props: IconProps) => {
    const { size, name, className, onClick } = props;
    const Component = components[name as keyof typeof components];

    if (Component) {
        return (
            <Component
                {...{ name, className, onClick }}
                width={size}
                height={size}
            />
        );
    }

    return null;
};

Icon.defaultProps = {
    className: '',
    size: 20,
    onClick: () => null,
};

export default Icon;
