import { IInsertData } from "../types/shoppingCartTypes";
import * as shoppingCartRepository from "../repositories/shoppingCartRepository"

export async function addProductShoppingCart(body: IInsertData) {
    const status = true
    await shoppingCartRepository.addProductShoppingCart(body)
    await updateStatusProduct(body, status)
}

export async function updateStatusProduct(body: IInsertData, status: boolean) {
    const product = await getProductShoppingCart(body.user_id, body.product_id)
    await shoppingCartRepository.updateStatusProduct(product.id, status)
    return product
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

export async function deleteProductShoppingCart(body: IInsertData) {
    const status = false
    const product = await updateStatusProduct(body, status)
    await shoppingCartRepository.deleteProductShoppingCart(product.id)
}