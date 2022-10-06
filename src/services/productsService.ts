import * as productsReposiory from "../repositories/productsRepository"


export async function getAllProducts() {
    return productsReposiory.getAllProducts()
}