import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIntentionDto } from './dto/create-intention.dto';
import { UpdateIntentionDto } from './dto/update-intention.dto';
import { Intentions } from './entities/intention.entity';

@Injectable()
export class IntentionsService {
  constructor(
    @InjectRepository(Intentions)
    private readonly intentionRepository: Repository<Intentions>,
  ) {}

  create(createIntentionDto: CreateIntentionDto) {
    const intention = this.intentionRepository.create(createIntentionDto);
    return this.intentionRepository.save(intention);
  }

  findAll() {
    return this.intentionRepository.find();
  }

  async findOne(id: number) {
    const intention = await this.intentionRepository.findOne({ where: { id } });
    if (!intention) {
      throw new NotFoundException(`Intention with ID ${id} not found`);
    }
    return intention;
  }

  async update(id: number, updateIntentionDto: UpdateIntentionDto) {
    const intention = await this.intentionRepository.preload({
      id,
      ...updateIntentionDto,
    });
    if (!intention) {
      throw new NotFoundException(`Intention with ID ${id} not found`);
    }
    return this.intentionRepository.save(intention);
  }

  async remove(id: number) {
    const result = await this.intentionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Intention with ID ${id} not found`);
    }
    return { deleted: true };
  }
}