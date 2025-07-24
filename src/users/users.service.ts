// // import { Injectable } from "@nestjs/common";
// // import { User } from "./entities/user.entity";
// // import { UsersRepository } from "./users.repository";
// // import { UsersServiceItf } from "./users.service.interface";
// // import { CreateUserDto } from "./dto/create-user.input";

import { Inject, Injectable } from "@nestjs/common";
import { UsersServiceItf } from "./users.service.interface";
import { UserRepositoryToken, UsersRepositoryItf } from "./users.repository.interface";
import { User } from "./entities/user.entity";

// import { Injectable } from "@nestjs/common";
// import { Prisma, User } from "@prisma/client";
// import { PrismaService } from "src/prisma/prisma.service";

// // @Injectable()
// // export class UsersService implements UsersServiceItf{
// //   constructor(private repo: UsersRepository) {}
// //   listUsers(): User[] {
// //     return this.repo.getAll();
// //   }

// //   userByUsername(username: string) {
// //     const res = this.repo.userByUsername(username);
// //     console.log(res);
// //     return res;
// //   }

// //   createUser(createDto: CreateUserDto): User {
// //     return this.repo.create(createDto);
// //   }
// // }

// @Injectable()
// export class UsersService {
//   constructor(private prisma: PrismaService) {}

//   async user(
//     userWhereUniqueInput: Prisma.UserWhereUniqueInput,
//   ): Promise<User | null> {
//     return this.prisma.user.findUnique({
//       where: userWhereUniqueInput,
//     });
//   }

//   async users(params: {
//     skip?: number;
//     take?: number;
//     cursor?: Prisma.UserWhereUniqueInput;
//     where?: Prisma.UserWhereInput;
//     orderBy?: Prisma.UserOrderByWithRelationInput;
//   }): Promise<User []> {
//     const { skip, take, cursor, where, orderBy } = params;
//     return this.prisma.user.findMany({
//       skip,
//       take,
//       cursor,
//       where,
//       orderBy,
//     });
//   }

//   async createUser(data: Prisma.UserCreateInput): Promise<User> {
//     return this.prisma.user.create({
//       data,
//     });
//   }

//   async updateUser(params: {
//     where: Prisma.UserWhereUniqueInput;
//     data: Prisma.UserUpdateInput;
//   }): Promise<User> {
//     const { where, data } = params;
//     return this.prisma.user.update({
//       data,
//       where,
//     });
//   }

//   async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
//     return this.prisma.user.delete({
//       where,
//     });
//   }
// }

@Injectable()
export class UsersService implements UsersServiceItf {
  constructor(
    @Inject(UserRepositoryToken)
    private readonly userRepository: UsersRepositoryItf,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  getUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  getUserByUsername(username: string): Promise<User | null> {
    return this.userRepository.findByUsername(username);
  }

  getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  createUser(user: Omit<User, 'id'>): Promise<User> {
    return this.userRepository.create(user);
  }

  updateUser(id: number, user: Partial<Omit<User, 'id'>>): Promise<User> {
    return this.userRepository.update(id, user);
  }

  deleteUser(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}