import { Module } from '@nestjs/common';
import { LangConversionProcess } from './entities/lang-conversion-process.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LangConversionProcessService } from './lang-conversion-process.service';
import { LangConversionProcessController } from './lang-conversion-process.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LangConversionProcess])],
  controllers: [LangConversionProcessController],
  providers: [LangConversionProcessService],
  exports: [TypeOrmModule.forFeature([LangConversionProcess])],
})
export class LangConversionProcessModule {}
