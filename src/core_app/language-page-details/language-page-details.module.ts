import { Module } from '@nestjs/common';
import { LanguagePageDetailsService } from './language-page-details.service';
import { LanguagePageDetailsController } from './language-page-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguagePageDetails } from './entities/language-page-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LanguagePageDetails])],
  controllers: [LanguagePageDetailsController],
  providers: [LanguagePageDetailsService],
})
export class LanguagePageDetailsModule {}
