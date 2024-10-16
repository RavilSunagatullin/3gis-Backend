import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() user:User){
        return this.authService.login(user.username, user.password);
    }

    @Post('/register')
    registration(@Body() guests: User){
        return this.authService.registration(guests);
    }
}