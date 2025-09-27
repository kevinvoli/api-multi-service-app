import { Module } from '@nestjs/common';
import { HelpDetailCategoriesService } from './help-detail-categories.service';
import { HelpDetailCategoriesController } from './help-detail-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpDetailCategories } from './entities/help-detail-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HelpDetailCategories])],
  controllers: [HelpDetailCategoriesController],
  providers: [HelpDetailCategoriesService],
})
export class HelpDetailCategoriesModule {}