import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWalletMoneyReferrerEmailDto } from './dto/create-wallet-money-referrer-email.dto';
import { UpdateWalletMoneyReferrerEmailDto } from './dto/update-wallet-money-referrer-email.dto';
import { WalletMoneyReferrerEmail } from './entities/wallet-money-referrer-email.entity';

@Injectable()
export class WalletMoneyReferrerEmailService {
  constructor(
    @InjectRepository(WalletMoneyReferrerEmail)
    private readonly walletMoneyReferrerEmailRepository: Repository<WalletMoneyReferrerEmail>,
  ) {}

  async create(createWalletMoneyReferrerEmailDto: CreateWalletMoneyReferrerEmailDto): Promise<WalletMoneyReferrerEmail> {
    const walletMoneyReferrerEmail = this.walletMoneyReferrerEmailRepository.create(createWalletMoneyReferrerEmailDto);
    return this.walletMoneyReferrerEmailRepository.save(walletMoneyReferrerEmail);
  }

  async findAll(): Promise<WalletMoneyReferrerEmail[]> {
    return this.walletMoneyReferrerEmailRepository.find();
  }

  async findOne(id: number): Promise<WalletMoneyReferrerEmail> {
    const walletMoneyReferrerEmail = await this.walletMoneyReferrerEmailRepository.findOne({ where: { iEmailId: id } });
    if (!walletMoneyReferrerEmail) {
      throw new NotFoundException(`WalletMoneyReferrerEmail with ID #${id} not found`);
    }
    return walletMoneyReferrerEmail;
  }

  async update(id: number, updateWalletMoneyReferrerEmailDto: UpdateWalletMoneyReferrerEmailDto): Promise<WalletMoneyReferrerEmail> {
    const walletMoneyReferrerEmail = await this.walletMoneyReferrerEmailRepository.preload({
      iEmailId: id,
      ...updateWalletMoneyReferrerEmailDto,
    });
    if (!walletMoneyReferrerEmail) {
      throw new NotFoundException(`WalletMoneyReferrerEmail with ID #${id} not found`);
    }
    return this.walletMoneyReferrerEmailRepository.save(walletMoneyReferrerEmail);
  }

  async remove(id: number): Promise<void> {
    const result = await this.walletMoneyReferrerEmailRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`WalletMoneyReferrerEmail with ID #${id} not found`);
    }
  }
}