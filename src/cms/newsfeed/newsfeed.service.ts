import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Newsletter } from './entities/newsfeed.entity';
import { CreateNewsfeedDto } from './dto/create-newsfeed.dto';
import { UpdateNewsfeedDto } from './dto/update-newsfeed.dto';

@Injectable()
export class NewsfeedService {
  constructor(
    @InjectRepository(Newsletter)
    private readonly repository: Repository<Newsletter>,
  ) {}

  async create(createDto: CreateNewsfeedDto): Promise<Newsletter> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<Newsletter[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Newsletter> {
    const entity = await this.repository.findOneBy({ iNewsLetterId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateNewsfeedDto): Promise<Newsletter> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
