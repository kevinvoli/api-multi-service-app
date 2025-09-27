import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserReferrerTransactionDto } from './dto/create-user-referrer-transaction.dto';
import { UpdateUserReferrerTransactionDto } from './dto/update-user-referrer-transaction.dto';
import { UserReferrerTransaction } from './entities/user-referrer-transaction.entity';

@Injectable()
export class UserReferrerTransactionService {
  constructor(
    @InjectRepository(UserReferrerTransaction)
    private readonly userReferrerTransactionRepository: Repository<UserReferrerTransaction>,
  ) {}
  async create(createUserReferrerTransactionDto: CreateUserReferrerTransactionDto): Promise<UserReferrerTransaction> {
    const newTransaction = this.userReferrerTransactionRepository.create(createUserReferrerTransactionDto);
    return await this.userReferrerTransactionRepository.save(newTransaction);
  }

  async findAll(): Promise<UserReferrerTransaction[]> {
    return await this.userReferrerTransactionRepository.find();
  }

  async findOne(id: number): Promise<UserReferrerTransaction> {
    const transaction = await this.userReferrerTransactionRepository.findOne({ where: { iRefTransactionId: id } });
    if (!transaction) {
      throw new NotFoundException(`Referrer transaction with ID "${id}" not found`);
    }
    return transaction;
  }

  async update(id: number, updateUserReferrerTransactionDto: UpdateUserReferrerTransactionDto): Promise<UserReferrerTransaction> {
    const transaction = await this.userReferrerTransactionRepository.preload({
      iRefTransactionId: id,
      ...updateUserReferrerTransactionDto,
    });
    if (!transaction) {
      throw new NotFoundException(`Referrer transaction with ID "${id}" not found`);
    }
    return this.userReferrerTransactionRepository.save(transaction);
  }

  async remove(id: number): Promise<UserReferrerTransaction> {
    const transaction = await this.findOne(id);
    return await this.userReferrerTransactionRepository.remove(transaction);
  }
}
