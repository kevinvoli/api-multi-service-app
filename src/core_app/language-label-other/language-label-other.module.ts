import { Module } from '@nestjs/common';
import { LanguageLabelOtherService } from './language-label-other.service';
import { LanguageLabelOtherController } from './language-label-other.controller';

@Module({
  controllers: [LanguageLabelOtherController],
  providers: [LanguageLabelOtherService],
})
export class LanguageLabelOtherModule {}
