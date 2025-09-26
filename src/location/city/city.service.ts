import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const city = this.cityRepository.create(createCityDto);
    return await this.cityRepository.save(city);
  }

  async findAll(): Promise<City[]> {
    return await this.cityRepository.find();
  }

  async findOne(id: number): Promise<City> {
    const city = await this.cityRepository.findOneBy({ iCityId: id });
    if (!city) {
      throw new NotFoundException(`City with ID #${id} not found`);
    }
    return city;
  }

  async update(id: number, updateCityDto: UpdateCityDto): Promise<City> {
    const city = await this.cityRepository.preload({
      iCityId: id,
      ...updateCityDto,
    });
    if (!city) {
      throw new NotFoundException(`City with ID #${id} not found`);
    }
    return await this.cityRepository.save(city);
  }

  async remove(id: number): Promise<City> {
    const city = await this.findOne(id);
    await this.cityRepository.remove(city);
    return city;
  }
}