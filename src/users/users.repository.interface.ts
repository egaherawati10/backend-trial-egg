import { CreateUserDto } from "./dto/create-user.input";
import { User } from "./entities/user.entity";

export interface UsersRepositoryItf {
    getAll(): User[];
    userByUsername(username: string): User | undefined;
    create(createDto: CreateUserDto): User;
}