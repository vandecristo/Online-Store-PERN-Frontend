import React from 'react';

import { IconProps } from '../../../../../interfaces';

const ArrowDown: React.FC<IconProps> = (props) => {
    return (
        <svg  width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" fill="currentcolor"/>
        </svg>
    );
};

export default ArrowDown;