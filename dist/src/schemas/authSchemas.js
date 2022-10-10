"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthentication = void 0;
const joi_1 = __importDefault(require("joi"));
const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const validateSigIn = joi_1.default.object({
    email: joi_1.default.string().pattern(REGEX_EMAIL).required(),
    password: joi_1.default.string().required()
});
const validateSigUp = joi_1.default.object({
    email: joi_1.default.string().pattern(REGEX_EMAIL).required(),
    password: joi_1.default.string().min(5).required(),
    name: joi_1.default.string().required(),
    profile_url: joi_1.default.string().uri()
});
exports.validateAuthentication = {
    validateSigIn,
    validateSigUp
};
