import Joi from "joi";

export const userValidator = Joi.object({
    firstname: Joi.string().required()
});