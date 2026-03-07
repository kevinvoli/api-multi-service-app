import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverInsuranceReport } from './entities/driver-insurance-report.entity';
import { CreateDriverInsuranceReportDto } from './dto/create-driver-insurance-report.dto';
import { UpdateDriverInsuranceReportDto } from './dto/update-driver-insurance-report.dto';

@Injectable()
export class DriverInsuranceReportService {
  constructor(
    @InjectRepository(DriverInsuranceReport)
    private readonly repository: Repository<DriverInsuranceReport>,
  ) {}

  async create(createDto: CreateDriverInsuranceReportDto): Promise<DriverInsuranceReport> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverInsuranceReport[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverInsuranceReport> {
    const entity = await this.repository.findOneBy({ iInsuranceReportId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverInsuranceReportDto): Promise<DriverInsuranceReport> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
