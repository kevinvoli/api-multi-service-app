import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RequestPostData } from './entities/request-post-datum.entity';
import { CreateRequestPostDatumDto } from './dto/create-request-post-datum.dto';
import { UpdateRequestPostDatumDto } from './dto/update-request-post-datum.dto';

@Injectable()
export class RequestPostDataService {
  constructor(
    @InjectRepository(RequestPostData)
    private readonly repository: Repository<RequestPostData>,
  ) {}

  async create(createDto: CreateRequestPostDatumDto): Promise<RequestPostData> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<RequestPostData[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RequestPostData> {
    const entity = await this.repository.findOneBy({ iRequestPostId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateRequestPostDatumDto): Promise<RequestPostData> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
