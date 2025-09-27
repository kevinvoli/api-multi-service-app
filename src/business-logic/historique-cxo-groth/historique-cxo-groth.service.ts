import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHistoriqueCxoGrothDto } from './dto/create-historique-cxo-groth.dto';
import { UpdateHistoriqueCxoGrothDto } from './dto/update-historique-cxo-groth.dto';
import { HistoriqueCxoGroth } from './entities/historique-cxo-groth.entity';

@Injectable()
export class HistoriqueCxoGrothService {
  constructor(
    @InjectRepository(HistoriqueCxoGroth)
    private readonly historiqueRepository: Repository<HistoriqueCxoGroth>,
  ) {}

  create(createHistoriqueCxoGrothDto: CreateHistoriqueCxoGrothDto) {
    const historique = this.historiqueRepository.create(createHistoriqueCxoGrothDto);
    return this.historiqueRepository.save(historique);
  }

  findAll() {
    return this.historiqueRepository.find();
  }

  async findOne(id: number) {
    const historique = await this.historiqueRepository.findOne({ where: { id } });
    if (!historique) {
      throw new NotFoundException(`HistoriqueCxoGroth with ID ${id} not found`);
    }
    return historique;
  }

  async update(id: number, updateHistoriqueCxoGrothDto: UpdateHistoriqueCxoGrothDto) {
    const historique = await this.historiqueRepository.preload({
      id,
      ...updateHistoriqueCxoGrothDto,
    });
    if (!historique) {
      throw new NotFoundException(`HistoriqueCxoGroth with ID ${id} not found`);
    }
    return this.historiqueRepository.save(historique);
  }

  async remove(id: number) {
    const result = await this.historiqueRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`HistoriqueCxoGroth with ID ${id} not found`);
    }
    return { deleted: true };
  }
}