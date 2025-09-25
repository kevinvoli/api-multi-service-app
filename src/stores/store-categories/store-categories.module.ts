import { Module } from '@nestjs/common';
import { StoreCategoriesService } from './store-categories.service';
import { StoreCategoriesController } from './store-categories.controller';

@Module({
  controllers: [StoreCategoriesController],
  providers: [StoreCategoriesService],
})
export class StoreCategoriesModule {}
