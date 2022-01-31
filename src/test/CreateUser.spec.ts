import { app } from "../app";
import  request from "supertest";
import { UserRepository } from "../modules/Repository/UserRepository";


describe("test endpoints Users", () => {
    it("test create user", async () =>{

        const name = "Adriano"

        const res = await request(app).post('/create').send({name: name})

        expect(res.status).toBe(200)
        expect(res.body).toHaveProperty("id")

        await new UserRepository().delete(res.body.id)
    })
})