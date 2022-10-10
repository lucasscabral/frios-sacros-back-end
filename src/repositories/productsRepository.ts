import prisma from "../prisma/prismaClient";


export async function getAllProducts() {
    return await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            price: true,
            inventory: true,
            image_url: true,
            selected: true,
            categories: {}
        }
    })
}