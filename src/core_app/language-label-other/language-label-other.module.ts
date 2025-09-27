import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageLabelOtherService } from './language-label-other.service';
import { LanguageLabelOtherController } from './language-label-other.controller';
import { LanguageLabelOther } from './entities/language-label-other.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageLabelOther])],
  controllers: [LanguageLabelOtherController],
  providers: [LanguageLabelOtherService],
})
export class LanguageLabelOtherModule {}
