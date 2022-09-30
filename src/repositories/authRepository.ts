import prisma from "../prisma/prismaClient";
import { ISignUp } from "../utils/interfaceUtils";

export async function searchByEmail(email: string) {
    const emailFound = await prisma.user.findUnique({ where: { email } })
    return emailFound
}

export async function insertUser(registrationData: ISignUp) {
    await prisma.user.create({ data: registrationData })
}