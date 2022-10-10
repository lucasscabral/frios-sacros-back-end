"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter_1 = __importDefault(require("./authRouter"));
const shoppingCartRouter_1 = __importDefault(require("./shoppingCartRouter"));
const categoriesRouter_1 = __importDefault(require("./categoriesRouter"));
const productsRouter_1 = __importDefault(require("./productsRouter"));
const router = (0, express_1.Router)();
router.use(authRouter_1.default);
router.use(categoriesRouter_1.default);
router.use(productsRouter_1.default);
router.use(shoppingCartRouter_1.default);
exports.default = router;
