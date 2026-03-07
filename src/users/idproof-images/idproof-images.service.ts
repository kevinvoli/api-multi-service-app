import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdproofImages } from './entities/idproof-image.entity';
import { CreateIdproofImageDto } from './dto/create-idproof-image.dto';
import { UpdateIdproofImageDto } from './dto/update-idproof-image.dto';

@Injectable()
export class IdproofImagesService {
  constructor(
    @InjectRepository(IdproofImages)
    private readonly repository: Repository<IdproofImages>,
  ) {}

  async create(createDto: CreateIdproofImageDto): Promise<IdproofImages> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<IdproofImages[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<IdproofImages> {
    const entity = await this.repository.findOneBy({ iImageId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateIdproofImageDto): Promise<IdproofImages> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
