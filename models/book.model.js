import Joi from 'joi';

export const validateBook = {
    add: Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.number().required()
    })
};
