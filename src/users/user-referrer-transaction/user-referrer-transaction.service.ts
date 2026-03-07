import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserReferrerTransaction } from './entities/user-referrer-transaction.entity';
import { CreateUserReferrerTransactionDto } from './dto/create-user-referrer-transaction.dto';
import { UpdateUserReferrerTransactionDto } from './dto/update-user-referrer-transaction.dto';

@Injectable()
export class UserReferrerTransactionService {
  constructor(
    @InjectRepository(UserReferrerTransaction)
    private readonly repository: Repository<UserReferrerTransaction>,
  ) {}

  async create(createDto: CreateUserReferrerTransactionDto): Promise<UserReferrerTransaction> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<UserReferrerTransaction[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<UserReferrerTransaction> {
    const entity = await this.repository.findOneBy({ iRefTransactionId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateUserReferrerTransactionDto): Promise<UserReferrerTransaction> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
