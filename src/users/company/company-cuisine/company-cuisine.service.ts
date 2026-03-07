import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyCuisine } from './entities/company-cuisine.entity';
import { CreateCompanyCuisineDto } from './dto/create-company-cuisine.dto';
import { UpdateCompanyCuisineDto } from './dto/update-company-cuisine.dto';

@Injectable()
export class CompanyCuisineService {
  constructor(
    @InjectRepository(CompanyCuisine)
    private readonly repository: Repository<CompanyCuisine>,
  ) {}

  async create(createDto: CreateCompanyCuisineDto): Promise<CompanyCuisine> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<CompanyCuisine[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CompanyCuisine> {
    const entity = await this.repository.findOneBy({ ccId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateCompanyCuisineDto): Promise<CompanyCuisine> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
