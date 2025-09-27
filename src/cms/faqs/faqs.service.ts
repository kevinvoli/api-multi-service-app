import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';
import { Faqs } from './entities/faq.entity';

@Injectable()
export class FaqsService {
  constructor(
    @InjectRepository(Faqs)
    private readonly faqsRepository: Repository<Faqs>,
  ) {}

  async create(createFaqDto: CreateFaqDto): Promise<Faqs> {
    const newFaq = this.faqsRepository.create(createFaqDto);
    return this.faqsRepository.save(newFaq);
  }

  async findAll(): Promise<Faqs[]> {
    return this.faqsRepository.find();
  }

  async findOne(id: number): Promise<Faqs> {
    const faq = await this.faqsRepository.findOne({ where: { iFaqId: id } });
    if (!faq) {
      throw new NotFoundException(`FAQ with ID #${id} not found`);
    }
    return faq;
  }

  async update(id: number, updateFaqDto: UpdateFaqDto): Promise<Faqs> {
    const faq = await this.findOne(id);
    this.faqsRepository.merge(faq, updateFaqDto);
    return this.faqsRepository.save(faq);
  }

  async remove(id: number): Promise<void> {
    const result = await this.faqsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`FAQ with ID #${id} not found`);
    }
  }
}