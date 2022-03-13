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
        type: 'informations/WarningMessage',
        props: {
            message: 'Please fill all inputs using trust information, for contact you the correct form.'
        }
    },
];