import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsLetterDto } from './dto/create-news-letter.dto';
import { UpdateNewsLetterDto } from './dto/update-news-letter.dto';
import { Newsletter } from './entities/news-letter.entity';

@Injectable()
export class NewsLetterService {
  constructor(
    @InjectRepository(Newsletter)
    private readonly newsletterRepository: Repository<Newsletter>,
  ) {}

  async create(createNewsLetterDto: CreateNewsLetterDto): Promise<Newsletter> {
    const newSubscriber = this.newsletterRepository.create(createNewsLetterDto);
    return this.newsletterRepository.save(newSubscriber);
  }

  async findAll(): Promise<Newsletter[]> {
    return this.newsletterRepository.find();
  }

  async findOne(id: number): Promise<Newsletter> {
    const subscriber = await this.newsletterRepository.findOne({ where: { iNewsLetterId: id } });
    if (!subscriber) {
      throw new NotFoundException(`Newsletter subscriber with ID #${id} not found`);
    }
    return subscriber;
  }

  async update(id: number, updateNewsLetterDto: UpdateNewsLetterDto): Promise<Newsletter> {
    const subscriber = await this.findOne(id);
    this.newsletterRepository.merge(subscriber, updateNewsLetterDto);
    return this.newsletterRepository.save(subscriber);
  }

  async remove(id: number): Promise<void> {
    const result = await this.newsletterRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Newsletter subscriber with ID #${id} not found`);
    }
  }
}