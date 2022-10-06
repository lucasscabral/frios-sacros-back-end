import { Router } from "express";
import authRouter from "./authRouter";
import shoppingCartRouter from "./shoppingCartRouter";
import categoriesRouter from "./categoriesRouter";

const router = Router()

router.use(authRouter)
router.use(categoriesRouter)
router.use(shoppingCartRouter)

export default router