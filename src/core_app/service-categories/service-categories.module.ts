import { Module } from '@nestjs/common';
import { ServiceCategories } from './entities/service-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCategoriesService } from './service-categories.service';
import { ServiceCategoriesController } from './service-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceCategories])],
  controllers: [ServiceCategoriesController],
  providers: [ServiceCategoriesService],
  exports: [TypeOrmModule.forFeature([ServiceCategories])],
})
export class ServiceCategoriesModule {}
