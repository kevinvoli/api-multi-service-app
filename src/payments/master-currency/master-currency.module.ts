import { Module } from '@nestjs/common';
import { MasterCurrency } from './entities/master-currency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterCurrencyService } from './master-currency.service';
import { MasterCurrencyController } from './master-currency.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterCurrency])],
  controllers: [MasterCurrencyController],
  providers: [MasterCurrencyService],
  exports: [TypeOrmModule.forFeature([MasterCurrency])],
})
export class MasterCurrencyModule {}
