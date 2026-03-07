import { Module } from '@nestjs/common';
import { LanguageLabel } from './entities/language-label.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageLabelService } from './language-label.service';
import { LanguageLabelController } from './language-label.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageLabel])],
  controllers: [LanguageLabelController],
  providers: [LanguageLabelService],
  exports: [TypeOrmModule.forFeature([LanguageLabel])],
})
export class LanguageLabelModule {}
