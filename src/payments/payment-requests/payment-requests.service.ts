import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentRequests } from './entities/payment-request.entity';
import { CreatePaymentRequestDto } from './dto/create-payment-request.dto';
import { UpdatePaymentRequestDto } from './dto/update-payment-request.dto';

@Injectable()
export class PaymentRequestsService {
  constructor(
    @InjectRepository(PaymentRequests)
    private readonly repository: Repository<PaymentRequests>,
  ) {}

  async create(createDto: CreatePaymentRequestDto): Promise<PaymentRequests> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<PaymentRequests[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<PaymentRequests> {
    const entity = await this.repository.findOneBy({ iPaymentRequestsId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdatePaymentRequestDto): Promise<PaymentRequests> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
