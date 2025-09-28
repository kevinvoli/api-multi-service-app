import { Module } from '@nestjs/common';
import { StoreCategoryTagsService } from './store-category-tags.service';
import { StoreCategoryTagsController } from './store-category-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreCategories } from '../store-categories/entities/store-category.entity';
import { StoreCategoryTags } from './entities/store-category-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreCategoryTags])],
  controllers: [StoreCategoryTagsController],
  providers: [StoreCategoryTagsService],
})
export class StoreCategoryTagsModule {}
