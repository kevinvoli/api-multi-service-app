import { Module } from '@nestjs/common';
import { MaskingNumbers } from './entities/masking-number.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaskingNumbersService } from './masking-numbers.service';
import { MaskingNumbersController } from './masking-numbers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MaskingNumbers])],
  controllers: [MaskingNumbersController],
  providers: [MaskingNumbersService],
  exports: [TypeOrmModule.forFeature([MaskingNumbers])],
})
export class MaskingNumbersModule {}
