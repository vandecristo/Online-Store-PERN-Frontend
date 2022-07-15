import { FC } from 'react';

import { IconProps } from '../../../../../interfaces';

const TrashCan: FC<IconProps> = (props) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.5 6C2.5 5.72386 2.72386 5.5 3 5.5H21C21.2761 5.5 21.5 5.72386 21.5 6C21.5 6.27614 21.2761 6.5 21 6.5H3C2.72386 6.5 2.5 6.27614 2.5 6Z" fill="currentcolor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10 2.5C9.17157 2.5 8.5 3.17157 8.5 4V6C8.5 6.27614 8.27614 6.5 8 6.5C7.72386 6.5 7.5 6.27614 7.5 6V4C7.5 2.61929 8.61929 1.5 10 1.5H14C15.3807 1.5 16.5 2.61929 16.5 4V6C16.5 6.27614 16.2761 6.5 16 6.5C15.7239 6.5 15.5 6.27614 15.5 6V4C15.5 3.17157 14.8284 2.5 14 2.5H10ZM5 5.5C5.27614 5.5 5.5 5.72386 5.5 6V20C5.5 20.8284 6.17157 21.5 7 21.5H17C17.8284 21.5 18.5 20.8284 18.5 20V6C18.5 5.72386 18.7239 5.5 19 5.5C19.2761 5.5 19.5 5.72386 19.5 6V20C19.5 21.3807 18.3807 22.5 17 22.5H7C5.61929 22.5 4.5 21.3807 4.5 20V6C4.5 5.72386 4.72386 5.5 5 5.5Z" fill="currentcolor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10 10.5C10.2761 10.5 10.5 10.7239 10.5 11V17C10.5 17.2761 10.2761 17.5 10 17.5C9.72386 17.5 9.5 17.2761 9.5 17V11C9.5 10.7239 9.72386 10.5 10 10.5Z" fill="currentcolor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M14 10.5C14.2761 10.5 14.5 10.7239 14.5 11V17C14.5 17.2761 14.2761 17.5 14 17.5C13.7239 17.5 13.5 17.2761 13.5 17V11C13.5 10.7239 13.7239 10.5 14 10.5Z" fill="currentcolor"/>
        </svg>
    );
};

export default TrashCan;
