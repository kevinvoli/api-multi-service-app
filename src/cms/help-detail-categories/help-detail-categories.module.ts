import { Module } from '@nestjs/common';
import { HelpDetailCategoriesService } from './help-detail-categories.service';
import { HelpDetailCategoriesController } from './help-detail-categories.controller';

@Module({
  controllers: [HelpDetailCategoriesController],
  providers: [HelpDetailCategoriesService],
})
export class HelpDetailCategoriesModule {}
