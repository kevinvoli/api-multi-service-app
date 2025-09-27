import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateObjectRealisationDto } from './dto/create-object-realisation.dto';
import { UpdateObjectRealisationDto } from './dto/update-object-realisation.dto';
import { ObjectRealisations } from './entities/object-realisation.entity';

@Injectable()
export class ObjectRealisationService {
  constructor(
    @InjectRepository(ObjectRealisations)
    private readonly objectRealisationRepository: Repository<ObjectRealisations>,
  ) {}

  create(createObjectRealisationDto: CreateObjectRealisationDto) {
    const realisation = this.objectRealisationRepository.create(createObjectRealisationDto);
    return this.objectRealisationRepository.save(realisation);
  }

  findAll() {
    return this.objectRealisationRepository.find();
  }

  async findOne(id: number) {
    const realisation = await this.objectRealisationRepository.findOne({ where: { id } });
    if (!realisation) {
      throw new NotFoundException(`ObjectRealisation with ID ${id} not found`);
    }
    return realisation;
  }

  async update(id: number, updateObjectRealisationDto: UpdateObjectRealisationDto) {
    const realisation = await this.objectRealisationRepository.preload({
      id,
      ...updateObjectRealisationDto,
    });
    if (!realisation) {
      throw new NotFoundException(`ObjectRealisation with ID ${id} not found`);
    }
    return this.objectRealisationRepository.save(realisation);
  }

  async remove(id: number) {
    const result = await this.objectRealisationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`ObjectRealisation with ID ${id} not found`);
    }
    return { deleted: true };
  }
}