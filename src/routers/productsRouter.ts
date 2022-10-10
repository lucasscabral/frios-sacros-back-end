import { Router } from "express";
import * as productsController from "../controllers/productsController"

const productsRouter = Router()

productsRouter.get("/products", productsController.getAllProducts)

export default productsRouter