import { Module } from '@nestjs/common';
import { SeoSectionService } from './seo-section.service';
import { SeoSectionController } from './seo-section.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeoSections } from './entities/seo-section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeoSections])],
  controllers: [SeoSectionController],
  providers: [SeoSectionService],
})
export class SeoSectionModule {}
