// import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { User } from './entities/user.entity';
// import { plainToInstance } from 'class-transformer';
// import { CreateUserDto } from './dto/create-user.input';

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./entities/user.entity";

// @Controller('users')
// export class UsersController {
//     constructor(private readonly usersService: UsersService) {}

//     @Get()
//     async getUsers(): Promise<User[]> {
//         const users = await this.usersService.listUsers();

//         return plainToInstance(User, users, { excludeExtraneousValues: true });
//     }

//     @Get(':username')
//     async getUserByUsername(@Param('username') username: string): Promise<User> {
//         const userByUsername = await this.usersService.userByUsername(username);
//         if (!userByUsername) {
//             throw new Error('User not found');
//         }
//         return plainToInstance(User, this.usersService, { excludeExtraneousValues: true });
//     }

//     @Post()
//     async createUser(
//         @Body(new ValidationPipe()) createDto: CreateUserDto,
//     ) {
//         const newUser = await this.usersService.createUser(createDto);
//         return plainToInstance(User, newUser, { excludeExtraneousValues: true });
//     }
// }

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAll(): Promise<User[]> {
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<User | null> {
        return this.usersService.getUserById(Number(id));
    }

    @Post()
    create(@Body() user: Omit<User, 'id'>): Promise<User> {
        return this.usersService.createUser(user);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() user: Partial<Omit<User, 'id'>>,
    ): Promise<User> {
        return this.usersService.updateUser(Number(id), user);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.usersService.deleteUser(Number(id));
    }
}