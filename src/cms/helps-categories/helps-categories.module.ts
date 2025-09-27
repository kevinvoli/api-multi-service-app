import { Module } from '@nestjs/common';
import { HelpsCategoriesService } from './helps-categories.service';
import { HelpsCategoriesController } from './helps-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpsCategories } from './entities/helps-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HelpsCategories])],
  controllers: [HelpsCategoriesController],
  providers: [HelpsCategoriesService],
})
export class HelpsCategoriesModule {}