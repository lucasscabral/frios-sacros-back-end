import { Request, Response } from "express";
import * as shoppingCartService from "../services/shoppingCartService"

export async function addProductShoppingCart(req: Request, res: Response) {
    const { id: userId } = res.locals.bodyToken as { id: number }
    const productId = Number(req.params.productId)

    const body = {
        user_id: userId,
        product_id: productId
    }

    await shoppingCartService.addProductShoppingCart(body)

    res.sendStatus(201)
}


export async function getAllProductsShoppingCart(_: Request, res: Response) {
    const { id: userId } = res.locals.bodyToken as { id: number }

    const allProductsShoppingCart = await shoppingCartService.getAllProductsShoppingCart(userId)

    res.status(200).send(allProductsShoppingCart)
}

export async function deleteShoppingCartUser(_: Request, res: Response) {
    const { id: userId } = res.locals.bodyToken as { id: number }

    await shoppingCartService.deleteShoppingCartUser(userId)

    res.sendStatus(200)
}

export async function deleteProductShoppingCart(req: Request, res: Response) {
    const { id: userId } = res.locals.bodyToken as { id: number }
    const productId = Number(req.params.productId)
    try {
        const body = {
            user_id: userId,
            product_id: productId
        }

        await shoppingCartService.deleteProductShoppingCart(body)

        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}