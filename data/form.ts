import { DynamicComponent } from "../src/interfaces";

export const PAGE_DATA: DynamicComponent[] = [
    {
        type: 'informations/Title',
        props: {
            title: '404'
        }
    },
    {
        type: 'informations/WarningMessage',
        props: {
            message: 'No data avaliable for the generation page'
        }
    },

    {
        type: 'actions/RedirectButton',
        props: {
            label: 'Regresar',
            href: '/auth/types',
        }
    },
];

export const PAGE_NO_FORM: DynamicComponent[] = [
    {
        type: 'informations/Title',
        props: {
            title: '404'
        }
    },
    {
        type: 'informations/WarningMessage',
        props: {
            message: 'El formulario buscado no existe'
        }
    },

    {
        type: 'actions/RedirectButton',
        props: {
            label: 'Volver a seleccionar metodo de autentificacion',
            href: '/auth/types',
        }
    },
];

export const FORM_PAGE_DATA: DynamicComponent[] = [
    {
        type: 'informations/Title',
        props: {
            title: 'Basic information for generate your page'
        }
    },


    {
        type: 'inputs/TextInput',
        props: {
            label: 'Email',
            type: 'text',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Name',
            type: 'text',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Lastname',
            type: 'text',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Direccion',
            type: 'text',
        }
    },

    {
        type: 'informations/WarningMessage',
        props: {
            message: 'Please fill all inputs using trust information, for contact you the correct form.'
        }
    },
];

export const RECOGNITION_FORM: DynamicComponent[] = [
    {
        type: 'ui/ImageTop',
        props: {
            img: 'https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png',
            height: '170px',
            description: 'Company icon',
        }
    },
    {
        type: 'informations/Title',
        props: {
            title: 'Para continuar el proceso llene los siguientes datos',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Cedula',
            type: 'text',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Codigo dactilar',
            type: 'text',
        }
    },

    {
        type: 'actions/RedirectButton',
        props: {
            label: 'Continuar',
            href: '/auth/form/register-credentials',
        }
    },
];


export const PIN_FORM: DynamicComponent[] = [
    {
        type: 'ui/ImageTop',
        props: {
            img: 'https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png',
            height: '170px',
            description: 'Company icon',
        }
    },
    {
        type: 'informations/Title',
        props: {
            title: 'Para continuar el proceso llene los siguientes datos',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Cedula',
            type: 'text',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Pin de tarjeta de credito',
            type: 'text',
        }
    },

    {
        type: 'actions/RedirectButton',
        props: {
            label: 'Continuar',
            href: '/auth/form/change-password',
        }
    },

];


export const REGISTER_CREDENTIALS: DynamicComponent[] = [
    {
        type: 'informations/Title',
        props: {
            title: 'Registrar credenciales',
        }
    },
    {
        type: 'ui/ImageTop',
        props: {
            img: 'https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png',
            height: '170px',
            description: 'Company icon',
        }
    },
    {
        type: 'inputs/TextInput',
        props: {
            label: 'Usuario',
            type: 'text',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Contrasena',
            type: 'password',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Repetir contrasena',
            type: 'password',
        }
    },

    {
        type: 'actions/RedirectButton',
        props: {
            label: 'Continuar',
            href: '/auth/token',
        }
    },
];


export const CHANGE_PASSWORD: DynamicComponent[] = [
    {
        type: 'informations/Title',
        props: {
            title: 'Recuperar contrasena',
        }
    },
    {
        type: 'ui/ImageTop',
        props: {
            img: 'https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png',
            height: '170px',
            description: 'Company icon',
        }
    },
    {
        type: 'inputs/TextInput',
        props: {
            label: 'Contrasena',
            type: 'password',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Repetir contrasena',
            type: 'password',
        }
    },

    {
        type: 'actions/RedirectButton',
        props: {
            label: 'Continuar',
            href: '/auth/token',
        }
    },
];