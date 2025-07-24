// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { User } from 'src/users/entities/user.entity';
// import { UsersService } from 'src/users/users.service';

// @Injectable()
// export class AuthService {
//     constructor(
//         private usersService: UsersService,
//         private jwtService: JwtService    
//     ) {}

//     // async validateUser(username: string, pass: string): Promise<any> {
//     //     const user = await this.usersService.userByUsername(username);
//     //     if (user && user.password === pass) {
//     //         const { password, ...result } = user;
//     //         return result;
//     //     }
//     //     return null;
//     // }

//     // async login(user: any) {
//     //     const payload = { username: user.username, sub: user.id };
//     //     return {
//     //         access_token: this.jwtService.sign(payload),
//     //     }
//     // }

//     async validateUser(username: string, password: string): Promise<User | null> {
//         const user = await this.usersService.userByUsername(username);
//         if (user && (await bcrypt.compare(password, user.password))) {
//             return user;
//         }
//         return null;
//     }

//     login(user: User) {
//         const payload = { username: user.username, sub: user.id };
//         return {
//             access_token: this.jwtService.sign(payload),
//             user: {
//                 id: user.id,
//                 username: user.username,
//                 email: user.email,
//             },
//         };
//     }

//     async register( username: string, email: string, password: string) {
//         const existingUser = await this.usersService.userByUsername(username);
//         if (existingUser) {
//             throw new UnauthorizedException('User already exists');
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = await this.usersService.createUser({
//             username,
//             email,
//             password: hashedPassword,
//         });

//         const { password: _unused, ...result } = user;
//         return result;
//     }
// }

import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(userData: Omit<User, 'id'>): Promise<{ message: string }> {
    const existingUser = await this.usersService.getUserByEmail(userData.email);
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await this.usersService.createUser({ ...userData, password: hashedPassword });
    return { message: 'User registered successfully' };
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.getUserByUsername(username);
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return user;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = { sub: user.id, username: user.username, email: user.email };
    const access_token = await this.jwtService.signAsync(payload);
    return { access_token };
  }
}
