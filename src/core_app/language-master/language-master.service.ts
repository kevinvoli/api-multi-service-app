import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLanguageMasterDto } from './dto/create-language-master.dto';
import { UpdateLanguageMasterDto } from './dto/update-language-master.dto';
import { LanguageMaster } from './entities/language-master.entity';

@Injectable()
export class LanguageMasterService {
  constructor(
    @InjectRepository(LanguageMaster)
    private readonly languageMasterRepository: Repository<LanguageMaster>,
  ) {}

  create(createLanguageMasterDto: CreateLanguageMasterDto): Promise<LanguageMaster> {
    const languageMaster = this.languageMasterRepository.create(createLanguageMasterDto);
    return this.languageMasterRepository.save(languageMaster);
  }

  findAll(): Promise<LanguageMaster[]> {
    return this.languageMasterRepository.find();
  }

  async findOne(id: number): Promise<LanguageMaster> {
    const languageMaster = await this.languageMasterRepository.findOne({ where: { iLanguageMasId: id } });
    if (!languageMaster) {
      throw new NotFoundException(`LanguageMaster with ID #${id} not found`);
    }
    return languageMaster;
  }

  async update(id: number, updateLanguageMasterDto: UpdateLanguageMasterDto): Promise<LanguageMaster> {
    await this.findOne(id); // will throw error if not found
    await this.languageMasterRepository.update(id, updateLanguageMasterDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.languageMasterRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`LanguageMaster with ID #${id} not found`);
    }
  }
}