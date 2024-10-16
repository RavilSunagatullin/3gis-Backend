import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { dataBaseConfig } from '../../database'
import { UsersModule } from 'src/users/users.module'
import { AuthModule } from 'src/auth/auth.module'
import {RequestModule} from "../request/request.module";

@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig), AuthModule , UsersModule, RequestModule],
  controllers: [AppController],
  providers: [AppService],


})
export class AppModule {}
