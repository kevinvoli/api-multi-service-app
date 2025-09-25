import { Module } from '@nestjs/common';
import { MasterServiceCategoryService } from './master-service-category.service';
import { MasterServiceCategoryController } from './master-service-category.controller';

@Module({
  controllers: [MasterServiceCategoryController],
  providers: [MasterServiceCategoryService],
})
export class MasterServiceCategoryModule {}
