import { Module } from '@nestjs/common';
import { LanguageLabel5Service } from './language-label_5.service';
import { LanguageLabel5Controller } from './language-label_5.controller';

@Module({
  controllers: [LanguageLabel5Controller],
  providers: [LanguageLabel5Service],
})
export class LanguageLabel5Module {}
