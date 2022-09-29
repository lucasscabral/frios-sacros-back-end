import prisma from "../prisma/prismaClient";
import { ISignUp } from "../utils/interfaceUtils";

export async function searchByEmail(email: string) {
    const emailEncontrado = await prisma.user.findUnique({ where: { email } })
    return emailEncontrado
}

export async function insertUser(dadosCadastrais: ISignUp) {
    await prisma.user.create({ data: dadosCadastrais })
}