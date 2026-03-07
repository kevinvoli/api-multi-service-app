import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminAlerts } from './entities/admin-alert.entity';
import { CreateAdminAlertDto } from './dto/create-admin-alert.dto';
import { UpdateAdminAlertDto } from './dto/update-admin-alert.dto';

@Injectable()
export class AdminAlertsService {
  constructor(
    @InjectRepository(AdminAlerts)
    private readonly repository: Repository<AdminAlerts>,
  ) {}

  async create(createDto: CreateAdminAlertDto): Promise<AdminAlerts> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AdminAlerts[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AdminAlerts> {
    const entity = await this.repository.findOneBy({ iAlertId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAdminAlertDto): Promise<AdminAlerts> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
