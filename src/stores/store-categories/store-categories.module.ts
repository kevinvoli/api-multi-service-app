import { Module } from '@nestjs/common';
import { StoreCategoriesService } from './store-categories.service';
import { StoreCategoriesController } from './store-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreCategories } from './entities/store-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreCategories])],
  controllers: [StoreCategoriesController],
  providers: [StoreCategoriesService],
})
export class StoreCategoriesModule {}
