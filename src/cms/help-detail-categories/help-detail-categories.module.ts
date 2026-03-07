import { Module } from '@nestjs/common';
import { HelpDetailCategories } from './entities/help-detail-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpDetailCategoriesService } from './help-detail-categories.service';
import { HelpDetailCategoriesController } from './help-detail-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HelpDetailCategories])],
  controllers: [HelpDetailCategoriesController],
  providers: [HelpDetailCategoriesService],
  exports: [TypeOrmModule.forFeature([HelpDetailCategories])],
})
export class HelpDetailCategoriesModule {}
