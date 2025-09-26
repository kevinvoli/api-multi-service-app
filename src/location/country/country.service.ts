import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto): Promise<Country> {
    const country = this.countryRepository.create(createCountryDto);
    return await this.countryRepository.save(country);
  }

  async findAll(): Promise<Country[]> {
    return await this.countryRepository.find();
  }

  async findOne(id: number): Promise<Country> {
    const country = await this.countryRepository.findOneBy({ iCountryId: id });
    if (!country) {
      throw new NotFoundException(`Country with ID #${id} not found`);
    }
    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto): Promise<Country> {
    const country = await this.countryRepository.preload({
      iCountryId: id,
      ...updateCountryDto,
    });
    if (!country) {
      throw new NotFoundException(`Country with ID #${id} not found`);
    }
    return await this.countryRepository.save(country);
  }

  async remove(id: number): Promise<Country> {
    const country = await this.findOne(id);
    await this.countryRepository.remove(country);
    return country;
  }
}