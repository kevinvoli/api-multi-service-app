import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServiceCategoryDto } from './dto/create-service-category.dto';
import { UpdateServiceCategoryDto } from './dto/update-service-category.dto';
import { ServiceCategories } from './entities/service-category.entity';

@Injectable()
export class ServiceCategoriesService {
  constructor(
    @InjectRepository(ServiceCategories)
    private readonly serviceCategoriesRepository: Repository<ServiceCategories>,
  ) {}

  create(createServiceCategoryDto: CreateServiceCategoryDto): Promise<ServiceCategories> {
    const serviceCategory = this.serviceCategoriesRepository.create(createServiceCategoryDto);
    return this.serviceCategoriesRepository.save(serviceCategory);
  }

  findAll(): Promise<ServiceCategories[]> {
    return this.serviceCategoriesRepository.find();
  }

  async findOne(id: number): Promise<ServiceCategories> {
    const serviceCategory = await this.serviceCategoriesRepository.findOne({ where: { iServiceId: id } });
    if (!serviceCategory) {
      throw new NotFoundException(`ServiceCategory with ID #${id} not found`);
    }
    return serviceCategory;
  }

  async update(id: number, updateServiceCategoryDto: UpdateServiceCategoryDto): Promise<ServiceCategories> {
    await this.findOne(id); // will throw error if not found
    await this.serviceCategoriesRepository.update(id, updateServiceCategoryDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.serviceCategoriesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ServiceCategory with ID #${id} not found`);
    }
  }
}