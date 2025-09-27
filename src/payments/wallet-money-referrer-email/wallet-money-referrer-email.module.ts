import { Module } from '@nestjs/common';
import { WalletMoneyReferrerEmailService } from './wallet-money-referrer-email.service';
import { WalletMoneyReferrerEmailController } from './wallet-money-referrer-email.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletMoneyReferrerEmail } from './entities/wallet-money-referrer-email.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WalletMoneyReferrerEmail])],
  controllers: [WalletMoneyReferrerEmailController],
  providers: [WalletMoneyReferrerEmailService],
})
export class WalletMoneyReferrerEmailModule {}