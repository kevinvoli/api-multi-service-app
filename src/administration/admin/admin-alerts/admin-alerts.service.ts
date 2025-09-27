import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminAlertDto } from './dto/create-admin-alert.dto';
import { UpdateAdminAlertDto } from './dto/update-admin-alert.dto';
import { AdminAlerts } from './entities/admin-alert.entity';

@Injectable()
export class AdminAlertsService {
  constructor(
    @InjectRepository(AdminAlerts)
    private readonly adminAlertsRepository: Repository<AdminAlerts>,
  ) {}

  async create(createAdminAlertDto: CreateAdminAlertDto): Promise<AdminAlerts> {
    const newAlert = this.adminAlertsRepository.create(createAdminAlertDto);
    return await this.adminAlertsRepository.save(newAlert);
  }

  async findAll(): Promise<AdminAlerts[]> {
    return await this.adminAlertsRepository.find();
  }

  async findOne(id: number): Promise<AdminAlerts> {
    const alert = await this.adminAlertsRepository.findOne({ where: { iAlertId: id } });
    if (!alert) {
      throw new NotFoundException(`AdminAlert with ID #${id} not found`);
    }
    return alert;
  }

  async update(id: number, updateAdminAlertDto: UpdateAdminAlertDto): Promise<AdminAlerts> {
    const updatedAlert = await this.adminAlertsRepository.preload({
      iAlertId: id,
      ...updateAdminAlertDto,
    });
    if (!updatedAlert) {
      throw new NotFoundException(`AdminAlert with ID #${id} not found`);
    }
    return await this.adminAlertsRepository.save(updatedAlert);
  }

  async remove(id: number): Promise<{ message: string }> {
    const alert = await this.findOne(id);
    await this.adminAlertsRepository.remove(alert);
    return { message: `AdminAlert with ID #${id} has been removed` };
  }
}