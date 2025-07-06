import { User } from "./entities/user.entity";

export interface UsersRepositoryItf {
    getAll(): User[];
    create(
        username: string, 
        password: string, 
        email: string, 
        isActive?: boolean): User;
}