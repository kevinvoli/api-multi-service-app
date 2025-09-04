import { Module } from '@nestjs/common';
import { SeoSectionService } from './seo-section.service';
import { SeoSectionController } from './seo-section.controller';

@Module({
  controllers: [SeoSectionController],
  providers: [SeoSectionService],
})
export class SeoSectionModule {}
