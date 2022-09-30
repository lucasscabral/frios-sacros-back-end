import { User } from "@prisma/client";
import { Request, Response } from "express";
import * as authService from "../services/authService";
import { ISignUp } from "../utils/interfaceUtils";


export async function signUp(req: Request, res: Response) {
    const body: {
        email: string,
        password?: any,
        name: string,
        profile_url: string,
    } = req.body;

    await authService.verifyEmailSignUp(body.email)
    const passwordEncrypted = await authService.encryptPassword(body.password)
    delete body.password

    const data: ISignUp = {
        ...body, password: passwordEncrypted
    }

    await authService.createUser(data)
    res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    const emailUser: User = await authService.verifyEmailLogin(email)
    await authService.verifyPassword(password, emailUser.password)
    const body = { id: emailUser.id, email }
    const token = await authService.generateToken(body)

    res.status(200).json({
        id: emailUser.id,
        name: emailUser.name,
        profile_url: emailUser.profile_url,
        token
    })
}