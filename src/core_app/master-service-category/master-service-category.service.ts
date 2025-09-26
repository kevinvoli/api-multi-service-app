import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMasterServiceCategoryDto } from './dto/create-master-service-category.dto';
import { UpdateMasterServiceCategoryDto } from './dto/update-master-service-category.dto';
import { MasterServiceCategory } from './entities/master-service-category.entity';

@Injectable()
export class MasterServiceCategoryService {
  constructor(
    @InjectRepository(MasterServiceCategory)
    private readonly masterServiceCategoryRepository: Repository<MasterServiceCategory>,
  ) {}

  create(createMasterServiceCategoryDto: CreateMasterServiceCategoryDto): Promise<MasterServiceCategory> {
    const masterServiceCategory = this.masterServiceCategoryRepository.create(createMasterServiceCategoryDto);
    return this.masterServiceCategoryRepository.save(masterServiceCategory);
  }

  findAll(): Promise<MasterServiceCategory[]> {
    return this.masterServiceCategoryRepository.find();
  }

  async findOne(id: number): Promise<MasterServiceCategory> {
    const masterServiceCategory = await this.masterServiceCategoryRepository.findOne({ where: { iMasterServiceCategoryId: id } });
    if (!masterServiceCategory) {
      throw new NotFoundException(`MasterServiceCategory with ID #${id} not found`);
    }
    return masterServiceCategory;
  }

  async update(id: number, updateMasterServiceCategoryDto: UpdateMasterServiceCategoryDto): Promise<MasterServiceCategory> {
    await this.findOne(id); // will throw error if not found
    await this.masterServiceCategoryRepository.update(id, updateMasterServiceCategoryDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.masterServiceCategoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`MasterServiceCategory with ID #${id} not found`);
    }
  }
}