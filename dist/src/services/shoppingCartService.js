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
exports.deleteProductShoppingCart = exports.deleteShoppingCartUser = exports.getProductShoppingCart = exports.getAllProductsShoppingCart = exports.updateStatusProduct = exports.addProductShoppingCart = void 0;
const shoppingCartRepository = __importStar(require("../repositories/shoppingCartRepository"));
function addProductShoppingCart(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const status = true;
        yield shoppingCartRepository.addProductShoppingCart(body);
        yield updateStatusProduct(body, status);
    });
}
exports.addProductShoppingCart = addProductShoppingCart;
function updateStatusProduct(body, status) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield getProductShoppingCart(body.user_id, body.product_id);
        yield shoppingCartRepository.updateStatusProduct(product.id, status);
        return product;
    });
}
exports.updateStatusProduct = updateStatusProduct;
function getAllProductsShoppingCart(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const allProductsShoppingCart = yield shoppingCartRepository.getAllProductsShoppingCart(userId);
        return allProductsShoppingCart;
    });
}
exports.getAllProductsShoppingCart = getAllProductsShoppingCart;
function getProductShoppingCart(userId, productId) {
    return __awaiter(this, void 0, void 0, function* () {
        const allProductsUser = yield getAllProductsShoppingCart(userId);
        const product = allProductsUser.filter(product => product.product.id === productId);
        return product[0];
    });
}
exports.getProductShoppingCart = getProductShoppingCart;
function deleteShoppingCartUser(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield shoppingCartRepository.deleteShoppingCartUser(userId);
    });
}
exports.deleteShoppingCartUser = deleteShoppingCartUser;
function deleteProductShoppingCart(body) {
    return __awaiter(this, void 0, void 0, function* () {
        const status = false;
        const product = yield updateStatusProduct(body, status);
        yield shoppingCartRepository.deleteProductShoppingCart(product.id);
    });
}
exports.deleteProductShoppingCart = deleteProductShoppingCart;
