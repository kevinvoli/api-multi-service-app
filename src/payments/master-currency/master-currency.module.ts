import { Module } from '@nestjs/common';
import { MasterCurrencyService } from './master-currency.service';
import { MasterCurrencyController } from './master-currency.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterCurrency } from './entities/master-currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterCurrency])],
  controllers: [MasterCurrencyController],
  providers: [MasterCurrencyService],
})
export class MasterCurrencyModule {}