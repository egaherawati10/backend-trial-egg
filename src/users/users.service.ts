import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UsersRepository } from "./users.repository";
import { UsersServiceItf } from "./users.service.interface";

@Injectable()
export class UsersService implements UsersServiceItf{
  constructor(private repo: UsersRepository) {}
  listUsers(): User[] {
    return this.repo.getAll();
  }

  userByUsername(username: string) {
    return this.repo.getAll().find((user) => user.username === username);
  }

  createUser(username: string, password: string, email: string, isActive: boolean): User {
    return this.repo.create(username, password, email, isActive);
  }
}