import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(): User[] {
        return this.usersService.listUsers();
    }

    @Get(':username')
    async getUserByUsername(@Param('username') username: string): Promise<User> {
        const userByUsername = await this.usersService.userByUsername(username);
        if (!userByUsername) {
            throw new Error('User not found');
        }
        return userByUsername;
    }

    @Post()
    createUser(
        @Body('username') username: string,
        @Body('password') password: string,
        @Body('email') email: string,
        @Body('isActive') isActive: boolean
    ): User {
        return this.usersService.createUser(username, password, email, isActive);
    }
}
