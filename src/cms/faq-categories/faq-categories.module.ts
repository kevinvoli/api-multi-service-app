import { Module } from '@nestjs/common';
import { FaqCategories } from './entities/faq-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqCategoriesService } from './faq-categories.service';
import { FaqCategoriesController } from './faq-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FaqCategories])],
  controllers: [FaqCategoriesController],
  providers: [FaqCategoriesService],
  exports: [TypeOrmModule.forFeature([FaqCategories])],
})
export class FaqCategoriesModule {}
