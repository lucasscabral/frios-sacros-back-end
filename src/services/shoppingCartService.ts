import { IInsertData } from "../types/shoppingCartTypes";
import * as shoppingCartRepository from "../repositories/shoppingCartRepository"

export async function addProductShoppingCart(body: IInsertData) {
    return await shoppingCartRepository.addProductShoppingCart(body)
}

export async function getAllProductsShoppingCart(userId: number) {
    const allProductsShoppingCart = await shoppingCartRepository.getAllProductsShoppingCart(userId)
    return allProductsShoppingCart
}

export async function getProductShoppingCart(userId: number, productId: number) {
    const allProductsUser = await getAllProductsShoppingCart(userId)
    const product = allProductsUser.filter(product => product.product.id === productId)
    return product[0]
}

export async function deleteShoppingCartUser(userId: number) {
    return await shoppingCartRepository.deleteShoppingCartUser(userId)
}

export async function deleteProductShoppingCart(productIdInShoppingCart: number) {
    return await shoppingCartRepository.deleteProductShoppingCart(productIdInShoppingCart)
}