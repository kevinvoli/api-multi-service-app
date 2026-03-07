import { Module } from '@nestjs/common';
import { WalletMoneyReferrerEmail } from './entities/wallet-money-referrer-email.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletMoneyReferrerEmailService } from './wallet-money-referrer-email.service';
import { WalletMoneyReferrerEmailController } from './wallet-money-referrer-email.controller';

@Module({
  imports: [TypeOrmModule.forFeature([WalletMoneyReferrerEmail])],
  controllers: [WalletMoneyReferrerEmailController],
  providers: [WalletMoneyReferrerEmailService],
  exports: [TypeOrmModule.forFeature([WalletMoneyReferrerEmail])],
})
export class WalletMoneyReferrerEmailModule {}
