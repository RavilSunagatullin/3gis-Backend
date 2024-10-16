import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize'
import {Request} from './request.entity';

@Injectable()
export class RequestService {
  constructor(
    @InjectModel(Request)
    private requestRepository: typeof Request,
  ) {}

  async createRequest(query: string): Promise<Request> {
    const newRequest = { query };
      return await this.requestRepository.create(newRequest);
  }
  async getAllRequest() {
    return await this.requestRepository.findAll({include: {all: true}})
  }
 }

