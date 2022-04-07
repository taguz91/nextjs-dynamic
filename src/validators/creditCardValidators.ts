import * as Yup from "yup";


const getCardType = (card?: string) => {
    if (!card) {
        return '';
    }

    card = card.substring(0, 5);

    switch (card) {
        case '01111':
            return 'visa';
        case '02222':
            return 'masterdcard';
        default:
            return '';
    }
}

export const initCardValidations = () => {
    console.log('Iniciamos las validaciones custom... para card')

    Yup.addMethod(Yup.string, "creditCardType", function (errorMessage) {
        return this.test(`test-card-type`, errorMessage, function (value) {
            const { path, createError } = this;

            return (
                getCardType(value).length > 0 ||
                createError({ path, message: errorMessage })
            );
        });
    });

    Yup.addMethod(Yup.string, "creditCardLength", function (errorMessage) {
        return this.test(`test-card-length`, errorMessage, function (value) {
            const { path, createError } = this;

            return (
                (value && value.length === 16) ||
                createError({ path, message: errorMessage })
            );
        });
    });
}
