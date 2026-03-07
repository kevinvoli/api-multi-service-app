import { Module } from '@nestjs/common';
import { ObjectCategories } from './entities/object-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectCategoriesService } from './object-categories.service';
import { ObjectCategoriesController } from './object-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ObjectCategories])],
  controllers: [ObjectCategoriesController],
  providers: [ObjectCategoriesService],
  exports: [TypeOrmModule.forFeature([ObjectCategories])],
})
export class ObjectCategoriesModule {}
