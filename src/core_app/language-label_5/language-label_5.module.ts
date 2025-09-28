import { Module } from '@nestjs/common';
import { LanguageLabel5Service } from './language-label_5.service';
import { LanguageLabel5Controller } from './language-label_5.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageLabel_5 } from './entities/language-label_5.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageLabel_5])],
  controllers: [LanguageLabel5Controller],
  providers: [LanguageLabel5Service],
})
export class LanguageLabel5Module {}
