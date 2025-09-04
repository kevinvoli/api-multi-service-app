import { Module } from '@nestjs/common';
import { LanguageLabel2Service } from './language-label_2.service';
import { LanguageLabel2Controller } from './language-label_2.controller';

@Module({
  controllers: [LanguageLabel2Controller],
  providers: [LanguageLabel2Service],
})
export class LanguageLabel2Module {}
