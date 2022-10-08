import { Router } from "express";
import { validarToken } from "../middlewers/validateToken";
import { addProductShoppingCart, getAllProductsShoppingCart, deleteShoppingCartUser } from "../controllers/shoppingCartController";

const shoppingCartRouter = Router()

shoppingCartRouter.use(validarToken)
shoppingCartRouter.post("/shopping-cart/:productId", addProductShoppingCart)
shoppingCartRouter.get("/shopping-cart", getAllProductsShoppingCart)
shoppingCartRouter.delete("/shopping-cart", deleteShoppingCartUser)

export default shoppingCartRouter