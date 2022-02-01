import { app } from "../app";
import  request from "supertest";
import { UserRepository } from "../modules/Repository/UserRepository";
import { prismaClient } from "../database/prismaClient";


describe("test endpoints Users", () => {
    it("test create user", async () =>{

        const name = "Adriano"

        const response = await request(app).post('/create').send({name: name})
        console.log(`Resultado ${response}`)
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("id")

        await new UserRepository().delete(response.body.id)
    });

    it("test get user", async () => {

        const user1 = await prismaClient.user.create({ data: { name: "Rafael" } })
        const user2 = await prismaClient.user.create({ data: { name: "Adriano" } })
        const user3 = await prismaClient.user.create({ data: { name: "Waguininho" } })

        const response = await request(app).get('/findAll')
        console.log(`Resultado ${response}`)
        expect(response.body).toHaveLength(3)

        await prismaClient.user.delete({where: {id: user1.id}})
        await prismaClient.user.delete({where: {id: user2.id}})
        await prismaClient.user.delete({where: {id: user3.id}})
    })
})