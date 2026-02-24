import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MakeModule } from './make/make.module';
import { MasterVehicleCategoryModule } from './master-vehicle-category/master-vehicle-category.module';
import { ModelModule } from './model/model.module';
import { VehicleCategoryModule } from './vehicle-category/vehicle-category.module';
import { VehicleCategoryStatusLogModule } from './vehicle-category-status-log/vehicle-category-status-log.module';
import { VehicleTypeModule } from './vehicle-type/vehicle-type.module';
import { Vehicle } from './entities/vehicle.entity'; // Import the Vehicle entity
import { Driver } from './entities/driver.entity'; // Import the Driver entity
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { User } from '../users/entities/user.entity'; // Import User entity since Driver has a relation to User

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehicle, Driver, User]), // Add Vehicle, Driver, and User entities here
    MakeModule,
    MasterVehicleCategoryModule,
    ModelModule,
    VehicleCategoryModule,
    VehicleCategoryStatusLogModule,
    VehicleTypeModule,
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService],
  exports: [
    TypeOrmModule.forFeature([Vehicle, Driver, User]), // Export for other modules if needed
    VehiclesService,
    MakeModule,
    MasterVehicleCategoryModule,
    ModelModule,
    VehicleCategoryModule,
    VehicleCategoryStatusLogModule,
    VehicleTypeModule,
  ],
})
export class VehiclesModule {}