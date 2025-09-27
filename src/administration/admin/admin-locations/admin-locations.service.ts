import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminLocationDto } from './dto/create-admin-location.dto';
import { UpdateAdminLocationDto } from './dto/update-admin-location.dto';
import { AdminLocations } from './entities/admin-location.entity';

@Injectable()
export class AdminLocationsService {
  constructor(
    @InjectRepository(AdminLocations)
    private readonly adminLocationsRepository: Repository<AdminLocations>,
  ) {}

  async create(createDto: CreateAdminLocationDto): Promise<AdminLocations> {
    const newLocation = this.adminLocationsRepository.create(createDto);
    return await this.adminLocationsRepository.save(newLocation);
  }

  async findAll(): Promise<AdminLocations[]> {
    return await this.adminLocationsRepository.find();
  }

  async findOne(id: number): Promise<AdminLocations> {
    const location = await this.adminLocationsRepository.findOne({ where: { id } });
    if (!location) {
      throw new NotFoundException(`AdminLocation with ID #${id} not found`);
    }
    return location;
  }

  async update(id: number, updateDto: UpdateAdminLocationDto): Promise<AdminLocations> {
    const location = await this.adminLocationsRepository.preload({
      id,
      ...updateDto,
    });
    if (!location) {
      throw new NotFoundException(`AdminLocation with ID #${id} not found`);
    }
    return await this.adminLocationsRepository.save(location);
  }

  async remove(id: number): Promise<{ message: string }> {
    const location = await this.findOne(id);
    await this.adminLocationsRepository.remove(location);
    return { message: `AdminLocation with ID #${id} has been removed` };
  }
}