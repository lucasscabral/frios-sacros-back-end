"use strict";
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
exports.validarToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function validarToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { authorization } = req.headers;
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        if (!token) {
            throw { code: "unauthorized", message: "Acesso negado. Nenhum token fornecido." };
        }
        let bodyToken;
        try {
            const SECRETJWT = process.env.JWT_SECRET || "";
            const decoded = jsonwebtoken_1.default.verify(token, SECRETJWT);
            bodyToken = decoded;
            res.locals.bodyToken = bodyToken;
            next();
        }
        catch (error) {
            res
                .status(401)
                .json({ auth: false, message: 'Failed to authenticate token.' });
            return;
        }
    });
}
exports.validarToken = validarToken;
