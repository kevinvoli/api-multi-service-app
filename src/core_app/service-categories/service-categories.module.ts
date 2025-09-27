import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceCategoriesService } from './service-categories.service';
import { ServiceCategoriesController } from './service-categories.controller';
import { ServiceCategories } from './entities/service-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceCategories])],
  controllers: [ServiceCategoriesController],
  providers: [ServiceCategoriesService],
})
export class ServiceCategoriesModule {}
