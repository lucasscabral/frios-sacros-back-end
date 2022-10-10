import prisma from "../../src/prisma/prismaClient";
import { faker } from "@faker-js/faker";
import supertest from "supertest";
import app from "../../src/app";

export async function loginRandom() {
    const auth = {
        name: faker.name.fullName(),
        profile_url: faker.internet.url(),
        email: faker.internet.email().toLocaleLowerCase(),
        password: faker.internet.password(),
    }
    await supertest(app).post("/signup").send(auth)

    const body = {
        email: auth.email,
        password: auth.password
    }


    return await supertest(app).post("/signin").send(body)
}


