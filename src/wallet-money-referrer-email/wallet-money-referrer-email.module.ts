import { Module } from '@nestjs/common';
import { WalletMoneyReferrerEmailService } from './wallet-money-referrer-email.service';
import { WalletMoneyReferrerEmailController } from './wallet-money-referrer-email.controller';

@Module({
  controllers: [WalletMoneyReferrerEmailController],
  providers: [WalletMoneyReferrerEmailService],
})
export class WalletMoneyReferrerEmailModule {}
