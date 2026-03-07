import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PrescriptionImages } from './entities/prescription-image.entity';
import { CreatePrescriptionImageDto } from './dto/create-prescription-image.dto';
import { UpdatePrescriptionImageDto } from './dto/update-prescription-image.dto';

@Injectable()
export class PrescriptionImagesService {
  constructor(
    @InjectRepository(PrescriptionImages)
    private readonly repository: Repository<PrescriptionImages>,
  ) {}

  async create(createDto: CreatePrescriptionImageDto): Promise<PrescriptionImages> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<PrescriptionImages[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<PrescriptionImages> {
    const entity = await this.repository.findOneBy({ iImageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdatePrescriptionImageDto): Promise<PrescriptionImages> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
