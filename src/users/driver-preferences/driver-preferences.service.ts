import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverPreferenceDto } from './dto/create-driver-preference.dto';
import { UpdateDriverPreferenceDto } from './dto/update-driver-preference.dto';
import { DriverPreferences } from './entities/driver-preference.entity';

@Injectable()
export class DriverPreferencesService {
  constructor(
    @InjectRepository(DriverPreferences)
    private readonly driverPreferencesRepository: Repository<DriverPreferences>,
  ) {}
  async create(createDriverPreferenceDto: CreateDriverPreferenceDto): Promise<DriverPreferences> {
    const newPreference = this.driverPreferencesRepository.create(createDriverPreferenceDto);
    return await this.driverPreferencesRepository.save(newPreference);
  }

  async findAll(): Promise<DriverPreferences[]> {
    return await this.driverPreferencesRepository.find();
  }

  async findOne(id: number): Promise<DriverPreferences> {
    const preference = await this.driverPreferencesRepository.findOne({ where: { iDriverPreferenceId: id } });
    if (!preference) {
      throw new NotFoundException(`Driver preference with ID "${id}" not found`);
    }
    return preference;
  }

  async update(id: number, updateDriverPreferenceDto: UpdateDriverPreferenceDto): Promise<DriverPreferences> {
    const preference = await this.driverPreferencesRepository.preload({
      iDriverPreferenceId: id,
      ...updateDriverPreferenceDto,
    });
    if (!preference) {
      throw new NotFoundException(`Driver preference with ID "${id}" not found`);
    }
    return this.driverPreferencesRepository.save(preference);
  }

  async remove(id: number): Promise<DriverPreferences> {
    const preference = await this.findOne(id);
    return await this.driverPreferencesRepository.remove(preference);
  }
}
