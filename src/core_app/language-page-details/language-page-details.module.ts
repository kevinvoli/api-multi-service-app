import { Module } from '@nestjs/common';
import { LanguagePageDetails } from './entities/language-page-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguagePageDetailsService } from './language-page-details.service';
import { LanguagePageDetailsController } from './language-page-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LanguagePageDetails])],
  controllers: [LanguagePageDetailsController],
  providers: [LanguagePageDetailsService],
  exports: [TypeOrmModule.forFeature([LanguagePageDetails])],
})
export class LanguagePageDetailsModule {}
