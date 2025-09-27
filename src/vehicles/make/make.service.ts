import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMakeDto } from './dto/create-make.dto';
import { UpdateMakeDto } from './dto/update-make.dto';
import { Make } from './entities/make.entity';

@Injectable()
export class MakeService {
  constructor(
    @InjectRepository(Make)
    private readonly makeRepository: Repository<Make>,
  ) {}

  async create(createMakeDto: CreateMakeDto): Promise<Make> {
    const make = this.makeRepository.create(createMakeDto);
    return await this.makeRepository.save(make);
  }

  async findAll(): Promise<Make[]> {
    return await this.makeRepository.find({
      where: { eStatus: 'Active' },
    });
  }

  async findOne(id: number): Promise<Make> {
    const make = await this.makeRepository.findOne({ where: { iMakeId: id } });
    if (!make) {
      throw new NotFoundException(`Make with ID #${id} not found`);
    }
    return make;
  }

  async update(id: number, updateMakeDto: UpdateMakeDto): Promise<Make> {
    const make = await this.findOne(id);
    this.makeRepository.merge(make, updateMakeDto);
    return await this.makeRepository.save(make);
  }

  async remove(id: number): Promise<{ message: string }> {
    const make = await this.findOne(id);
    make.eStatus = 'Deleted';
    await this.makeRepository.save(make);
    return { message: `Make with ID #${id} has been successfully deleted.` };
  }
}