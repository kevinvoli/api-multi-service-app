import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationMasterDto } from './dto/create-location-master.dto';
import { UpdateLocationMasterDto } from './dto/update-location-master.dto';
import { LocationMaster } from './entities/location-master.entity';

@Injectable()
export class LocationMasterService {
  constructor(
    @InjectRepository(LocationMaster)
    private readonly locationMasterRepository: Repository<LocationMaster>,
  ) {}

  async create(createLocationMasterDto: CreateLocationMasterDto): Promise<LocationMaster> {
    const locationMaster = this.locationMasterRepository.create(createLocationMasterDto);
    return await this.locationMasterRepository.save(locationMaster);
  }

  async findAll(): Promise<LocationMaster[]> {
    return await this.locationMasterRepository.find();
  }

  async findOne(id: number): Promise<LocationMaster> {
    const locationMaster = await this.locationMasterRepository.findOneBy({ iLocationId: id });
    if (!locationMaster) {
      throw new NotFoundException(`LocationMaster with ID #${id} not found`);
    }
    return locationMaster;
  }

  async update(id: number, updateLocationMasterDto: UpdateLocationMasterDto): Promise<LocationMaster> {
    const locationMaster = await this.locationMasterRepository.preload({
      iLocationId: id,
      ...updateLocationMasterDto,
    });
    if (!locationMaster) {
      throw new NotFoundException(`LocationMaster with ID #${id} not found`);
    }
    return await this.locationMasterRepository.save(locationMaster);
  }

  async remove(id: number): Promise<LocationMaster> {
    const locationMaster = await this.findOne(id);
    await this.locationMasterRepository.remove(locationMaster);
    return locationMaster;
  }
}