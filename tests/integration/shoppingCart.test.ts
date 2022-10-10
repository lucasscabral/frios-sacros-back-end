import app from "../../src/app"
import prisma from "../../src/prisma/prismaClient"
import supertest from "supertest"
import { loginRandom } from "../utils/authUtilsFactory"

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE shopping_cart RESTART IDENTITY;`
})

describe("Testa adição de um produto no carrinho de compras", () => {
    it("Deve Retornar status 201 para adição de um produto", async () => {
        const login = await loginRandom()
        const productId = 2

        const insert = await supertest(app).post(`/shopping-cart/${productId}`).send().set({ Authorization: `Bearer ${login.body.token}` })

        expect(insert.status).toBe(201)
    })

})






afterAll(async () => {
    await prisma.$disconnect()
})
