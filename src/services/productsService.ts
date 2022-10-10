import * as productsReposiory from "../repositories/productsRepository"


export async function getAllProducts() {
    return await productsReposiory.getAllProducts()
}