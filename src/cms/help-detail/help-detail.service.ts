import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHelpDetailDto } from './dto/create-help-detail.dto';
import { UpdateHelpDetailDto } from './dto/update-help-detail.dto';
import { HelpDetail } from './entities/help-detail.entity';

@Injectable()
export class HelpDetailService {
  constructor(
    @InjectRepository(HelpDetail)
    private readonly helpDetailRepository: Repository<HelpDetail>,
  ) {}

  async create(createHelpDetailDto: CreateHelpDetailDto): Promise<HelpDetail> {
    const newHelpDetail = this.helpDetailRepository.create(createHelpDetailDto);
    return this.helpDetailRepository.save(newHelpDetail);
  }

  async findAll(): Promise<HelpDetail[]> {
    return this.helpDetailRepository.find();
  }

  async findOne(id: number): Promise<HelpDetail> {
    const helpDetail = await this.helpDetailRepository.findOne({ where: { iHelpDetailId: id } });
    if (!helpDetail) {
      throw new NotFoundException(`Help Detail with ID #${id} not found`);
    }
    return helpDetail;
  }

  async update(id: number, updateHelpDetailDto: UpdateHelpDetailDto): Promise<HelpDetail> {
    const helpDetail = await this.findOne(id);
    this.helpDetailRepository.merge(helpDetail, updateHelpDetailDto);
    return this.helpDetailRepository.save(helpDetail);
  }

  async remove(id: number): Promise<void> {
    const result = await this.helpDetailRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Help Detail with ID #${id} not found`);
    }
  }
}