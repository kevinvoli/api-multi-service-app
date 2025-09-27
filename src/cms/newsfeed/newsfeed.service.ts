import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsfeedDto } from './dto/create-newsfeed.dto';
import { UpdateNewsfeedDto } from './dto/update-newsfeed.dto';
import { Newsfeed } from './entities/newsfeed.entity';

@Injectable()
export class NewsfeedService {
  constructor(
    @InjectRepository(Newsfeed)
    private readonly newsfeedRepository: Repository<Newsfeed>,
  ) {}

  async create(createNewsfeedDto: CreateNewsfeedDto): Promise<Newsfeed> {
    const newNewsfeed = this.newsfeedRepository.create(createNewsfeedDto);
    return this.newsfeedRepository.save(newNewsfeed);
  }

  async findAll(): Promise<Newsfeed[]> {
    return this.newsfeedRepository.find();
  }

  async findOne(id: number): Promise<Newsfeed> {
    const newsfeed = await this.newsfeedRepository.findOne({ where: { iNewsfeedId: id } });
    if (!newsfeed) {
      throw new NotFoundException(`Newsfeed item with ID #${id} not found`);
    }
    return newsfeed;
  }

  async update(id: number, updateNewsfeedDto: UpdateNewsfeedDto): Promise<Newsfeed> {
    const newsfeed = await this.findOne(id);
    this.newsfeedRepository.merge(newsfeed, updateNewsfeedDto);
    return this.newsfeedRepository.save(newsfeed);
  }

  async remove(id: number): Promise<void> {
    const result = await this.newsfeedRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Newsfeed item with ID #${id} not found`);
    }
  }
}