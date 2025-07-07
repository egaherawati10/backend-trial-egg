import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UsersRepository } from "./users.repository";
import { UsersServiceItf } from "./users.service.interface";
import { CreateUserDto } from "./dto/create-user.input";

@Injectable()
export class UsersService implements UsersServiceItf{
  constructor(private repo: UsersRepository) {}
  listUsers(): User[] {
    return this.repo.getAll();
  }

  userByUsername(username: string) {
    return this.repo.getAll().find((user) => user.username === username);
  }

  createUser(createDto: CreateUserDto): User {
    return this.repo.create(createDto);
  }
}