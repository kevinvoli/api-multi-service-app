import { Module } from '@nestjs/common';
import { LanguagePageDetailsService } from './language-page-details.service';
import { LanguagePageDetailsController } from './language-page-details.controller';

@Module({
  controllers: [LanguagePageDetailsController],
  providers: [LanguagePageDetailsService],
})
export class LanguagePageDetailsModule {}
