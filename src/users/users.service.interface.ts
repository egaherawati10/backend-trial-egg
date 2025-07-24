import { CreateUserDto } from "./dto/create-user.input";
import { User } from "./entities/user.entity";

export interface UsersServiceItf {
    listUsers(): User[];
    userByUsername(username: string): User | undefined;
    createUser(createDto: CreateUserDto): User;
}