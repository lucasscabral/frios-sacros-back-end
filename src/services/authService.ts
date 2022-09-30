import dotenv from "dotenv"
dotenv.config()
import jwt from 'jsonwebtoken';
import { searchByEmail, insertUser } from "../repositories/authRepository";
import bcrypt, { compareSync } from "bcrypt"
import { ISignUp, ISignInData } from "../utils/interfaceUtils";
import { User } from "@prisma/client";

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
    const emailFound: User | null = await searchByEmail(email)
    if (!emailFound) {
        throw { code: "unauthorized", message: "Email ou senha inválido" }
    }
    return emailFound
}

export async function verifyPassword(requestPassword: string, passwordInDatabase: string) {
    const comparePassword = compareSync(requestPassword, passwordInDatabase)
    if (!comparePassword) {
        throw { code: "unauthorized", message: "Email ou senha inválido" }
    }
    return comparePassword
}

export async function generateToken(data: ISignInData) {
    const SECRETJWT: string = process.env.JWT_SECRET || ""
    const token = jwt.sign(data, SECRETJWT, {
        expiresIn: 60 * 60 * 24,
    });

    return token
}