import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPaymentInfo } from './entities/user-payment-info.entity';
import { CreateUserPaymentInfoDto } from './dto/create-user-payment-info.dto';
import { UpdateUserPaymentInfoDto } from './dto/update-user-payment-info.dto';

@Injectable()
export class UserPaymentInfoService {
  constructor(
    @InjectRepository(UserPaymentInfo)
    private readonly repository: Repository<UserPaymentInfo>,
  ) {}

  async create(createDto: CreateUserPaymentInfoDto): Promise<UserPaymentInfo> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<UserPaymentInfo[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<UserPaymentInfo> {
    const entity = await this.repository.findOneBy({ iPaymentInfoId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateUserPaymentInfoDto): Promise<UserPaymentInfo> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
