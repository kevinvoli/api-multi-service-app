import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { UserWallet } from './entities/user-wallet.entity';
import { User } from '../users/entities/user.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private paymentTransactionRepository: Repository<PaymentTransaction>,
    @InjectRepository(UserWallet)
    private userWalletRepository: Repository<UserWallet>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // PaymentTransaction CRUD
  async createPaymentTransaction(createPaymentDto: CreatePaymentDto): Promise<PaymentTransaction> {
    const user = await this.userRepository.findOneBy({ id: createPaymentDto.userId });
    if (!user) {
      throw new NotFoundException(`User with ID ${createPaymentDto.userId} not found`);
    }

    const newTransaction = this.paymentTransactionRepository.create({
      ...createPaymentDto,
      user,
    });
    return this.paymentTransactionRepository.save(newTransaction);
  }

  async findAllPaymentTransactions(): Promise<PaymentTransaction[]> {
    return this.paymentTransactionRepository.find({ relations: ['user'] });
  }

  async findOnePaymentTransaction(id: number): Promise<PaymentTransaction> {
    const transaction = await this.paymentTransactionRepository.findOne({ where: { id }, relations: ['user'] });
    if (!transaction) {
      throw new NotFoundException(`Payment Transaction with ID ${id} not found`);
    }
    return transaction;
  }

  async updatePaymentTransaction(id: number, updatePaymentDto: UpdatePaymentDto): Promise<PaymentTransaction> {
    await this.paymentTransactionRepository.update(id, updatePaymentDto);
    return this.findOnePaymentTransaction(id);
  }

  async removePaymentTransaction(id: number): Promise<void> {
    await this.paymentTransactionRepository.delete(id);
  }

  // UserWallet logic
  async getUserWallet(userId: number): Promise<UserWallet> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['userWallet'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    if (!user.userWallet) {
      // Create a wallet if it doesn't exist for the user
      const newWallet = this.userWalletRepository.create({ user });
      return this.userWalletRepository.save(newWallet);
    }
    return user.userWallet;
  }

  async creditUserWallet(userId: number, amount: number): Promise<UserWallet> {
    const wallet = await this.getUserWallet(userId);
    wallet.balance += amount;
    return this.userWalletRepository.save(wallet);
  }

  async debitUserWallet(userId: number, amount: number): Promise<UserWallet> {
    const wallet = await this.getUserWallet(userId);
    if (wallet.balance < amount) {
      throw new Error('Insufficient balance'); // Or throw a NestJS BadRequestException
    }
    wallet.balance -= amount;
    return this.userWalletRepository.save(wallet);
  }
}
