import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateObjectProspectionDto } from './dto/create-object-prospection.dto';
import { UpdateObjectProspectionDto } from './dto/update-object-prospection.dto';
import { ObjectProspections } from './entities/object-prospection.entity';

@Injectable()
export class ObjectProspectionsService {
  constructor(
    @InjectRepository(ObjectProspections)
    private readonly objectProspectionRepository: Repository<ObjectProspections>,
  ) {}

  create(createObjectProspectionDto: CreateObjectProspectionDto) {
    const prospection = this.objectProspectionRepository.create(createObjectProspectionDto);
    return this.objectProspectionRepository.save(prospection);
  }

  findAll() {
    return this.objectProspectionRepository.find();
  }

  async findOne(id: number) {
    const prospection = await this.objectProspectionRepository.findOne({ where: { id } });
    if (!prospection) {
      throw new NotFoundException(`ObjectProspection with ID ${id} not found`);
    }
    return prospection;
  }

  async update(id: number, updateObjectProspectionDto: UpdateObjectProspectionDto) {
    const prospection = await this.objectProspectionRepository.preload({
      id,
      ...updateObjectProspectionDto,
    });
    if (!prospection) {
      throw new NotFoundException(`ObjectProspection with ID ${id} not found`);
    }
    return this.objectProspectionRepository.save(prospection);
  }

  async remove(id: number) {
    const result = await this.objectProspectionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ObjectProspection with ID ${id} not found`);
    }
    return { deleted: true };
  }
}