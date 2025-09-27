import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestrictedNegativeAreaDto } from './dto/create-restricted-negative-area.dto';
import { UpdateRestrictedNegativeAreaDto } from './dto/update-restricted-negative-area.dto';
import { RestrictedNegativeArea } from './entities/restricted-negative-area.entity';

@Injectable()
export class RestrictedNegativeAreaService {
  constructor(
    @InjectRepository(RestrictedNegativeArea)
    private readonly repository: Repository<RestrictedNegativeArea>,
  ) {}

  async create(createDto: CreateRestrictedNegativeAreaDto): Promise<RestrictedNegativeArea> {
    const area = this.repository.create(createDto);
    return await this.repository.save(area);
  }

  async findAll(): Promise<RestrictedNegativeArea[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<RestrictedNegativeArea> {
    const area = await this.repository.findOneBy({ iRestrictedNegativeId: id });
    if (!area) {
      throw new NotFoundException(`RestrictedNegativeArea with ID #${id} not found`);
    }
    return area;
  }

  async update(id: number, updateDto: UpdateRestrictedNegativeAreaDto): Promise<RestrictedNegativeArea> {
    const area = await this.repository.preload({
      iRestrictedNegativeId: id,
      ...updateDto,
    });
    if (!area) {
      throw new NotFoundException(`RestrictedNegativeArea with ID #${id} not found`);
    }
    return await this.repository.save(area);
  }

  async remove(id: number): Promise<RestrictedNegativeArea> {
    const area = await this.findOne(id);
    await this.repository.remove(area);
    return area;
  }
}