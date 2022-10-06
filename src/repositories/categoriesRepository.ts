import prisma from "../prisma/prismaClient";


export async function getAllCategories() {
    return await prisma.categories.findMany()
}