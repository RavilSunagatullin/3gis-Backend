import { Controller, Post,Get, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  async createUser(@Body() body: { username: string, password: string }) {
    return this.usersService.createUser(body.username, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(){
      return this.usersService.getAllUser()
  }

  @Get('/:value')
  findById(@Param('value') value:number){
    return this.usersService.findById(value);
  }

  

}
