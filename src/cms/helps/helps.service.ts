import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHelpDto } from './dto/create-help.dto';
import { UpdateHelpDto } from './dto/update-help.dto';
import { Helps } from './entities/help.entity';

@Injectable()
export class HelpsService {
  constructor(
    @InjectRepository(Helps)
    private readonly helpsRepository: Repository<Helps>,
  ) {}

  async create(createHelpDto: CreateHelpDto): Promise<Helps> {
    const newHelp = this.helpsRepository.create(createHelpDto);
    return this.helpsRepository.save(newHelp);
  }

  async findAll(): Promise<Helps[]> {
    return this.helpsRepository.find();
  }

  async findOne(id: number): Promise<Helps> {
    const help = await this.helpsRepository.findOne({ where: { iHelpsId: id } });
    if (!help) {
      throw new NotFoundException(`Help with ID #${id} not found`);
    }
    return help;
  }

  async update(id: number, updateHelpDto: UpdateHelpDto): Promise<Helps> {
    const help = await this.findOne(id);
    this.helpsRepository.merge(help, updateHelpDto);
    return this.helpsRepository.save(help);
  }

  async remove(id: number): Promise<void> {
    const result = await this.helpsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Help with ID #${id} not found`);
    }
  }
}