import { Module } from '@nestjs/common';
import { LanguageLabel1Service } from './language-label_1.service';
import { LanguageLabel1Controller } from './language-label_1.controller';

@Module({
  controllers: [LanguageLabel1Controller],
  providers: [LanguageLabel1Service],
})
export class LanguageLabel1Module {}
