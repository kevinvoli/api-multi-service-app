import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequestDataDebugDto } from './dto/create-request-data-debug.dto';
import { UpdateRequestDataDebugDto } from './dto/update-request-data-debug.dto';
import { RequestDataDebug } from './entities/request-data-debug.entity';

@Injectable()
export class RequestDataDebugService {
  constructor(
    @InjectRepository(RequestDataDebug)
    private readonly requestDataDebugRepository: Repository<RequestDataDebug>,
  ) {}

  create(createRequestDataDebugDto: CreateRequestDataDebugDto): Promise<RequestDataDebug> {
    const requestDataDebug = this.requestDataDebugRepository.create(createRequestDataDebugDto);
    return this.requestDataDebugRepository.save(requestDataDebug);
  }

  findAll(): Promise<RequestDataDebug[]> {
    return this.requestDataDebugRepository.find();
  }

  async findOne(id: number): Promise<RequestDataDebug> {
    const requestDataDebug = await this.requestDataDebugRepository.findOne({ where: { iRequestData: id } });
    if (!requestDataDebug) {
      throw new NotFoundException(`RequestDataDebug with ID #${id} not found`);
    }
    return requestDataDebug;
  }

  async update(id: number, updateRequestDataDebugDto: UpdateRequestDataDebugDto): Promise<RequestDataDebug> {
    await this.findOne(id); // will throw error if not found
    await this.requestDataDebugRepository.update(id, updateRequestDataDebugDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.requestDataDebugRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`RequestDataDebug with ID #${id} not found`);
    }
  }
}