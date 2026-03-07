import { Module } from '@nestjs/common';
import { LanguageLabelOther } from './entities/language-label-other.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageLabelOtherService } from './language-label-other.service';
import { LanguageLabelOtherController } from './language-label-other.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageLabelOther])],
  controllers: [LanguageLabelOtherController],
  providers: [LanguageLabelOtherService],
  exports: [TypeOrmModule.forFeature([LanguageLabelOther])],
})
export class LanguageLabelOtherModule {}
