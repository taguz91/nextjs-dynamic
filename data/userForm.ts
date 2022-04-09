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
        type: 'containers/FormContainer',
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
                }
            ]
        }
    },
];