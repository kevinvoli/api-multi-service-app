import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RentalPackage } from './entities/rental-package.entity';
import { CreateRentalPackageDto } from './dto/create-rental-package.dto';
import { UpdateRentalPackageDto } from './dto/update-rental-package.dto';

@Injectable()
export class RentalPackageService {
  constructor(
    @InjectRepository(RentalPackage)
    private readonly repository: Repository<RentalPackage>,
  ) {}

  async create(createDto: CreateRentalPackageDto): Promise<RentalPackage> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<RentalPackage[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<RentalPackage> {
    const entity = await this.repository.findOneBy({ iRentalPackageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateRentalPackageDto): Promise<RentalPackage> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
