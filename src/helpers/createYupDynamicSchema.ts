import * as yup from "yup";
import { YupConfig } from "../interfaces";
import { FormValidations } from '../interfaces/FormField';

export const createYupFieldSchema = (schema: any, config: YupConfig) => {
    const { id, validationType, validations = [] } = config;

    if (!(yup as any)[validationType]) {
        return schema;
    }

    let validator = (yup as any)[validationType]();

    validations.forEach((validation: FormValidations) => {
        const { params, type } = validation;
        if (!validator[type]) {
            return;
        }
        validator = validator[type](...params);
    });

    schema[id] = validator;
    return schema;
}

export const createYupDynamicSchema = (configs: YupConfig[]) => {
    return configs.reduce((schema, config) => {

        const { id, validationType, validations = [] } = config
        const isObject = id.indexOf('.') >= 0

        if (!(yup as any)[validationType]) {
            return schema
        }
        let validator = (yup as any)[validationType]();
        validations.forEach(validation => {
            const { params, type } = validation
            if (!validator[type]) {
                return
            }
            validator = validator[type](...params)
        })

        if (!isObject) {
            return schema.concat(yup.object().shape({ [id]: validator }))
        }

        const reversePath = id.split('.').reverse()
        const currNestedObject = reversePath.slice(1).reduce((yupObj, path, _, __) => {
            if (!Number.isNaN(path)) {
                return { array: yup.array().of(yup.object().shape(yupObj)) }
            }
            if (yupObj.array) {
                return { [path]: yupObj.array }
            }
            return { [path]: yup.object().shape(yupObj) }
        }, { [reversePath[0]]: validator })

        const newSchema = yup.object().shape(currNestedObject)
        return schema.concat(newSchema)

    }, yup.object().shape({}));
}