import { FC } from 'react';

import { IconProps } from '../../../../../interfaces';

const Image: FC<IconProps> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props }>
        <path fillRule="evenodd" clipRule="evenodd" d="M2.5 5C2.5 3.61929 3.61929 2.5 5 2.5H19C20.3807 2.5 21.5 3.61929 21.5 5V19C21.5 20.3807 20.3807 21.5 19 21.5H5C3.61929 21.5 2.5 20.3807 2.5 19V5ZM5 3.5C4.17157 3.5 3.5 4.17157 3.5 5V19C3.5 19.8284 4.17157 20.5 5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V5C20.5 4.17157 19.8284 3.5 19 3.5H5Z" fill="currentcolor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M6.5 8.5C6.5 7.39543 7.39543 6.5 8.5 6.5C9.60457 6.5 10.5 7.39543 10.5 8.5C10.5 9.60457 9.60457 10.5 8.5 10.5C7.39543 10.5 6.5 9.60457 6.5 8.5ZM8.5 7.5C7.94772 7.5 7.5 7.94772 7.5 8.5C7.5 9.05228 7.94772 9.5 8.5 9.5C9.05228 9.5 9.5 9.05228 9.5 8.5C9.5 7.94772 9.05228 7.5 8.5 7.5Z" fill="currentcolor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.6464 9.64645C15.8417 9.45118 16.1583 9.45118 16.3536 9.64645L21.3536 14.6464C21.5488 14.8417 21.5488 15.1583 21.3536 15.3536C21.1583 15.5488 20.8417 15.5488 20.6464 15.3536L16 10.7071L5.35355 21.3536C5.15829 21.5488 4.84171 21.5488 4.64645 21.3536C4.45118 21.1583 4.45118 20.8417 4.64645 20.6464L15.6464 9.64645Z" fill="currentcolor"/>
    </svg>
);

export default Image;
