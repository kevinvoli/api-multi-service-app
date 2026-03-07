import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverLogReport } from './entities/driver-log-report.entity';
import { CreateDriverLogReportDto } from './dto/create-driver-log-report.dto';
import { UpdateDriverLogReportDto } from './dto/update-driver-log-report.dto';

@Injectable()
export class DriverLogReportService {
  constructor(
    @InjectRepository(DriverLogReport)
    private readonly repository: Repository<DriverLogReport>,
  ) {}

  async create(createDto: CreateDriverLogReportDto): Promise<DriverLogReport> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverLogReport[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverLogReport> {
    const entity = await this.repository.findOneBy({ iDriverLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverLogReportDto): Promise<DriverLogReport> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
