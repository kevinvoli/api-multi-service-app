import { Module } from '@nestjs/common';
import { MaskingNumbersService } from './masking-numbers.service';
import { MaskingNumbersController } from './masking-numbers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaskingNumbers } from './entities/masking-number.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MaskingNumbers])],
  controllers: [MaskingNumbersController],
  providers: [MaskingNumbersService],
})
export class MaskingNumbersModule {}
