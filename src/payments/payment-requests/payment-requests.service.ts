import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePaymentRequestDto } from './dto/create-payment-request.dto';
import { UpdatePaymentRequestDto } from './dto/update-payment-request.dto';
import { PaymentRequests } from './entities/payment-request.entity';

@Injectable()
export class PaymentRequestsService {
  constructor(
    @InjectRepository(PaymentRequests)
    private readonly paymentRequestRepository: Repository<PaymentRequests>,
  ) {}

  async create(createPaymentRequestDto: CreatePaymentRequestDto): Promise<PaymentRequests> {
    const paymentRequest = this.paymentRequestRepository.create(createPaymentRequestDto);
    return this.paymentRequestRepository.save(paymentRequest);
  }

  async findAll(): Promise<PaymentRequests[]> {
    return this.paymentRequestRepository.find();
  }

  async findOne(id: number): Promise<PaymentRequests> {
    const paymentRequest = await this.paymentRequestRepository.findOne({ where: { iPaymentRequestsId: id } });
    if (!paymentRequest) {
      throw new NotFoundException(`PaymentRequest with ID #${id} not found`);
    }
    return paymentRequest;
  }

  async update(id: number, updatePaymentRequestDto: UpdatePaymentRequestDto): Promise<PaymentRequests> {
    const paymentRequest = await this.paymentRequestRepository.preload({
      iPaymentRequestsId: id,
      ...updatePaymentRequestDto,
    });
    if (!paymentRequest) {
      throw new NotFoundException(`PaymentRequest with ID #${id} not found`);
    }
    return this.paymentRequestRepository.save(paymentRequest);
  }

  async remove(id: number): Promise<void> {
    const result = await this.paymentRequestRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`PaymentRequest with ID #${id} not found`);
    }
  }
}