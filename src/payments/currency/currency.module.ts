import { Module } from '@nestjs/common';
import { Currency } from './entities/currency.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Currency])],
  controllers: [CurrencyController],
  providers: [CurrencyService],
  exports: [TypeOrmModule.forFeature([Currency])],
})
export class CurrencyModule {}
