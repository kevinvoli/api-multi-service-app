import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentCustomerInfo } from './entities/payment-customer-info.entity';
import { CreatePaymentCustomerInfoDto } from './dto/create-payment-customer-info.dto';
import { UpdatePaymentCustomerInfoDto } from './dto/update-payment-customer-info.dto';

@Injectable()
export class PaymentCustomerInfoService {
  constructor(
    @InjectRepository(PaymentCustomerInfo)
    private readonly repository: Repository<PaymentCustomerInfo>,
  ) {}

  async create(createDto: CreatePaymentCustomerInfoDto): Promise<PaymentCustomerInfo> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<PaymentCustomerInfo[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<PaymentCustomerInfo> {
    const entity = await this.repository.findOneBy({ iCustomerInfoId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdatePaymentCustomerInfoDto): Promise<PaymentCustomerInfo> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
