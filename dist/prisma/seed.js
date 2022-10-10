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
const prismaClient_1 = __importDefault(require("../src/prisma/prismaClient"));
const faker_1 = require("@faker-js/faker");
function populeteDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prismaClient_1.default.categories.createMany({
            data: [
                { name: "Bonecas" },
                { name: "Pinturas" },
                { name: "Colças de Cama" }
            ],
            skipDuplicates: true
        });
        yield prismaClient_1.default.product.createMany({
            data: [
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://http2.mlstatic.com/D_NQ_NP_663196-MLB44531862190_012021-O.jpg",
                    category_id: 1
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://http2.mlstatic.com/D_NQ_NP_663196-MLB44531862190_012021-O.jpg",
                    category_id: 1
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://http2.mlstatic.com/D_NQ_NP_663196-MLB44531862190_012021-O.jpg",
                    category_id: 1
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://http2.mlstatic.com/D_NQ_NP_663196-MLB44531862190_012021-O.jpg",
                    category_id: 1
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://http2.mlstatic.com/D_NQ_NP_663196-MLB44531862190_012021-O.jpg",
                    category_id: 1
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://http2.mlstatic.com/D_NQ_NP_663196-MLB44531862190_012021-O.jpg",
                    category_id: 1
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://img.elo7.com.br/product/original/1CF0625/guardanapo-pintado-a-mao-e-com-detalhes-em-croche-artesanato.jpg",
                    category_id: 2
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://i.pinimg.com/originals/b0/56/08/b05608a94bfbb7fdcea5614d6ee1eec3.jpg",
                    category_id: 2
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://img.elo7.com.br/product/original/1D05AA4/guardanapo-pintado-a-mao-e-com-detalhes-em-croche-guardanapo.jpg",
                    category_id: 2
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://i.pinimg.com/originals/b0/56/08/b05608a94bfbb7fdcea5614d6ee1eec3.jpg",
                    category_id: 2
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://img.elo7.com.br/product/original/1CF0625/guardanapo-pintado-a-mao-e-com-detalhes-em-croche-artesanato.jpg",
                    category_id: 2
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://img.elo7.com.br/product/original/1D05AA4/guardanapo-pintado-a-mao-e-com-detalhes-em-croche-guardanapo.jpg",
                    category_id: 2
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://imgs.extra.com.br/1516738642/1xg.jpg?imwidth=500",
                    category_id: 3
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://io.convertiez.com.br/m/essencialenxovais/shop/products/images/18310/medium/colcha-cama-queen-melody-marfim-5-pecas_39179.jpg",
                    category_id: 3
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://a-static.mlcdn.com.br/1500x1500/colcha-para-cama-queen-3-pecas-com-tecido-180-fios-dupla-face-estampado-matelado-bia-enxovais/newhomeenxovais/5896509743/547eeb70f750fb6fa51b6dc7b967a7d2.jpg",
                    category_id: 3
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://io.convertiez.com.br/m/essencialenxovais/shop/products/images/18310/medium/colcha-cama-queen-melody-marfim-5-pecas_39179.jpg",
                    category_id: 3
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://a-static.mlcdn.com.br/1500x1500/colcha-para-cama-queen-3-pecas-com-tecido-180-fios-dupla-face-estampado-matelado-bia-enxovais/newhomeenxovais/5896509743/547eeb70f750fb6fa51b6dc7b967a7d2.jpg",
                    category_id: 3
                },
                {
                    name: faker_1.faker.name.fullName(),
                    price: Number(faker_1.faker.finance.amount(5, 10, 2)),
                    inventory: Number(faker_1.faker.finance.account(2)),
                    image_url: "https://imgs.extra.com.br/1516738642/1xg.jpg?imwidth=500",
                    category_id: 3
                }
            ],
            skipDuplicates: true
        });
    });
}
populeteDb();
