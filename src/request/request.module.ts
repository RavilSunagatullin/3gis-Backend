import {forwardRef, Module} from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { Request } from './request.entity';
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [SequelizeModule.forFeature([Request]),
    forwardRef(() => AuthModule)],
  providers: [RequestService],
  controllers: [RequestController],
  exports: [RequestService], 
})
export class RequestModule {}
