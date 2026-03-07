import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeoSectionService } from './seo-section.service';
import { SeoSectionController } from './seo-section.controller';

import { SeoSections } from './entities/seo-section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeoSections])],
  controllers: [SeoSectionController],
  providers: [SeoSectionService],
  exports: [TypeOrmModule.forFeature([SeoSections])],
})
export class SeoSectionModule {}
