import { Request, Response } from "express";
import * as authService from "../services/authService";
import { ISignIn } from "../utils/interfaceUtils";


export async function signUp(req: Request, res: Response) {
    const body = req.body;

    await authService.verifyEmailSignUp(body.email)
    const passwordEncrypted = await authService.encryptPassword(body.password)
    delete body.password

    const data = {
        ...body, password: passwordEncrypted
    }

    await authService.createUser(data)
    res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    const emailUser: ISignIn = await authService.verifyEmailLogin(email)
    await authService.verifyPassword(password, emailUser.password)
    const body = { id: emailUser.id, email }
    const token = await authService.generateToken(body)

    res.status(200).send({ token })
}