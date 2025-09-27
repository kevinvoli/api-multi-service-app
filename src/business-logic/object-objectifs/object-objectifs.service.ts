import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateObjectObjectifDto } from './dto/create-object-objectif.dto';
import { UpdateObjectObjectifDto } from './dto/update-object-objectif.dto';
import { ObjectObjectifs } from './entities/object-objectif.entity';

@Injectable()
export class ObjectObjectifsService {
  constructor(
    @InjectRepository(ObjectObjectifs)
    private readonly objectObjectifRepository: Repository<ObjectObjectifs>,
  ) {}

  create(createObjectObjectifDto: CreateObjectObjectifDto) {
    const objectif = this.objectObjectifRepository.create(createObjectObjectifDto);
    return this.objectObjectifRepository.save(objectif);
  }

  findAll() {
    return this.objectObjectifRepository.find();
  }

  async findOne(id: number) {
    const objectif = await this.objectObjectifRepository.findOne({ where: { id } });
    if (!objectif) {
      throw new NotFoundException(`ObjectObjectif with ID ${id} not found`);
    }
    return objectif;
  }

  async update(id: number, updateObjectObjectifDto: UpdateObjectObjectifDto) {
    const objectif = await this.objectObjectifRepository.preload({
      id,
      ...updateObjectObjectifDto,
    });
    if (!objectif) {
      throw new NotFoundException(`ObjectObjectif with ID ${id} not found`);
    }
    return this.objectObjectifRepository.save(objectif);
  }

  async remove(id: number) {
    const result = await this.objectObjectifRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ObjectObjectif with ID ${id} not found`);
    }
    return { deleted: true };
  }
}