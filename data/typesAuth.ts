import { AuthType } from '../src/interfaces/AuthType';

export const TYPES_AUTH: AuthType[] = [
    {
        label: 'Face recognition',
        type: 'recognition',
        url: '/auth/recognition',
        icon: 'https://w7.pngwing.com/pngs/673/521/png-transparent-facial-recognition-system-iris-recognition-computer-icons-face-recognition-technology-face-text-people.png',
    },
    {
        label: 'Bank red pin',
        type: 'pin',
        url: '/auth/pin',
        icon: 'https://static.fortytwo.com/assets/wp-content/uploads/2016/08/11082912/icons_2-02.png',
    },
];