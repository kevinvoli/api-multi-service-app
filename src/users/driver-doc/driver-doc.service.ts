import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverDoc } from './entities/driver-doc.entity';
import { CreateDriverDocDto } from './dto/create-driver-doc.dto';
import { UpdateDriverDocDto } from './dto/update-driver-doc.dto';

@Injectable()
export class DriverDocService {
  constructor(
    @InjectRepository(DriverDoc)
    private readonly repository: Repository<DriverDoc>,
  ) {}

  async create(createDto: CreateDriverDocDto): Promise<DriverDoc> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverDoc[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverDoc> {
    const entity = await this.repository.findOneBy({ iDriverDocId: id });
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverDocDto): Promise<DriverDoc> {
    const { iDriverDocId, ...changes } = updateDto;
    await this.repository.update({ iDriverDocId: id }, changes);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete({ iDriverDocId: id });
  }
}
