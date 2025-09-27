import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWithdrawRequestDto } from './dto/create-withdraw-request.dto';
import { UpdateWithdrawRequestDto } from './dto/update-withdraw-request.dto';
import { WithdrawRequests } from './entities/withdraw-request.entity';

@Injectable()
export class WithdrawRequestsService {
  constructor(
    @InjectRepository(WithdrawRequests)
    private readonly withdrawRequestRepository: Repository<WithdrawRequests>,
  ) {}

  async create(createWithdrawRequestDto: CreateWithdrawRequestDto): Promise<WithdrawRequests> {
    const withdrawRequest = this.withdrawRequestRepository.create(createWithdrawRequestDto);
    return this.withdrawRequestRepository.save(withdrawRequest);
  }

  async findAll(): Promise<WithdrawRequests[]> {
    return this.withdrawRequestRepository.find();
  }

  async findOne(id: number): Promise<WithdrawRequests> {
    const withdrawRequest = await this.withdrawRequestRepository.findOne({ where: { iWithdrawRequestsId: id } });
    if (!withdrawRequest) {
      throw new NotFoundException(`WithdrawRequest with ID #${id} not found`);
    }
    return withdrawRequest;
  }

  async update(id: number, updateWithdrawRequestDto: UpdateWithdrawRequestDto): Promise<WithdrawRequests> {
    const withdrawRequest = await this.withdrawRequestRepository.preload({
      iWithdrawRequestsId: id,
      ...updateWithdrawRequestDto,
    });
    if (!withdrawRequest) {
      throw new NotFoundException(`WithdrawRequest with ID #${id} not found`);
    }
    return this.withdrawRequestRepository.save(withdrawRequest);
  }

  async remove(id: number): Promise<void> {
    const result = await this.withdrawRequestRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`WithdrawRequest with ID #${id} not found`);
    }
  }
}