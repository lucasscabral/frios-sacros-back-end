"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductShoppingCart = exports.deleteShoppingCartUser = exports.getAllProductsShoppingCart = exports.updateStatusProduct = exports.addProductShoppingCart = void 0;
const prismaClient_1 = __importDefault(require("../prisma/prismaClient"));
function addProductShoppingCart(body) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prismaClient_1.default.shopping_Cart.create({ data: body });
    });
}
exports.addProductShoppingCart = addProductShoppingCart;
function updateStatusProduct(productIdInShoppingCart, status) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prismaClient_1.default.shopping_Cart.update({
            where: {
                id: productIdInShoppingCart
            },
            data: {
                product: {
                    update: {
                        selected: status
                    }
                }
            }
        });
    });
}
exports.updateStatusProduct = updateStatusProduct;
function getAllProductsShoppingCart(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prismaClient_1.default.shopping_Cart.findMany({
            where: { user_id: userId },
            select: {
                id: true,
                product: {
                    select: {
                        id: true,
                        image_url: true,
                        name: true,
                        price: true,
                        selected: true
                    }
                },
                user: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
    });
}
exports.getAllProductsShoppingCart = getAllProductsShoppingCart;
function deleteShoppingCartUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prismaClient_1.default.shopping_Cart.deleteMany({
            where: { user_id: userId }
        });
    });
}
exports.deleteShoppingCartUser = deleteShoppingCartUser;
function deleteProductShoppingCart(productIdInShoppingCart) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield prismaClient_1.default.shopping_Cart.delete({
            where: {
                id: productIdInShoppingCart
            }
        });
    });
}
exports.deleteProductShoppingCart = deleteProductShoppingCart;
