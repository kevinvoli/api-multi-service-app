import { Module } from '@nestjs/common';
import { MasterVehicleCategoryService } from './master-vehicle-category.service';
import { MasterVehicleCategoryController } from './master-vehicle-category.controller';

@Module({
  controllers: [MasterVehicleCategoryController],
  providers: [MasterVehicleCategoryService],
})
export class MasterVehicleCategoryModule {}
