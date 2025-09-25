import { Module } from '@nestjs/common';
import { ObjectCategoriesService } from './object-categories.service';
import { ObjectCategoriesController } from './object-categories.controller';

@Module({
  controllers: [ObjectCategoriesController],
  providers: [ObjectCategoriesService],
})
export class ObjectCategoriesModule {}
