import { FC } from 'react';

import { IconProps } from '../../../../../interfaces';

const Profile: FC<IconProps> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 19C3.5 16.5147 5.51472 14.5 8 14.5H16C18.4853 14.5 20.5 16.5147 20.5 19V21C20.5 21.2761 20.2761 21.5 20 21.5C19.7239 21.5 19.5 21.2761 19.5 21V19C19.5 17.067 17.933 15.5 16 15.5H8C6.067 15.5 4.5 17.067 4.5 19V21C4.5 21.2761 4.27614 21.5 4 21.5C3.72386 21.5 3.5 21.2761 3.5 21V19Z" fill="currentcolor"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7C16.5 9.48528 14.4853 11.5 12 11.5C9.51472 11.5 7.5 9.48528 7.5 7ZM12 3.5C10.067 3.5 8.5 5.067 8.5 7C8.5 8.933 10.067 10.5 12 10.5C13.933 10.5 15.5 8.933 15.5 7C15.5 5.067 13.933 3.5 12 3.5Z" fill="currentcolor"/>
    </svg>
);

export default Profile;
