import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OdaCommunes } from './entities/oda-commune.entity';
import { CreateOdaCommuneDto } from './dto/create-oda-commune.dto';
import { UpdateOdaCommuneDto } from './dto/update-oda-commune.dto';

@Injectable()
export class OdaCommunesService {
  constructor(
    @InjectRepository(OdaCommunes)
    private readonly repository: Repository<OdaCommunes>,
  ) {}

  async create(createDto: CreateOdaCommuneDto): Promise<OdaCommunes> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<OdaCommunes[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<OdaCommunes> {
    const entity = await this.repository.findOneBy({ communeId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateOdaCommuneDto): Promise<OdaCommunes> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
