import React from "react";
import { IconProps } from "../../../../../interfaces";

const Logout: React.FC<IconProps> = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M5 2.5C4.17157 2.5 3.5 3.17157 3.5 4V20C3.5 20.8284 4.17157 21.5 5 21.5H10C10.2761 21.5 10.5 21.7239 10.5 22C10.5 22.2761 10.2761 22.5 10 22.5H5C3.61929 22.5 2.5 21.3807 2.5 20V4C2.5 2.61929 3.61929 1.5 5 1.5H10C10.2761 1.5 10.5 1.72386 10.5 2C10.5 2.27614 10.2761 2.5 10 2.5H5Z" fill="currentcolor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.6464 7.64645C16.8417 7.45118 17.1583 7.45118 17.3536 7.64645L21.3536 11.6464C21.5488 11.8417 21.5488 12.1583 21.3536 12.3536L17.3536 16.3536C17.1583 16.5488 16.8417 16.5488 16.6464 16.3536C16.4512 16.1583 16.4512 15.8417 16.6464 15.6464L20.2929 12L16.6464 8.35355C16.4512 8.15829 16.4512 7.84171 16.6464 7.64645Z" fill="currentcolor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 12C8.5 11.7239 8.72386 11.5 9 11.5H21C21.2761 11.5 21.5 11.7239 21.5 12C21.5 12.2761 21.2761 12.5 21 12.5H9C8.72386 12.5 8.5 12.2761 8.5 12Z" fill="currentcolor"/>
        </svg>

    );
};

export default Logout;
