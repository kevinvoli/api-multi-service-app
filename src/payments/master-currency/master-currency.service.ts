import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MasterCurrency } from './entities/master-currency.entity';
import { CreateMasterCurrencyDto } from './dto/create-master-currency.dto';
import { UpdateMasterCurrencyDto } from './dto/update-master-currency.dto';

@Injectable()
export class MasterCurrencyService {
  constructor(
    @InjectRepository(MasterCurrency)
    private readonly repository: Repository<MasterCurrency>,
  ) {}

  async create(createDto: CreateMasterCurrencyDto): Promise<MasterCurrency> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MasterCurrency[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MasterCurrency> {
    const entity = await this.repository.findOneBy({ iCurrencyId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMasterCurrencyDto): Promise<MasterCurrency> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
