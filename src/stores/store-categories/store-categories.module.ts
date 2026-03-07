import { Module } from '@nestjs/common';
import { StoreCategories } from './entities/store-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreCategoriesService } from './store-categories.service';
import { StoreCategoriesController } from './store-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StoreCategories])],
  controllers: [StoreCategoriesController],
  providers: [StoreCategoriesService],
  exports: [TypeOrmModule.forFeature([StoreCategories])],
})
export class StoreCategoriesModule {}
