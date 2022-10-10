import Joi from "joi";
import { ISignUp } from "../utils/interfaceUtils"

//const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

const validateSigIn = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

const validateSigUp = Joi.object<ISignUp>({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    name: Joi.string().required(),
    profile_url: Joi.string().uri()
})

export const validateAuthentication = {
    validateSigIn,
    validateSigUp
} 