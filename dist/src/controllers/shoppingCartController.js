"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductShoppingCart = exports.deleteShoppingCartUser = exports.getAllProductsShoppingCart = exports.addProductShoppingCart = void 0;
const shoppingCartService = __importStar(require("../services/shoppingCartService"));
function addProductShoppingCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id: userId } = res.locals.bodyToken;
        const productId = Number(req.params.productId);
        const body = {
            user_id: userId,
            product_id: productId
        };
        yield shoppingCartService.addProductShoppingCart(body);
        res.sendStatus(201);
    });
}
exports.addProductShoppingCart = addProductShoppingCart;
function getAllProductsShoppingCart(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id: userId } = res.locals.bodyToken;
        const allProductsShoppingCart = yield shoppingCartService.getAllProductsShoppingCart(userId);
        res.status(200).send(allProductsShoppingCart);
    });
}
exports.getAllProductsShoppingCart = getAllProductsShoppingCart;
function deleteShoppingCartUser(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id: userId } = res.locals.bodyToken;
        yield shoppingCartService.deleteShoppingCartUser(userId);
        res.sendStatus(200);
    });
}
exports.deleteShoppingCartUser = deleteShoppingCartUser;
function deleteProductShoppingCart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id: userId } = res.locals.bodyToken;
        const productId = Number(req.params.productId);
        try {
            const body = {
                user_id: userId,
                product_id: productId
            };
            yield shoppingCartService.deleteProductShoppingCart(body);
            res.sendStatus(200);
        }
        catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    });
}
exports.deleteProductShoppingCart = deleteProductShoppingCart;
