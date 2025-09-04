import { Module } from '@nestjs/common';
import { StoreCategoryTagsService } from './store-category-tags.service';
import { StoreCategoryTagsController } from './store-category-tags.controller';

@Module({
  controllers: [StoreCategoryTagsController],
  providers: [StoreCategoryTagsService],
})
export class StoreCategoryTagsModule {}
