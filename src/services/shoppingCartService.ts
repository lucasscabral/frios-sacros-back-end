import { IInsertData } from "../types/shoppingCartTypes";
import * as shoppingCartRepository from "../repositories/shoppingCartRepository"

export async function addProductShoppingCart(body: IInsertData) {
    return await shoppingCartRepository.addProductShoppingCart(body)
}

export async function getAllProductsShoppingCart(userId: number) {
    const allProductsShoppingCart = await shoppingCartRepository.getAllProductsShoppingCart(userId)
    return allProductsShoppingCart
}

export async function deleteShoppingCartUser(userId: number) {
    return await shoppingCartRepository.deleteShoppingCartUser(userId)
}