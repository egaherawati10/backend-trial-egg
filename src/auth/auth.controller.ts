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
            return this.authService.register( body.email, body.username, body.password);
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