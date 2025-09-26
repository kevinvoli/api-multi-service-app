import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageLabelService } from './language-label.service';
import { LanguageLabelController } from './language-label.controller';
import { LanguageLabel } from './entities/language-label.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LanguageLabel])],
  controllers: [LanguageLabelController],
  providers: [LanguageLabelService],
})
export class LanguageLabelModule {}
