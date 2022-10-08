import { Router } from "express";
import { validarToken } from "../middlewers/validateToken";
import * as shoppingCartController from "../controllers/shoppingCartController";

const shoppingCartRouter = Router()

shoppingCartRouter.use(validarToken)
shoppingCartRouter.post("/shopping-cart/:productId", shoppingCartController.addProductShoppingCart)
shoppingCartRouter.get("/shopping-cart", shoppingCartController.getAllProductsShoppingCart)
shoppingCartRouter.delete("/delete-shopping-cart", shoppingCartController.deleteShoppingCartUser)
shoppingCartRouter.delete("/product/:productId", shoppingCartController.deleteProductShoppingCart)

export default shoppingCartRouter