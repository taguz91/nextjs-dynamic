import { uid } from "uid";
import { DynamicComponent } from "../src/interfaces";
import { PIN_FIELDS } from './dynamicForm';

export const PAGE_DATA: DynamicComponent[] = [
    {
        uid: uid(),
        type: 'informations/Title',
        props: {
            title: '404'
        }
    },
    {
        uid: uid(),
        type: 'informations/WarningMessage',
        props: {
            message: 'No data avaliable for the generation page'
        }
    },

    {
        uid: uid(),
        type: 'actions/RedirectButton',
        props: {
            label: 'Regresar',
            href: '/auth/types',
        }
    },
];

export const PAGE_NO_FORM: DynamicComponent[] = [
    {
        uid: uid(),
        type: 'informations/Title',
        props: {
            title: '404'
        }
    },
    {
        uid: uid(),
        type: 'informations/WarningMessage',
        props: {
            message: 'El formulario buscado no existe'
        }
    },

    {
        uid: uid(),
        type: 'actions/RedirectButton',
        props: {
            label: 'Volver a seleccionar metodo de autentificacion',
            href: '/auth/types',
        }
    },
];

export const FORM_PAGE_DATA: DynamicComponent[] = [
    {
        uid: uid(),
        type: 'informations/Title',
        props: {
            title: 'Basic information for generate your page'
        }
    },

    {
        uid: uid(),
        type: 'inputs/TextInput',
        props: {
            label: 'Email',
            type: 'text',
            name: 'email'
        }
    },

    {
        uid: uid(),
        type: 'inputs/TextInput',
        props: {
            label: 'Name',
            type: 'text',
            name: 'name'
        }
    },

    {
        uid: uid(),
        type: 'inputs/TextInput',
        props: {
            label: 'Lastname',
            type: 'text',
            name: 'lastname'
        }
    },

    {
        uid: uid(),
        type: 'inputs/TextInput',
        props: {
            label: 'Direccion',
            type: 'text',
            name: 'direccion'
        }
    },

    {
        uid: uid(),
        type: 'informations/WarningMessage',
        props: {
            message: 'Please fill all inputs using trust information, for contact you the correct form.'
        }
    },
];

export const RECOGNITION_FORM: DynamicComponent[] = [
    {
        uid: uid(),
        type: 'ui/ImageTop',
        props: {
            img: 'https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png',
            height: '170px',
            description: 'Company icon',
        }
    },
    {
        uid: uid(),
        type: 'informations/Title',
        props: {
            title: 'Para continuar ',
        }
    },

    {
        uid: uid(),
        type: 'inputs/TextInput',
        props: {
            label: 'Cedula',
            type: 'text',
            name: 'cedula'
        }
    },

    {
        uid: uid(),
        type: 'inputs/TextInput',
        props: {
            label: 'Codigo dactilar',
            type: 'text',
            name: 'codigoDactilar'
        }
    },

    {
        uid: uid(),
        type: 'inputs/TextInput',
        props: {
            label: 'Codigo',
            type: 'text',
            name: 'codigo'
        }
    },


    {
        uid: uid(),
        type: 'actions/RedirectButton',
        props: {
            label: 'Continuar',
            // href: '/auth/form/register-credentials',
            href: 'https://github.com/zendframework/zend-mime/blob/master/docs/book/message.md',
        }
    },

    {
        uid: uid(),
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
        uid: uid(),
        type: 'ui/ImageTop',
        props: {
            img: 'https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png',
            height: '170px',
            description: 'Company icon',
        }
    },
    {
        uid: uid(),
        type: 'informations/Title',
        props: {
            title: 'Para continuar el proceso llene los siguientes datos',
        }
    },
    {
        uid: uid(),
        type: 'containers/FormContainer',
        props: {
            validations: [
                {
                    id: 'cedula',
                    validationType: 'string',
                    validations: [
                        {
                            type: 'required',
                            params: ['The cedula is required']
                        },
                        {
                            type: 'uppercase',
                            params: ['Auto upper']
                        }
                    ]
                },
                {
                    id: 'pin',
                    validationType: 'string',
                    validations: [
                        {
                            type: 'min',
                            params: [5, 'Current min: 5 characters']
                        },
                        {
                            type: 'max',
                            params: [10, 'Current max characters is 10']
                        },
                    ]
                },
                {
                    id: 'card',
                    validationType: 'string',
                    validations: [
                        {
                            type: 'creditCardType',
                            params: ['No es una tarjeta de credito valida']
                        },
                        {
                            type: 'creditCardLength',
                            params: ['Las tarjetas solo tienen 16 numeros']
                        },
                    ]
                },
            ],
            inputs: [
                {
                    uid: uid(),
                    type: 'containers/form/GridForm',
                    props: {
                        nRows: 2,
                        inputs: [
                            {
                                uid: uid(),
                                type: 'inputs/TextInput',
                                props: {
                                    label: 'Cedula',
                                    type: 'text',
                                    name: 'cedula'
                                }
                            },

                            {
                                uid: uid(),
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

                {
                    uid: uid(),
                    type: 'inputs/TextInput',
                    props: {
                        label: 'Tarjeta de debito',
                        type: 'text',
                        name: 'card'
                    }
                },

                {
                    uid: uid(),
                    type: 'inputs/TextInput',
                    props: {
                        label: 'Card name',
                        type: 'text',
                        name: 'cardName'
                    }
                },

                {
                    uid: uid(),
                    type: 'inputs/SubmitInput',
                    props: null
                }
            ]
        }
    },
];


export const REGISTER_CREDENTIALS: DynamicComponent[] = [
    {
        uid: uid(),
        type: 'informations/Title',
        props: {
            title: 'Registrar credenciales',
        }
    },
    {
        uid: uid(),
        type: 'ui/ImageTop',
        props: {
            img: 'https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png',
            height: '170px',
            description: 'Company icon',
        }
    },
    {
        uid: uid(),
        type: 'containers/FormContainer',
        props: {
            inputs: <DynamicComponent[]>[
                {
                    uid: uid(),
                    type: 'inputs/TextInput',
                    props: {
                        label: 'Usuario',
                        type: 'text',
                        name: 'usuario'
                    }
                },

                {
                    uid: uid(),
                    type: 'inputs/TextInput',
                    props: {
                        label: 'Contrasena',
                        type: 'password',
                        name: 'password'
                    }
                },

                {
                    uid: uid(),
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
        uid: uid(),
        type: 'actions/RedirectButton',
        props: {
            label: 'Continuar',
            href: '/auth/token',
        }
    },
];


export const CHANGE_PASSWORD: DynamicComponent[] = [
    {
        uid: uid(),
        type: 'informations/Title',
        props: {
            title: 'Recuperar contrasena',
        }
    },
    {
        uid: uid(),
        type: 'ui/ImageTop',
        props: {
            img: 'https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png',
            height: '170px',
            description: 'Company icon',
        }
    },
    {
        uid: uid(),
        type: 'inputs/TextInput',
        props: {
            label: 'Contrasena',
            type: 'password',
            name: 'password'
        }
    },

    {
        uid: uid(),
        type: 'inputs/TextInput',
        props: {
            label: 'Repetir contrasena',
            type: 'password',
            name: 'password'
        }
    },

    {
        uid: uid(),
        type: 'actions/RedirectButton',
        props: {
            label: 'Continuar',
            href: '/auth/token',
        }
    },
];


export const PIN_FORM_ATC: DynamicComponent[] = [
    {
        uid: uid(),
        type: 'ui/ImageTop',
        props: {
            img: 'https://download.logo.wine/logo/The_Boring_Company/The_Boring_Company-Logo.wine.png',
            height: '170px',
            description: 'Company icon',
        }
    },
    {
        uid: uid(),
        type: 'informations/Title',
        props: {
            title: 'Para continuar el proceso llene los siguientes datos',
        }
    },
    {
        uid: uid(),
        type: 'containers/FormDynamicContainer',
        props: {
            inputs: PIN_FIELDS,
            dynamic: {
                uid: uid(),
                type: 'inputs/SubmitInput',
                props: null
            }
        }
    },

    // {
    //      uid: uid(),
    //     type: 'actions/RedirectButton',
    //     props: {
    //         label: 'Continuar',
    //         href: '/auth/form/change-password',
    //     }
    // },

];