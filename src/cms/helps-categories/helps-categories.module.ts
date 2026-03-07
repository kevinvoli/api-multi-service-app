import { Module } from '@nestjs/common';
import { HelpsCategories } from './entities/helps-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpsCategoriesService } from './helps-categories.service';
import { HelpsCategoriesController } from './helps-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HelpsCategories])],
  controllers: [HelpsCategoriesController],
  providers: [HelpsCategoriesService],
  exports: [TypeOrmModule.forFeature([HelpsCategories])],
})
export class HelpsCategoriesModule {}
