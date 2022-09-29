import dotenv from "dotenv"
dotenv.config()
import jwt from 'jsonwebtoken';
import { searchByEmail, insertUser } from "../repositories/authRepository";
import bcrypt, { compareSync } from "bcrypt"
import { ISignUp, ISignInData } from "../utils/interfaceUtils";

export async function verifyEmailSignUp(email: string) {

    const emailFound = await searchByEmail(email)
    if (emailFound) {
        throw { code: "unauthorized", message: "Esse email já existe" }
    }
}

export async function encryptPassword(password: string) {
    const SECRET = Number(process.env.BCRYPT_SECRET)
    const encryptPassword = bcrypt.hashSync(password, SECRET)

    return encryptPassword
}

export async function createUser(data: ISignUp) {
    await insertUser(data)
}

export async function verifyEmailLogin(email: string) {
    const emailEncontrado = await searchByEmail(email)
    if (!emailEncontrado) {
        throw { code: "unauthorized", message: "Email ou senha inválido" }
    }
    return emailEncontrado
}

export async function verifyPassword(senhaPassada: string, senhaEcriptografada: string) {
    const comparaSenha = compareSync(senhaPassada, senhaEcriptografada)
    if (!comparaSenha) {
        throw { code: "unauthorized", message: "Email ou senha inválido" }
    }
    return comparaSenha
}

export async function generateToken(dados: ISignInData) {
    const SECRETJWT: string = process.env.JWT_SECRET || ""
    const token = jwt.sign(dados, SECRETJWT, {
        expiresIn: 60 * 60 * 24,
    });

    return token
}