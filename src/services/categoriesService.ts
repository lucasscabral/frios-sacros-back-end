import * as categoriesReposiory from "../repositories/categoriesRepository"


export async function getAllCategories() {
    return categoriesReposiory.getAllCategories()
}