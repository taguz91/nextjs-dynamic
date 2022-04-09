import { DynamicComponent } from "../src/interfaces";
import { uid } from 'uid';


export const USER_REGISTER_FORM: DynamicComponent[] = [
    {
        uid: uid(),
        type: 'informations/Text',
        props: {
            text: 'Para poder enviarte tu nombre de usuario por favor confirma la siguiente información:',
            color: 'text-emerald-500',
            weight: 'font-extrabold',
        }
    },

    {
        uid: uid(),
        type: 'containers/form/FormEnrolamiento',
        props: {
            validations: [
                {
                    id: 'tipoIdentificacion',
                    validationType: 'string',
                    validations: [
                        {
                            type: 'required',
                            params: ['The cedula is required']
                        },
                    ]
                },
                {
                    id: 'cedula',
                    validationType: 'string',
                    validations: [
                        {
                            type: 'required',
                            params: ['The cedula is required']
                        },
                        {
                            type: 'min',
                            params: [8, 'Current min: 5 characters']
                        },
                        {
                            type: 'max',
                            params: [10, 'Current max characters is 10']
                        },
                    ]
                },
                {
                    id: 'fechaNacimiento',
                    validationType: 'string',
                    validations: [
                        {
                            type: 'required',
                            params: ['The fecha nacimiento is required']
                        },
                    ]
                },
                {
                    id: 'cuenta',
                    validationType: 'string',
                    validations: [
                        {
                            type: 'required',
                            params: ['Cuenta number is required']
                        },
                    ]
                },
            ],
            inputs: [

                {
                    uid: uid(),
                    type: 'containers/form/ErrorAlert',
                    props: {
                        attributes: [
                            'cedula',
                            'fechaNacimiento',
                            'cuenta'
                        ]
                    }
                },

                {
                    uid: uid(),
                    type: 'inputs/SelectInput',
                    props: {
                        label: 'Tipo de identificacion',
                        name: 'tipoIdentificacion',
                        options: [
                            {
                                label: 'CEDULA',
                                value: 'cedula'
                            },
                            {
                                label: 'RUC',
                                value: 'ruc'
                            },
                            {
                                label: 'Pasaporte',
                                value: 'pasaporte'
                            }
                        ]
                    }
                },

                {
                    uid: uid(),
                    type: 'inputs/IconTextInput',
                    props: {
                        type: 'text',
                        name: 'cedula',
                        showErrors: false,
                        placeholder: 'Cedula/ RUC / Pasaporte',
                        icon: {
                            icon: ['fa', 'user'],
                            color: 'black',
                            filled: true,
                        }
                    }
                },

                {
                    uid: uid(),
                    type: 'inputs/IconTextInput',
                    props: {
                        type: 'date',
                        name: 'fechaNacimiento',
                        showErrors: false,
                        placeholder: 'Fecha de nacimiento Ej: 1990-11-24',
                        icon: {
                            icon: ['fa', 'calendar-days'],
                            color: 'black',
                            filled: true,
                        }
                    }
                },

                {
                    uid: uid(),
                    type: 'inputs/IconTextInput',
                    props: {
                        type: 'text',
                        name: 'cuenta',
                        placeholder: 'Numero de cuenta de ahorros',
                        icon: {
                            icon: ['fa', 'hashtag'],
                            color: 'black',
                            filled: true,
                        }
                    }
                },

                {
                    uid: uid(),
                    type: 'actions/FullButton',
                    props: {
                        label: 'Continuar',
                        icon: {
                            icon: ['fa', 'right-long'],
                            color: 'white'
                        }
                    }
                },

                {
                    uid: uid(),
                    type: 'actions/BackIcon',
                    props: {
                        label: 'Atras'
                    }
                }
            ]
        }
    },
];



export const USER_SELECT_AUTH: DynamicComponent[] = [
    {
        uid: uid(),
        type: 'informations/Text',
        props: {
            text: 'Seleccione el tipo de autentificacion que quiere utilizar:',
            color: 'text-blue-500',
            weight: 'font-medium',
        }
    },

    {
        uid: uid(),
        type: 'containers/form/FormEnrolamiento',
        props: {
            validations: [
                {
                    id: 'type',
                    validationType: 'string',
                    validations: [
                        {
                            type: 'required',
                            params: ['Seleccione un tipo de auth']
                        },
                        {
                            type: 'oneOf',
                            params: [
                                [
                                    'pin',
                                    'faceRecognition',
                                ],
                                'Seleccione un tipo de auth'
                            ]
                        },
                        {
                            type: 'nullable',
                            params: []
                        },
                    ]
                },

            ],
            inputs: [

                {
                    uid: uid(),
                    type: 'inputs/enrolamiento/TypeAuth',
                    props: {
                        // label: 'Tipo de identificacion',
                        name: 'type',
                        options: [
                            {
                                label: 'Pin tarjeta',
                                value: 'pin',
                                icon: ['fa', 'credit-card'],
                            },
                            {
                                label: 'Reconocimiento facial',
                                value: 'faceRecognition',
                                icon: ['fa', 'face-grin-beam'],
                            }
                        ]
                    }
                },

                {
                    uid: uid(),
                    type: 'actions/FullButton',
                    props: {
                        label: 'Continuar',
                        icon: {
                            icon: ['fa', 'right-long'],
                            color: 'white'
                        }
                    }
                },

                {
                    uid: uid(),
                    type: 'actions/BackIcon',
                    props: {
                        label: 'Atras'
                    }
                }
            ]
        }
    },

    {
        uid: uid(),
        type: 'informations/Text',
        props: {
            text: 'En el caso de tener inconvenientes por favor acercarse a su agencia más cercana.',
            color: 'text-gray-400',
            weight: 'font-light',
        }
    },
];