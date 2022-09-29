import { Router } from "express";
import * as authControllers from "../controllers/authController"
import validateSchema from "../schemas/validateSchema";
import { validateAuthentication } from "../schemas/authSchemas";

const authRouter = Router();

authRouter.post("/signin", validateSchema(validateAuthentication.validateSigIn), authControllers.signIn);
authRouter.post("/signup", validateSchema(validateAuthentication.validateSigUp), authControllers.signUp);

export default authRouter;