import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WithdrawRequests } from './entities/withdraw-request.entity';
import { CreateWithdrawRequestDto } from './dto/create-withdraw-request.dto';
import { UpdateWithdrawRequestDto } from './dto/update-withdraw-request.dto';

@Injectable()
export class WithdrawRequestsService {
  constructor(
    @InjectRepository(WithdrawRequests)
    private readonly repository: Repository<WithdrawRequests>,
  ) {}

  async create(createDto: CreateWithdrawRequestDto): Promise<WithdrawRequests> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<WithdrawRequests[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<WithdrawRequests> {
    const entity = await this.repository.findOneBy({ iWithdrawRequestsId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateWithdrawRequestDto): Promise<WithdrawRequests> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
