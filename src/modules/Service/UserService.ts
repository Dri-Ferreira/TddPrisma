import { user } from "@prisma/client";
import { UserRepository } from "../Repository/UserRepository";


class UserService {
    
    async create(name: string):Promise<user>{
        const userRepository = new UserRepository()
        const user = await userRepository.create(name)
        return user
    }
}

export { UserService }