import { Module } from '@nestjs/common';
import { MasterCurrencyService } from './master-currency.service';
import { MasterCurrencyController } from './master-currency.controller';

@Module({
  controllers: [MasterCurrencyController],
  providers: [MasterCurrencyService],
})
export class MasterCurrencyModule {}
