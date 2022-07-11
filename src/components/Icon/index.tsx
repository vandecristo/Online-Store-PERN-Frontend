import React from "react";

import Admin from './svg/admin';
import Basket from './svg/basket';
import Favorites from './svg/favorites';
import Image from './svg/image';
import Login from './svg/login';
import Logout from './svg/logout';
import Profile from './svg/profile';
import TrashCan from './svg/trashCan';
import { IconProps } from "../../../interfaces";

const components = {
    Admin,
    Basket,
    Favorites,
    Image,
    Login,
    Logout,
    Profile,
    TrashCan
};

const Icon: React.FC<IconProps> = (props: IconProps) => {
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
    onClick: () => null
};

export default Icon;
