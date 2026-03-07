import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MasterServiceCategory } from './entities/master-service-category.entity';
import { CreateMasterServiceCategoryDto } from './dto/create-master-service-category.dto';
import { UpdateMasterServiceCategoryDto } from './dto/update-master-service-category.dto';

@Injectable()
export class MasterServiceCategoryService {
  constructor(
    @InjectRepository(MasterServiceCategory)
    private readonly repository: Repository<MasterServiceCategory>,
  ) {}

  async create(createDto: CreateMasterServiceCategoryDto): Promise<MasterServiceCategory> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MasterServiceCategory[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MasterServiceCategory> {
    const entity = await this.repository.findOneBy({ iMasterServiceCategoryId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMasterServiceCategoryDto): Promise<MasterServiceCategory> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
