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
            name: 'email'
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Name',
            type: 'text',
            name: 'name'
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Lastname',
            type: 'text',
            name: 'lastname'
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Direccion',
            type: 'text',
            name: 'direccion'
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
            title: 'Para continuar ',
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Cedula',
            type: 'text',
            name: 'cedula'
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Codigo dactilar',
            type: 'text',
            name: 'codigoDactilar'
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Codigo',
            type: 'text',
            name: 'codigo'
        }
    },


    {
        type: 'actions/RedirectButton',
        props: {
            label: 'Continuar',
            // href: '/auth/form/register-credentials',
            href: 'https://github.com/zendframework/zend-mime/blob/master/docs/book/message.md',
        }
    },

    {
        type: 'actions/RedirectButton',
        props: {
            label: 'Continuar',
            // href: '/auth/form/register-credentials',
            href: 'https://github.com/zendframework/zend-mime/blob/master/docs/book/message.md',
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
    // {
    //     type: 'containers/FormContainer',
    //     props: {
    //         inputs: [
    //             {
    //                 type: 'inputs/TextInput',
    //                 props: {
    //                     label: 'Cedula',
    //                     type: 'text',
    //                     name: 'cedula',
    //                 }
    //             },

    //             {
    //                 type: 'inputs/TextInput',
    //                 props: {
    //                     label: 'Pin de tarjeta de credito',
    //                     type: 'text',
    //                     name: 'pin'
    //                 }
    //             },
    //         ]
    //     }
    // },

    // This use a loading component
    {
        type: 'containers/LoadingContainer',
        props: {
            childrens: [
                {
                    type: 'containers/FormContainer',
                    props: {
                        inputs: [
                            {
                                type: 'inputs/TextInput',
                                props: {
                                    label: 'Cedula',
                                    type: 'text',
                                    name: 'cedula',
                                }
                            },

                            {
                                type: 'inputs/TextInput',
                                props: {
                                    label: 'Pin de tarjeta de credito',
                                    type: 'text',
                                    name: 'pin'
                                }
                            },
                        ]
                    }
                },
            ]
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
        type: 'containers/FormContainer',
        props: {
            inputs: <DynamicComponent[]>[
                {
                    type: 'inputs/TextInput',
                    props: {
                        label: 'Usuario',
                        type: 'text',
                        name: 'usuario'
                    }
                },

                {
                    type: 'inputs/TextInput',
                    props: {
                        label: 'Contrasena',
                        type: 'password',
                        name: 'password'
                    }
                },

                {
                    type: 'inputs/TextInput',
                    props: {
                        label: 'Repetir contrasena',
                        type: 'password',
                        name: 'repetPassword'
                    }
                },
            ]
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
            name: 'password'
        }
    },

    {
        type: 'inputs/TextInput',
        props: {
            label: 'Repetir contrasena',
            type: 'password',
            name: 'password'
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