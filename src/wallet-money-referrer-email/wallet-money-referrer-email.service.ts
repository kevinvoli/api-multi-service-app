import { Injectable } from '@nestjs/common';
import { CreateWalletMoneyReferrerEmailDto } from './dto/create-wallet-money-referrer-email.dto';
import { UpdateWalletMoneyReferrerEmailDto } from './dto/update-wallet-money-referrer-email.dto';

@Injectable()
export class WalletMoneyReferrerEmailService {
  create(createWalletMoneyReferrerEmailDto: CreateWalletMoneyReferrerEmailDto) {
    return 'This action adds a new walletMoneyReferrerEmail';
  }

  findAll() {
    return `This action returns all walletMoneyReferrerEmail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} walletMoneyReferrerEmail`;
  }

  update(id: number, updateWalletMoneyReferrerEmailDto: UpdateWalletMoneyReferrerEmailDto) {
    return `This action updates a #${id} walletMoneyReferrerEmail`;
  }

  remove(id: number) {
    return `This action removes a #${id} walletMoneyReferrerEmail`;
  }
}
