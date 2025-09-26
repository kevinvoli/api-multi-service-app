import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { State } from './entities/state.entity';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>,
  ) {}

  async create(createStateDto: CreateStateDto): Promise<State> {
    const state = this.stateRepository.create(createStateDto);
    return await this.stateRepository.save(state);
  }

  async findAll(): Promise<State[]> {
    return await this.stateRepository.find();
  }

  async findOne(id: number): Promise<State> {
    const state = await this.stateRepository.findOneBy({ iStateId: id });
    if (!state) {
      throw new NotFoundException(`State with ID #${id} not found`);
    }
    return state;
  }

  async update(id: number, updateStateDto: UpdateStateDto): Promise<State> {
    const state = await this.stateRepository.preload({
      iStateId: id,
      ...updateStateDto,
    });
    if (!state) {
      throw new NotFoundException(`State with ID #${id} not found`);
    }
    return await this.stateRepository.save(state);
  }

  async remove(id: number): Promise<State> {
    const state = await this.findOne(id);
    await this.stateRepository.remove(state);
    return state;
  }
}