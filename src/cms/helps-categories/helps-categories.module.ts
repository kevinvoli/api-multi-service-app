import { Module } from '@nestjs/common';
import { HelpsCategoriesService } from './helps-categories.service';
import { HelpsCategoriesController } from './helps-categories.controller';

@Module({
  controllers: [HelpsCategoriesController],
  providers: [HelpsCategoriesService],
})
export class HelpsCategoriesModule {}
