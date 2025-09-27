import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMasterCurrencyDto } from './dto/create-master-currency.dto';
import { UpdateMasterCurrencyDto } from './dto/update-master-currency.dto';
import { MasterCurrency } from './entities/master-currency.entity';

@Injectable()
export class MasterCurrencyService {
  constructor(
    @InjectRepository(MasterCurrency)
    private readonly masterCurrencyRepository: Repository<MasterCurrency>,
  ) {}

  async create(createMasterCurrencyDto: CreateMasterCurrencyDto): Promise<MasterCurrency> {
    const masterCurrency = this.masterCurrencyRepository.create(createMasterCurrencyDto);
    return this.masterCurrencyRepository.save(masterCurrency);
  }

  async findAll(): Promise<MasterCurrency[]> {
    return this.masterCurrencyRepository.find();
  }

  async findOne(id: number): Promise<MasterCurrency> {
    const masterCurrency = await this.masterCurrencyRepository.findOne({ where: { iCurrencyId: id } });
    if (!masterCurrency) {
      throw new NotFoundException(`MasterCurrency with ID #${id} not found`);
    }
    return masterCurrency;
  }

  async update(id: number, updateMasterCurrencyDto: UpdateMasterCurrencyDto): Promise<MasterCurrency> {
    const masterCurrency = await this.masterCurrencyRepository.preload({
      iCurrencyId: id,
      ...updateMasterCurrencyDto,
    });
    if (!masterCurrency) {
      throw new NotFoundException(`MasterCurrency with ID #${id} not found`);
    }
    return this.masterCurrencyRepository.save(masterCurrency);
  }

  async remove(id: number): Promise<void> {
    const result = await this.masterCurrencyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`MasterCurrency with ID #${id} not found`);
    }
  }
}