import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverDocDto } from './dto/create-driver-doc.dto';
import { UpdateDriverDocDto } from './dto/update-driver-doc.dto';
import { DriverDoc } from './entities/driver-doc.entity';

@Injectable()
export class DriverDocService {
  constructor(
    @InjectRepository(DriverDoc)
    private readonly driverDocRepository: Repository<DriverDoc>,
  ) {}
  async create(createDriverDocDto: CreateDriverDocDto): Promise<DriverDoc> {
    const newDoc = this.driverDocRepository.create(createDriverDocDto);
    return await this.driverDocRepository.save(newDoc);
  }

  async findAll(): Promise<DriverDoc[]> {
    return await this.driverDocRepository.find();
  }

  async findOne(id: number): Promise<DriverDoc> {
    const doc = await this.driverDocRepository.findOne({ where: { iDriverDocId: id } });
    if (!doc) {
      throw new NotFoundException(`Driver document with ID "${id}" not found`);
    }
    return doc;
  }

  async update(id: number, updateDriverDocDto: UpdateDriverDocDto): Promise<DriverDoc> {
    const doc = await this.driverDocRepository.preload({
      iDriverDocId: id,
      ...updateDriverDocDto,
    });
    if (!doc) {
      throw new NotFoundException(`Driver document with ID "${id}" not found`);
    }
    return this.driverDocRepository.save(doc);
  }

  async remove(id: number): Promise<DriverDoc> {
    const doc = await this.findOne(id);
    return await this.driverDocRepository.remove(doc);
  }
}
