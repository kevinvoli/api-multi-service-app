import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistoriqueCxoGroth } from './entities/historique-cxo-groth.entity';
import { CreateHistoriqueCxoGrothDto } from './dto/create-historique-cxo-groth.dto';
import { UpdateHistoriqueCxoGrothDto } from './dto/update-historique-cxo-groth.dto';

@Injectable()
export class HistoriqueCxoGrothService {
  constructor(
    @InjectRepository(HistoriqueCxoGroth)
    private readonly repository: Repository<HistoriqueCxoGroth>,
  ) {}

  async create(createDto: CreateHistoriqueCxoGrothDto): Promise<HistoriqueCxoGroth> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<HistoriqueCxoGroth[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<HistoriqueCxoGroth> {
    const entity = await this.repository.findOneBy({ id: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateHistoriqueCxoGrothDto): Promise<HistoriqueCxoGroth> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
