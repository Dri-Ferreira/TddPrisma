import { Router } from "express";
import { UserController } from "../modules/controller/UserController";

const routes = Router()

const userControler = new UserController();

routes.post('/create', userControler.create)

export { routes }