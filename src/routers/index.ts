import { Router } from "express";
import authRouter from "./authRouter";
import shoppingCartRouter from "./shoppingCartRouter";
import categoriesRouter from "./categoriesRouter";
import productsRouter from "./productsRouter";

const router = Router()

router.use(authRouter)
router.use(categoriesRouter)
router.use(productsRouter)
router.use(shoppingCartRouter)

export default router