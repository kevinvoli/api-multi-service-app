import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLanguageLabelDto } from './dto/create-language-label.dto';
import { UpdateLanguageLabelDto } from './dto/update-language-label.dto';
import { LanguageLabel } from './entities/language-label.entity';

@Injectable()
export class LanguageLabelService {
  constructor(
    @InjectRepository(LanguageLabel)
    private readonly languageLabelRepository: Repository<LanguageLabel>,
  ) {}

  create(createLanguageLabelDto: CreateLanguageLabelDto): Promise<LanguageLabel> {
    const languageLabel = this.languageLabelRepository.create(createLanguageLabelDto);
    return this.languageLabelRepository.save(languageLabel);
  }

  findAll(): Promise<LanguageLabel[]> {
    return this.languageLabelRepository.find();
  }

  async findOne(id: number): Promise<LanguageLabel> {
    const languageLabel = await this.languageLabelRepository.findOne({ where: { languageLabelId: id } });
    if (!languageLabel) {
      throw new NotFoundException(`LanguageLabel with ID #${id} not found`);
    }
    return languageLabel;
  }

  async update(id: number, updateLanguageLabelDto: UpdateLanguageLabelDto): Promise<LanguageLabel> {
    await this.findOne(id); // will throw error if not found
    await this.languageLabelRepository.update(id, updateLanguageLabelDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.languageLabelRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`LanguageLabel with ID #${id} not found`);
    }
  }
}