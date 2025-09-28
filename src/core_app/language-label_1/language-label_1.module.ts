import { Module } from '@nestjs/common';
import { LanguageLabel1Service } from './language-label_1.service';
import { LanguageLabel1Controller } from './language-label_1.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageLabel_1 } from './entities/language-label_1.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageLabel_1])],
  controllers: [LanguageLabel1Controller],
  providers: [LanguageLabel1Service],
})
export class LanguageLabel1Module {}
