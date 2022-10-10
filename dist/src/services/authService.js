"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = exports.verifyPassword = exports.verifyEmailLogin = exports.createUser = exports.encryptPassword = exports.verifyEmailSignUp = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authRepository_1 = require("../repositories/authRepository");
const bcrypt_1 = __importStar(require("bcrypt"));
function verifyEmailSignUp(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const emailFound = yield (0, authRepository_1.searchByEmail)(email);
        if (emailFound) {
            throw { code: "unauthorized", message: "Esse email já existe" };
        }
    });
}
exports.verifyEmailSignUp = verifyEmailSignUp;
function encryptPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const SECRET = Number(process.env.BCRYPT_SECRET);
        const encryptPassword = bcrypt_1.default.hashSync(password, SECRET);
        return encryptPassword;
    });
}
exports.encryptPassword = encryptPassword;
function createUser(data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, authRepository_1.insertUser)(data);
    });
}
exports.createUser = createUser;
function verifyEmailLogin(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const emailFound = yield (0, authRepository_1.searchByEmail)(email);
        if (!emailFound) {
            throw { code: "unauthorized", message: "Email ou senha inválido" };
        }
        return emailFound;
    });
}
exports.verifyEmailLogin = verifyEmailLogin;
function verifyPassword(requestPassword, passwordInDatabase) {
    return __awaiter(this, void 0, void 0, function* () {
        const comparePassword = (0, bcrypt_1.compareSync)(requestPassword, passwordInDatabase);
        if (!comparePassword) {
            throw { code: "unauthorized", message: "Email ou senha inválido" };
        }
        return comparePassword;
    });
}
exports.verifyPassword = verifyPassword;
function generateToken(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const SECRETJWT = process.env.JWT_SECRET || "";
        const token = jsonwebtoken_1.default.sign(data, SECRETJWT, {
            expiresIn: 60 * 60 * 24,
        });
        return token;
    });
}
exports.generateToken = generateToken;
