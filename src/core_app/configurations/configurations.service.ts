import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { Configurations } from './entities/configuration.entity';

@Injectable()
export class ConfigurationsService {
  constructor(
    @InjectRepository(Configurations)
    private readonly configurationRepository: Repository<Configurations>,
  ) {}

  create(createConfigurationDto: CreateConfigurationDto): Promise<Configurations> {
    const configuration = this.configurationRepository.create(createConfigurationDto);
    return this.configurationRepository.save(configuration);
  }

  findAll(): Promise<Configurations[]> {
    return this.configurationRepository.find();
  }

  async findOne(id: number): Promise<Configurations> {
    const configuration = await this.configurationRepository.findOne({ where: { iSettingId: id } });
    if (!configuration) {
      throw new NotFoundException(`Configuration with ID #${id} not found`);
    }
    return configuration;
  }

  async update(id: number, updateConfigurationDto: UpdateConfigurationDto): Promise<Configurations> {
    await this.findOne(id); // will throw error if not found
    await this.configurationRepository.update(id, updateConfigurationDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.configurationRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Configuration with ID #${id} not found`);
    }
  }
}