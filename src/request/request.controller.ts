import { Controller, Post,Get, Body, UseGuards } from '@nestjs/common';
import { RequestService } from './request.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  async create(@Body() body: { query: string }) { 
    return this.requestService.createRequest(body.query);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(){
    return this.requestService.getAllRequest();
  }
}