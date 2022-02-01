import { user } from "@prisma/client";
import { UserRepository } from "../Repository/UserRepository";


class UserService {
    
    async create(name: string):Promise<user>{
        const userRepository = new UserRepository()
        const user = await userRepository.create(name)
        return user
    }

    async findAll():Promise<object>{
        const userRepository = new UserRepository()
        const users = await userRepository.findAll()
        return users
    }
}

export { UserService }