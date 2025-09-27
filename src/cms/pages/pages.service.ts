import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Pages } from './entities/page.entity';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Pages)
    private readonly pagesRepository: Repository<Pages>,
  ) {}

  async create(createPageDto: CreatePageDto): Promise<Pages> {
    const newPage = this.pagesRepository.create(createPageDto);
    return this.pagesRepository.save(newPage);
  }

  async findAll(): Promise<Pages[]> {
    return this.pagesRepository.find();
  }

  async findOne(id: number): Promise<Pages> {
    const page = await this.pagesRepository.findOne({ where: { iPageId: id } });
    if (!page) {
      throw new NotFoundException(`Page with ID #${id} not found`);
    }
    return page;
  }

  async update(id: number, updatePageDto: UpdatePageDto): Promise<Pages> {
    const page = await this.findOne(id);
    this.pagesRepository.merge(page, updatePageDto);
    return this.pagesRepository.save(page);
  }

  async remove(id: number): Promise<void> {
    const result = await this.pagesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Page with ID #${id} not found`);
    }
  }
}