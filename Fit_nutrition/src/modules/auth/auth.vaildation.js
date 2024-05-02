import Joi from "joi";

export const registerSchema = Joi.object({
  fullName: Joi.string().min(10).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),

  phone: Joi.string()
    .regex(/^01[0-2,5]\d{8}$/)
    .message("Enter phone number valid"),
}).required();

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().required(),
}).required();

export const activateSchema = Joi.object({
  activationCode: Joi.string().required(),
}).required();

export const forgetPassSchema = Joi.object({
  email: Joi.string().required(),
}).required();

export const resetPasswordSchema = Joi.object({
  forGetCode: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.required(),
  confirmPassword: Joi.valid(Joi.ref("password")).required(),
}).required();

export const OTPCodeSchema = Joi.object({
  OTPCode: Joi.number().min(4).required(),
  phone: Joi.number().min(4).required(),
}).required();
