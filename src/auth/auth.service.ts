import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService    
    ) {}

    // async validateUser(username: string, pass: string): Promise<any> {
    //     const user = await this.usersService.userByUsername(username);
    //     if (user && user.password === pass) {
    //         const { password, ...result } = user;
    //         return result;
    //     }
    //     return null;
    // }

    // async login(user: any) {
    //     const payload = { username: user.username, sub: user.id };
    //     return {
    //         access_token: this.jwtService.sign(payload),
    //     }
    // }

    async validateUser(username: string, password: string): Promise<User | null> {
        const user = await this.usersService.userByUsername(username);
        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        }
        return null;
    }

    login(user: User) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        };
    }

    async register( username: string, email: string, password: string) {
        const existingUser = await this.usersService.userByUsername(username);
        if (existingUser) {
            throw new UnauthorizedException('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await this.usersService.createUser({
            username,
            email,
            password: hashedPassword,
        });

        const { password: _unused, ...result } = user;
        return result;
    }
}
