import { Module } from '@nestjs/common';
import { StoreCategoryTags } from './entities/store-category-tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreCategoryTagsService } from './store-category-tags.service';
import { StoreCategoryTagsController } from './store-category-tags.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StoreCategoryTags])],
  controllers: [StoreCategoryTagsController],
  providers: [StoreCategoryTagsService],
  exports: [TypeOrmModule.forFeature([StoreCategoryTags])],
})
export class StoreCategoryTagsModule {}
