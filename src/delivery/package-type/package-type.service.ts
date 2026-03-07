import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackageType } from './entities/package-type.entity';
import { CreatePackageTypeDto } from './dto/create-package-type.dto';
import { UpdatePackageTypeDto } from './dto/update-package-type.dto';

@Injectable()
export class PackageTypeService {
  constructor(
    @InjectRepository(PackageType)
    private readonly repository: Repository<PackageType>,
  ) {}

  async create(createDto: CreatePackageTypeDto): Promise<PackageType> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<PackageType[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<PackageType> {
    const entity = await this.repository.findOneBy({ iPackageTypeId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdatePackageTypeDto): Promise<PackageType> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
