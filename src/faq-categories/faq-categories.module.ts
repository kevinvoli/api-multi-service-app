import { Module } from '@nestjs/common';
import { FaqCategoriesService } from './faq-categories.service';
import { FaqCategoriesController } from './faq-categories.controller';

@Module({
  controllers: [FaqCategoriesController],
  providers: [FaqCategoriesService],
})
export class FaqCategoriesModule {}
