import { Module } from '@nestjs/common';
import { LangConversionProcessService } from './lang-conversion-process.service';
import { LangConversionProcessController } from './lang-conversion-process.controller';

@Module({
  controllers: [LangConversionProcessController],
  providers: [LangConversionProcessService],
})
export class LangConversionProcessModule {}
