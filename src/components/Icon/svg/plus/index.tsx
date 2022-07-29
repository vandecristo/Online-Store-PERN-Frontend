import { FC } from 'react';

import { IconProps } from '../../../../../interfaces';

const Plus: FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" { ...props }>
        <path fillRule="evenodd" clipRule="evenodd" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" fill="currentcolor"/>
    </svg>
);

export default Plus;
