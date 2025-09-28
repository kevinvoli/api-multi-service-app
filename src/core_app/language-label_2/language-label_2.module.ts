import { Module } from '@nestjs/common';
import { LanguageLabel2Service } from './language-label_2.service';
import { LanguageLabel2Controller } from './language-label_2.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageLabel_2 } from './entities/language-label_2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageLabel_2])],
  controllers: [LanguageLabel2Controller],
  providers: [LanguageLabel2Service],
})
export class LanguageLabel2Module {}
