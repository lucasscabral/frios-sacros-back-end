import { Request, Response } from "express";
import * as productsService from "../services/productsService"

export async function getAllProducts(_: Request, res: Response) {
    const allProducts = await productsService.getAllProducts()

    res.status(200).send(allProducts)
}