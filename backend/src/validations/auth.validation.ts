import Joi from "joi"

export const validateCreateUser = {
  body: Joi.object({
    displayName: Joi.string().optional().allow(null, ''),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    phoneNumber: Joi.number().optional().allow(null),
    photoURL: Joi.string().optional(),
  }),
};

export const validateLogin = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
  }),
};