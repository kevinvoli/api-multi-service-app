import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminLocations } from './entities/admin-location.entity';
import { CreateAdminLocationDto } from './dto/create-admin-location.dto';
import { UpdateAdminLocationDto } from './dto/update-admin-location.dto';

@Injectable()
export class AdminLocationsService {
  constructor(
    @InjectRepository(AdminLocations)
    private readonly repository: Repository<AdminLocations>,
  ) {}

  async create(createDto: CreateAdminLocationDto): Promise<AdminLocations> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AdminLocations[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AdminLocations> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAdminLocationDto): Promise<AdminLocations> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
