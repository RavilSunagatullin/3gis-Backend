import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersRepository: typeof User,
  ) {}

  async createUser(username: string, password: string) {
    const newUser = {
      username,
      password
    };
    return this.usersRepository.create(newUser);
  }

  async getAllUser() {
    const users = await this.usersRepository.findAll({include:{all:true}});
    return users
  }

  async findById(id: number){
    return this.usersRepository.findOne({where:{id}})
  }
  async getUserByName(username: string){
    return this.usersRepository.findOne({where:{username},include:{all:true}})
  }

 }
