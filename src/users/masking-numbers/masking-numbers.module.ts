import { Module } from '@nestjs/common';
import { MaskingNumbersService } from './masking-numbers.service';
import { MaskingNumbersController } from './masking-numbers.controller';

@Module({
  controllers: [MaskingNumbersController],
  providers: [MaskingNumbersService],
})
export class MaskingNumbersModule {}
