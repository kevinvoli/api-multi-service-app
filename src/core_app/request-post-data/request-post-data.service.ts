import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRequestPostDatumDto } from './dto/create-request-post-datum.dto';
import { UpdateRequestPostDatumDto } from './dto/update-request-post-datum.dto';
import { RequestPostData } from './entities/request-post-datum.entity';

@Injectable()
export class RequestPostDataService {
  constructor(
    @InjectRepository(RequestPostData)
    private readonly requestPostDataRepository: Repository<RequestPostData>,
  ) {}

  create(createRequestPostDatumDto: CreateRequestPostDatumDto): Promise<RequestPostData> {
    const requestPostData = this.requestPostDataRepository.create(createRequestPostDatumDto);
    return this.requestPostDataRepository.save(requestPostData);
  }

  findAll(): Promise<RequestPostData[]> {
    return this.requestPostDataRepository.find();
  }

  async findOne(id: number): Promise<RequestPostData> {
    const requestPostData = await this.requestPostDataRepository.findOne({ where: { iRequestPostId: id } });
    if (!requestPostData) {
      throw new NotFoundException(`RequestPostData with ID #${id} not found`);
    }
    return requestPostData;
  }

  async update(id: number, updateRequestPostDatumDto: UpdateRequestPostDatumDto): Promise<RequestPostData> {
    await this.findOne(id); // will throw error if not found
    await this.requestPostDataRepository.update(id, updateRequestPostDatumDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.requestPostDataRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`RequestPostData with ID #${id} not found`);
    }
  }
}