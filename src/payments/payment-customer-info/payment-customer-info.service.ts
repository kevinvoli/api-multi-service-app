import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentCustomerInfoDto } from './dto/create-payment-customer-info.dto';
import { UpdatePaymentCustomerInfoDto } from './dto/update-payment-customer-info.dto';
import { PaymentCustomerInfo } from './entities/payment-customer-info.entity';

@Injectable()
export class PaymentCustomerInfoService {
  constructor(
    @InjectRepository(PaymentCustomerInfo)
    private readonly paymentCustomerInfoRepository: Repository<PaymentCustomerInfo>,
  ) {}

  async create(createPaymentCustomerInfoDto: CreatePaymentCustomerInfoDto): Promise<PaymentCustomerInfo> {
    const paymentCustomerInfo = this.paymentCustomerInfoRepository.create(createPaymentCustomerInfoDto);
    return this.paymentCustomerInfoRepository.save(paymentCustomerInfo);
  }

  async findAll(): Promise<PaymentCustomerInfo[]> {
    return this.paymentCustomerInfoRepository.find();
  }

  async findOne(id: number): Promise<PaymentCustomerInfo> {
    const paymentCustomerInfo = await this.paymentCustomerInfoRepository.findOne({ where: { iCustomerInfoId: id } });
    if (!paymentCustomerInfo) {
      throw new NotFoundException(`PaymentCustomerInfo with ID #${id} not found`);
    }
    return paymentCustomerInfo;
  }

  async update(id: number, updatePaymentCustomerInfoDto: UpdatePaymentCustomerInfoDto): Promise<PaymentCustomerInfo> {
    const paymentCustomerInfo = await this.paymentCustomerInfoRepository.preload({
      iCustomerInfoId: id,
      ...updatePaymentCustomerInfoDto,
    });
    if (!paymentCustomerInfo) {
      throw new NotFoundException(`PaymentCustomerInfo with ID #${id} not found`);
    }
    return this.paymentCustomerInfoRepository.save(paymentCustomerInfo);
  }

  async remove(id: number): Promise<void> {
    const result = await this.paymentCustomerInfoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`PaymentCustomerInfo with ID #${id} not found`);
    }
  }
}