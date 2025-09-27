import { Module } from '@nestjs/common';
import { FaqCategoriesService } from './faq-categories.service';
import { FaqCategoriesController } from './faq-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqCategories } from './entities/faq-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FaqCategories])],
  controllers: [FaqCategoriesController],
  providers: [FaqCategoriesService],
})
export class FaqCategoriesModule {}