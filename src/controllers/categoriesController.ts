import { Request, Response } from "express";
import * as categoriesService from "../services/categoriesService"

export async function getAllCategories(_: Request, res: Response) {
    const allCategories = await categoriesService.getAllCategories()

    res.status(200).send(allCategories)
}