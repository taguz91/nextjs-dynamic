import { DynamicComponent } from "../interfaces";

export const PAGE_DATA: DynamicComponent[] = [
    {
        type: 'informations/WarningMessage',
        props: {
            message: 'This message was generated automatic'
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
            label: 'Age',
            type: 'number',
        }
    },

    {
        type: 'informations/WarningMessage',
        props: {
            message: 'This message is writen by me'
        }
    },
];

export const MAZUAY_PAGE_DATA: DynamicComponent[] = [
    {
        type: 'informations/WarningMessage',
        props: {
            message: 'Mazuay data information'
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
];