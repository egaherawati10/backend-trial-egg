import { CreateUserDto } from './dto/create-user.input';
import { User } from './entities/user.entity';

export interface UsersRepositoryItf {
getAll(): User[];
create(createDto: CreateUserDto): User;
}