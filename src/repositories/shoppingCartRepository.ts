import prisma from "../prisma/prismaClient";
import { IInsertData } from "../types/shoppingCartTypes";

export async function addProductShoppingCart(body: IInsertData) {
    await prisma.shopping_Cart.create({ data: body })

}

export async function updateStatusProduct(productIdInShoppingCart: number, status: boolean) {
    await prisma.shopping_Cart.update({
        where: {
            id: productIdInShoppingCart
        },
        data: {
            product: {
                update: {
                    selected: status
                }
            }
        }
    })
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
                    selected: true
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

export async function deleteProductShoppingCart(productIdInShoppingCart: number) {
    return await prisma.shopping_Cart.delete({
        where: {
            id: productIdInShoppingCart
        }
    })
}