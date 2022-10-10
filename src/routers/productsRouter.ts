import { Router } from "express";
import * as productsController from "../controllers/productsController"
import { validarToken } from "../middlewers/validateToken";

const productsRouter = Router()

// productsRouter.use(validarToken)
productsRouter.get("/products", productsController.getAllProducts)

export default productsRouter