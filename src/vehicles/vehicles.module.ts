import { Module } from '@nestjs/common';
import { MakeModule } from './make/make.module';
import { MasterVehicleCategoryModule } from './master-vehicle-category/master-vehicle-category.module';
import { ModelModule } from './model/model.module';
import { VehicleCategoryModule } from './vehicle-category/vehicle-category.module';
import { VehicleCategoryStatusLogModule } from './vehicle-category-status-log/vehicle-category-status-log.module';
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module';

@Module({
  imports: [
    MakeModule,
    MasterVehicleCategoryModule,
    ModelModule,
    VehicleCategoryModule,
    VehicleCategoryStatusLogModule,
    VehicleTypeModule,
  ],
  exports: [
    MakeModule,
    MasterVehicleCategoryModule,
    ModelModule,
    VehicleCategoryModule,
    VehicleCategoryStatusLogModule,
    VehicleTypeModule,
  ],
})
export class VehiclesModule {}