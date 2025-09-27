import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { Model } from './entities/model.entity';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
  ) {}

  async create(createModelDto: CreateModelDto): Promise<Model> {
    const model = this.modelRepository.create(createModelDto);
    return await this.modelRepository.save(model);
  }

  async findAll(): Promise<Model[]> {
    return await this.modelRepository.find({
      where: { eStatus: 'Active' },
    });
  }

  async findOne(id: number): Promise<Model> {
    const model = await this.modelRepository.findOne({ where: { iModelId: id } });
    if (!model) {
      throw new NotFoundException(`Model with ID #${id} not found`);
    }
    return model;
  }

  async update(id: number, updateModelDto: UpdateModelDto): Promise<Model> {
    const model = await this.findOne(id);
    this.modelRepository.merge(model, updateModelDto);
    return await this.modelRepository.save(model);
  }

  async remove(id: number): Promise<{ message: string }> {
    const model = await this.findOne(id);
    model.eStatus = 'Deleted';
    await this.modelRepository.save(model);
    return { message: `Model with ID #${id} has been successfully deleted.` };
  }
}