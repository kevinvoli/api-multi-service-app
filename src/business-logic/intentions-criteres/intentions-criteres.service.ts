import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIntentionsCritereDto } from './dto/create-intentions-critere.dto';
import { UpdateIntentionsCritereDto } from './dto/update-intentions-critere.dto';
import { IntentionsCriteres } from './entities/intentions-critere.entity';

@Injectable()
export class IntentionsCriteresService {
  constructor(
    @InjectRepository(IntentionsCriteres)
    private readonly intentionsCritereRepository: Repository<IntentionsCriteres>,
  ) {}

  create(createIntentionsCritereDto: CreateIntentionsCritereDto) {
    const critere = this.intentionsCritereRepository.create(createIntentionsCritereDto);
    return this.intentionsCritereRepository.save(critere);
  }

  findAll() {
    return this.intentionsCritereRepository.find();
  }

  async findOne(id: number) {
    const critere = await this.intentionsCritereRepository.findOne({ where: { id } });
    if (!critere) {
      throw new NotFoundException(`IntentionsCritere with ID ${id} not found`);
    }
    return critere;
  }

  async update(id: number, updateIntentionsCritereDto: UpdateIntentionsCritereDto) {
    const critere = await this.intentionsCritereRepository.preload({
      id,
      ...updateIntentionsCritereDto,
    });
    if (!critere) {
      throw new NotFoundException(`IntentionsCritere with ID ${id} not found`);
    }
    return this.intentionsCritereRepository.save(critere);
  }

  async remove(id: number) {
    const result = await this.intentionsCritereRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`IntentionsCritere with ID ${id} not found`);
    }
    return { deleted: true };
  }
}