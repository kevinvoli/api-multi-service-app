import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyRequest } from './entities/company-request.entity';
import { CreateCompanyRequestDto } from './dto/create-company-request.dto';
import { UpdateCompanyRequestDto } from './dto/update-company-request.dto';

@Injectable()
export class CompanyRequestService {
  constructor(
    @InjectRepository(CompanyRequest)
    private readonly repository: Repository<CompanyRequest>,
  ) {}

  async create(createDto: CreateCompanyRequestDto): Promise<CompanyRequest> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<CompanyRequest[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CompanyRequest> {
    const entity = await this.repository.findOneBy({ iCompanyRequestId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateCompanyRequestDto): Promise<CompanyRequest> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
