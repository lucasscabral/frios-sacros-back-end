import { Router } from "express";
import * as categoriesController from "../controllers/categoriesController"

const categoriesRouter = Router()

categoriesRouter.get("/categories", categoriesController.getAllCategories)

export default categoriesRouter