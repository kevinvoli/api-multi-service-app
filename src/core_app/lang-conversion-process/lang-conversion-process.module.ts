import { Module } from '@nestjs/common';
import { LangConversionProcessService } from './lang-conversion-process.service';
import { LangConversionProcessController } from './lang-conversion-process.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LangConversionProcess } from './entities/lang-conversion-process.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LangConversionProcess])],
  controllers: [LangConversionProcessController],
  providers: [LangConversionProcessService],
})
export class LangConversionProcessModule {}
