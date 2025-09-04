import { Module } from '@nestjs/common';
import { LanguageLabelService } from './language-label.service';
import { LanguageLabelController } from './language-label.controller';

@Module({
  controllers: [LanguageLabelController],
  providers: [LanguageLabelService],
})
export class LanguageLabelModule {}
