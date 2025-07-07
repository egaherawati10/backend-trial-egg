import { CreateUserDto } from "./dto/create-user.input";
import { User } from "./entities/user.entity";

export interface UsersServiceItf {
    listUsers(): User[];
    createUser(createDto: CreateUserDto): User;
}