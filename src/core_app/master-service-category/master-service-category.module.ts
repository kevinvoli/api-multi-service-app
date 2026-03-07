import { Module } from '@nestjs/common';
import { MasterServiceCategory } from './entities/master-service-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterServiceCategoryService } from './master-service-category.service';
import { MasterServiceCategoryController } from './master-service-category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterServiceCategory])],
  controllers: [MasterServiceCategoryController],
  providers: [MasterServiceCategoryService],
  exports: [TypeOrmModule.forFeature([MasterServiceCategory])],
})
export class MasterServiceCategoryModule {}
