import { Request, Response } from 'express';
import { UserService } from '../Service/UserService';


class UserController {

    async create(req: Request,res: Response): Promise<void>{
        
        const { name } = req.body

        const userService = new UserService()
        const result = await userService.create(name)

        res.status(200).json(result)
    }

    async findAll(req: Request, res: Response): Promise<void>{
        const userService = new UserService()
        const result = await userService.findAll()
        res.status(200).json(result)
    }
}


export { UserController }