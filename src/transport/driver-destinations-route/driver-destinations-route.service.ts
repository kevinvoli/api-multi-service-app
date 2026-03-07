import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverDestinationsRoute } from './entities/driver-destinations-route.entity';
import { CreateDriverDestinationsRouteDto } from './dto/create-driver-destinations-route.dto';
import { UpdateDriverDestinationsRouteDto } from './dto/update-driver-destinations-route.dto';

@Injectable()
export class DriverDestinationsRouteService {
  constructor(
    @InjectRepository(DriverDestinationsRoute)
    private readonly repository: Repository<DriverDestinationsRoute>,
  ) {}

  async create(createDto: CreateDriverDestinationsRouteDto): Promise<DriverDestinationsRoute> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverDestinationsRoute[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverDestinationsRoute> {
    const entity = await this.repository.findOneBy({ iRootId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverDestinationsRouteDto): Promise<DriverDestinationsRoute> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
