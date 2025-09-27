import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ObjectCategoriesService } from './object-categories.service';
import { ObjectCategoriesController } from './object-categories.controller';
import { ObjectCategories } from './entities/object-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ObjectCategories])],
  controllers: [ObjectCategoriesController],
  providers: [ObjectCategoriesService],
})
export class ObjectCategoriesModule {}