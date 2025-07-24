// import { Injectable } from "@nestjs/common";
// import { User } from "./entities/user.entity";
// import { UsersRepositoryItf } from "./users.repository.interface";
// import { CreateUserDto } from "./dto/create-user.input";

// @Injectable()
// export class UsersRepository implements UsersRepositoryItf {
//     private users: User[] = [
//         new User(1, 'Bejo', 'Kebejoan123', 'bejo@example.com', true),
//         new User(2, 'Dony', 'MulaiDariNOL', 'dony@example.com', false),
//     ];
//     getAll(): User[] {
//         return this.users;
//     }

//     userByUsername(username: string): User | undefined {
//     const res = this.users.find((user) => user.username === username);
//     console.log(res);
//     return res;
//     }

//     // userByUsername(username: string): User | undefined {
//     // return this.users.find((user) => user.username === username);
//     // }

//     create(createDto: CreateUserDto): User {
//         const newUser = new User(this.users.length + 1, 
//             createDto.username, 
//             createDto.password, 
//             createDto.email, 
//             createDto.isActive?true:false
//         );
//         this.users.push(newUser);
//         return newUser;
//     }
// }

import { Injectable } from "@nestjs/common";
import { UsersRepositoryItf } from "./users.repository.interface";
import { PrismaService } from "src/prisma/prisma.service";
import { User, Prisma } from "@prisma/client";

@Injectable()
export class UsersRepository implements UsersRepositoryItf {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
