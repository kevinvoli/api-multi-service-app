import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAirportLocationMasterDto } from './dto/create-airport-location-master.dto';
import { UpdateAirportLocationMasterDto } from './dto/update-airport-location-master.dto';
import { AirportLocationMaster } from './entities/airport-location-master.entity';

@Injectable()
export class AirportLocationMastersService {
  constructor(
    @InjectRepository(AirportLocationMaster)
    private readonly airportLocationMasterRepository: Repository<AirportLocationMaster>,
  ) {}

  async create(createDto: CreateAirportLocationMasterDto): Promise<AirportLocationMaster> {
    const location = this.airportLocationMasterRepository.create(createDto);
    return await this.airportLocationMasterRepository.save(location);
  }

  async findAll(): Promise<AirportLocationMaster[]> {
    return await this.airportLocationMasterRepository.find();
  }

  async findOne(id: number): Promise<AirportLocationMaster> {
    const location = await this.airportLocationMasterRepository.findOneBy({ iAirportLocationId: id });
    if (!location) {
      throw new NotFoundException(`AirportLocationMaster with ID #${id} not found`);
    }
    return location;
  }

  async update(id: number, updateDto: UpdateAirportLocationMasterDto): Promise<AirportLocationMaster> {
    const location = await this.airportLocationMasterRepository.preload({
      iAirportLocationId: id,
      ...updateDto,
    });
    if (!location) {
      throw new NotFoundException(`AirportLocationMaster with ID #${id} not found`);
    }
    return await this.airportLocationMasterRepository.save(location);
  }

  async remove(id: number): Promise<AirportLocationMaster> {
    const location = await this.findOne(id);
    await this.airportLocationMasterRepository.remove(location);
    return location;
  }
}