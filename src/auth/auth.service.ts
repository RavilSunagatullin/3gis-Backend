import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  
  async registration(guests: User) {
    const candidate = await this.usersService.getUserByName(guests.username);
    if (candidate) {
        throw new HttpException('Пользователь с таким именем существует', HttpStatus.BAD_REQUEST);
    }
    const hashPassword = await bcrypt.hash(guests.password, 10);
    const user = await this.usersService.createUser(guests.username, hashPassword)
    return this.login(guests.username, guests.password);
    }


  async validateUser(username:string, password:string) {
    const user = await this.usersService.getUserByName(username);
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if(!user || !isPasswordMatching) {
        throw new UnauthorizedException({ message: 'Некорректный пароль или имя ' });
    }

    const { password: _, ...result } = user;
    return result;
  }

  private async generateToken(user:any) {
    const payload = {  username: user.username, password: user.password };
    return {
      token: this.jwtService.sign(payload), 
    };
  }


  async login(username:string, password:string) {
    const userCheck = await this.validateUser(username, password);
    return this.generateToken(userCheck);
  }
}
