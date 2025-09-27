import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLanguageLabelOtherDto } from './dto/create-language-label-other.dto';
import { UpdateLanguageLabelOtherDto } from './dto/update-language-label-other.dto';
import { LanguageLabelOther } from './entities/language-label-other.entity';

@Injectable()
export class LanguageLabelOtherService {
  constructor(
    @InjectRepository(LanguageLabelOther)
    private readonly languageLabelOtherRepository: Repository<LanguageLabelOther>,
  ) {}

  create(createLanguageLabelOtherDto: CreateLanguageLabelOtherDto): Promise<LanguageLabelOther> {
    const languageLabelOther = this.languageLabelOtherRepository.create(createLanguageLabelOtherDto);
    return this.languageLabelOtherRepository.save(languageLabelOther);
  }

  findAll(): Promise<LanguageLabelOther[]> {
    return this.languageLabelOtherRepository.find();
  }

  async findOne(id: number): Promise<LanguageLabelOther> {
    const languageLabelOther = await this.languageLabelOtherRepository.findOne({ where: { languageLabelId: id } });
    if (!languageLabelOther) {
      throw new NotFoundException(`LanguageLabelOther with ID #${id} not found`);
    }
    return languageLabelOther;
  }

  async update(id: number, updateLanguageLabelOtherDto: UpdateLanguageLabelOtherDto): Promise<LanguageLabelOther> {
    await this.findOne(id); // will throw error if not found
    await this.languageLabelOtherRepository.update(id, updateLanguageLabelOtherDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.languageLabelOtherRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`LanguageLabelOther with ID #${id} not found`);
    }
  }
}