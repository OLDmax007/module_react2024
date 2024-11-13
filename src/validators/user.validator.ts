import Joi from "joi";

 export const userValidator = Joi.object({
    username: Joi.string().required().pattern(new RegExp('[a-zA-z]')).messages({
        'string.empty': 'Username must be entired',
        'string.pattern.base' : 'Invalid pattern'

    }),
    password: Joi.string().required().pattern(new RegExp('[a-zA-z]')).messages({
        'string.empty': 'Password must be entired',
        'string.pattern.base' : 'Invalid pattern'
    })
})