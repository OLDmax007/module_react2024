import Joi from "joi";

export const userValidator = Joi.object(
    {
                fname: Joi.string().pattern(new RegExp('^\\w{5,10}$')).required().messages(
                    {
                "string.pattern.base" : "Invalid field",
                "any.required": "Field is required",
                "string.empty": "Field cannot be empty",
            }
        ),
        password: Joi.string().min(1).max(10).required().messages(
            {
                "any.required": "Field is required",
                "string.empty": "Field cannot be empty",
                "string.min": "Password must be bigger then 1",
                "string.max": "Password must be lower then 10",

            }
        ),
        age: Joi.number().min(1).max(10).required().messages(
            {
                "any.required": "Field is required",
                "number.base": "Field  must be a number",
                "number.min": "Age must be bigger then 1",
                "number.max": "Age must be lower then 10",
            }
        ),

    }
)