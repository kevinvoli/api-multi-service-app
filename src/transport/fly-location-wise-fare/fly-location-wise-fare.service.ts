import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlyLocationWiseFare } from './entities/fly-location-wise-fare.entity';
import { CreateFlyLocationWiseFareDto } from './dto/create-fly-location-wise-fare.dto';
import { UpdateFlyLocationWiseFareDto } from './dto/update-fly-location-wise-fare.dto';

@Injectable()
export class FlyLocationWiseFareService {
  constructor(
    @InjectRepository(FlyLocationWiseFare)
    private readonly repository: Repository<FlyLocationWiseFare>,
  ) {}

  async create(createDto: CreateFlyLocationWiseFareDto): Promise<FlyLocationWiseFare> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<FlyLocationWiseFare[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<FlyLocationWiseFare> {
    const entity = await this.repository.findOneBy({ iLocatioId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateFlyLocationWiseFareDto): Promise<FlyLocationWiseFare> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
