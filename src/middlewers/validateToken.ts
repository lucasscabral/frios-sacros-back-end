import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export async function validarToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if (!token) {
        throw { code: "unauthorized", message: "Acesso negado. Nenhum token fornecido." }
    }

    let bodyToken;

    try {
        const SECRETJWT: string = process.env.JWT_SECRET || "";
        const decoded: string | JwtPayload = jwt.verify(token, SECRETJWT);

        bodyToken = decoded;
        res.locals.bodyToken = bodyToken;

        next();
    } catch (error) {
        res
            .status(401)
            .json({ auth: false, message: 'Failed to authenticate token.' });
        return;
    }
}