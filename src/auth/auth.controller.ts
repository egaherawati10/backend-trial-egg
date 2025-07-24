import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/users/entities/user.entity";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(
        @Body() body: { 
            name: string;
            username: string; 
            email: string;
            password: string }, 
        ) {
            return this.authService.register(body);
        }

        @UseGuards(LocalAuthGuard)
        @Post('login')
        login(@Request() req: { user: User }) {
            return this.authService.login(req.user);
        }

        @UseGuards(JwtAuthGuard)
        @Get('profile')
        getProfile(@Request() req: { user: User }) {
            return req.user;
        }
}

// import {
//   Controller,
//   Post,
//   Body,
//   UseGuards,
//   Request,
// } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { RegisterDto } from './dto/register.dto';
// import { LocalAuthGuard } from './local-auth.guard';
// import { LoginDto } from './dto/login.dto';


// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('register')
//   async register(@Body() dto: RegisterDto) {
//     return this.authService.register(dto);
//   }

//   @UseGuards(LocalAuthGuard)
//   @Post('login')
//   async login(@Request() req: any, @Body() _dto: LoginDto) {
//     // req.user is attached by LocalStrategy after validation
//     return this.authService.login(req.user);
//   }
// }
