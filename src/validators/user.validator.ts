import Joi from "joi";

export const userValidator = Joi.object({
    firstname: Joi.string().min(5).max(15).pattern(new RegExp('\\b[a-z]{5,15}\\b')).required().messages({
        'any.required': 'Field is required',
        'string.base': 'First name must be contain only characters',
        'string.empty': 'First name must be entered',
        'string.min': 'First name must contain at least 5 characters',
        'string.max': 'First name must not be longer than 15 characters',
        'string.pattern.base': 'First name should contain only lower case Latin characters'
    }),
    lastname: Joi.string().min(5).max(15).pattern(new RegExp('\\b[a-z]{5,15}\\b')).required().messages({
        'any.required': 'Field is required',
        'string.base': 'Last name must be contain only Latin characters',
        'string.empty': 'Last name is must be entered',
        'string.min': 'Last name must  contain at least 5 characters',
        'string.max': 'Last name must  not be longer than 15 characters',
        'string.pattern.base': 'Last name must contain only lower case Latin characters'

    }),
    age: Joi.number().min(18).max(60).required().messages({
        'any.required': 'Field is required',
        'number.base': 'Age must be number',
        'number.empty': 'Age must be entered',
        'number.min': 'Age must be bigger than 18',
        'number.max': 'Age must be less than 60'
    }),
    password: Joi.string()
        .min(8)
        .max(15)
        .pattern(new RegExp('^[a-zA-Z]{8,10}[@$!%*?&]{1,5}$'))
        .required()
        .messages({
            'any.required': 'Field is required',
            'string.empty': 'Password must be entered',
            'string.min': 'Password must contain at least 8 characters',
            'string.max': 'Password must not be longer than 15 characters',
            'string.pattern.base': 'Password must contain only Latin characters with at least one symbol in the end'
        }),
    email: Joi.string().email({tlds: {allow: false}}).required().messages({
        'any.required': 'Field is required',
        'string.empty': 'Email must be entered',
        'string.email': 'Email must be a valid email address'
    }),
    marriedStatus: Joi.string().required().messages({
        'any.required': 'Radio is required',
        'string.empty': 'Married status must be selected',
    }),
    birthDate: Joi.string().required().messages({
        'any.required': 'Field is required',
        'string.empty': 'Date must be selected',
    }),
});