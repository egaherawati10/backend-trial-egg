import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UsersRepositoryItf } from "./users.repository.interface";
import { CreateUserDto } from "./dto/create-user.input";

@Injectable()
export class UsersRepository implements UsersRepositoryItf {
    private users: User[] = [
        new User(1, 'Bejo', 'Kebejoan123', 'bejo@example.com', true),
        new User(2, 'Dony', 'MulaiDariNOL', 'dony@example.com', false),
    ];
    getAll(): User[] {
        return this.users;
    }

    create(createDto: CreateUserDto): User {
        const newUser = new User(this.users.length + 1, 
            createDto.username, 
            createDto.password, 
            createDto.email, 
            createDto.isActive?true:false
        );
        this.users.push(newUser);
        return newUser;
    }
}