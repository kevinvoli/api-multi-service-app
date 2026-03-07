import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Newsfeed } from './entities/news-letter.entity';
import { CreateNewsLetterDto } from './dto/create-news-letter.dto';
import { UpdateNewsLetterDto } from './dto/update-news-letter.dto';

@Injectable()
export class NewsLetterService {
  constructor(
    @InjectRepository(Newsfeed)
    private readonly repository: Repository<Newsfeed>,
  ) {}

  async create(createDto: CreateNewsLetterDto): Promise<Newsfeed> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<Newsfeed[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Newsfeed> {
    const entity = await this.repository.findOneBy({ iNewsfeedId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateNewsLetterDto): Promise<Newsfeed> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
