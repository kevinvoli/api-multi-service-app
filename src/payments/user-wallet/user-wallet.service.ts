import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserWalletDto } from './dto/create-user-wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user-wallet.dto';
import { UserWallet } from './entities/user-wallet.entity';

@Injectable()
export class UserWalletService {
  constructor(
    @InjectRepository(UserWallet)
    private readonly userWalletRepository: Repository<UserWallet>,
  ) {}

  async create(createUserWalletDto: CreateUserWalletDto): Promise<UserWallet> {
    const userWallet = this.userWalletRepository.create(createUserWalletDto);
    return this.userWalletRepository.save(userWallet);
  }

  async findAll(): Promise<UserWallet[]> {
    return this.userWalletRepository.find({ relations: ['iUser'] });
  }

  async findOne(id: number): Promise<UserWallet> {
    const userWallet = await this.userWalletRepository.findOne({
      where: { iUserWalletId: id },
      relations: ['iUser'],
    });
    if (!userWallet) {
      throw new NotFoundException(`UserWallet with ID #${id} not found`);
    }
    return userWallet;
  }

  async update(id: number, updateUserWalletDto: UpdateUserWalletDto): Promise<UserWallet> {
    const userWallet = await this.userWalletRepository.preload({
      iUserWalletId: id,
      ...updateUserWalletDto,
    });
    if (!userWallet) {
      throw new NotFoundException(`UserWallet with ID #${id} not found`);
    }
    return this.userWalletRepository.save(userWallet);
  }

  async remove(id: number): Promise<void> {
    const result = await this.userWalletRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`UserWallet with ID #${id} not found`);
    }
  }
}