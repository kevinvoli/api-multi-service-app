import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WalletMoneyReferrerEmail } from './entities/wallet-money-referrer-email.entity';
import { CreateWalletMoneyReferrerEmailDto } from './dto/create-wallet-money-referrer-email.dto';
import { UpdateWalletMoneyReferrerEmailDto } from './dto/update-wallet-money-referrer-email.dto';

@Injectable()
export class WalletMoneyReferrerEmailService {
  constructor(
    @InjectRepository(WalletMoneyReferrerEmail)
    private readonly repository: Repository<WalletMoneyReferrerEmail>,
  ) {}

  async create(createDto: CreateWalletMoneyReferrerEmailDto): Promise<WalletMoneyReferrerEmail> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<WalletMoneyReferrerEmail[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<WalletMoneyReferrerEmail> {
    const entity = await this.repository.findOneBy({ iEmailId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateWalletMoneyReferrerEmailDto): Promise<WalletMoneyReferrerEmail> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
