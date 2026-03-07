import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserWallet } from './entities/user-wallet.entity';
import { CreateUserWalletDto } from './dto/create-user-wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user-wallet.dto';

@Injectable()
export class UserWalletService {
  constructor(
    @InjectRepository(UserWallet)
    private readonly repository: Repository<UserWallet>,
  ) {}

  async create(createDto: CreateUserWalletDto): Promise<UserWallet> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<UserWallet[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<UserWallet> {
    const entity = await this.repository.findOneBy({ iUserWalletId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateUserWalletDto): Promise<UserWallet> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
