import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterServiceCategoryService } from './master-service-category.service';
import { MasterServiceCategoryController } from './master-service-category.controller';
import { MasterServiceCategory } from './entities/master-service-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterServiceCategory])],
  controllers: [MasterServiceCategoryController],
  providers: [MasterServiceCategoryService],
})
export class MasterServiceCategoryModule {}
