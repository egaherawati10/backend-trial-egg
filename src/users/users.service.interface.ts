import { User } from "./entities/user.entity";

export interface UsersServiceItf {
    listUsers(): User[];
    createUser(username: string, password: string, email: string, isActive: boolean): User;
}