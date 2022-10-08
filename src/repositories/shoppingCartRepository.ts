import prisma from "../prisma/prismaClient";
import { IInsertData } from "../types/shoppingCartTypes";

export async function addProductShoppingCart(body: IInsertData) {
    return await prisma.shopping_Cart.create({ data: body })
}

export async function getAllProductsShoppingCart(userId: number) {
    return await prisma.shopping_Cart.findMany({
        where: { user_id: userId },
        select: {
            id: true,
            product: {
                select: {
                    id: true,
                    image_url: true,
                    name: true,
                    price: true,
                }
            },
            user: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })
}

export async function deleteShoppingCartUser(userId: number) {
    return await prisma.shopping_Cart.deleteMany({
        where: { user_id: userId }
    })
}

export async function deleteProductShoppingCart(productId: number) {
    return await prisma.shopping_Cart.delete({
        where: { id: productId }
    })
}