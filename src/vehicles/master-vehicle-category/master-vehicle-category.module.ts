import { Module } from '@nestjs/common';
import { MasterVehicleCategory } from './entities/master-vehicle-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterVehicleCategoryService } from './master-vehicle-category.service';
import { MasterVehicleCategoryController } from './master-vehicle-category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterVehicleCategory])],
  controllers: [MasterVehicleCategoryController],
  providers: [MasterVehicleCategoryService],
  exports: [TypeOrmModule.forFeature([MasterVehicleCategory])],
})
export class MasterVehicleCategoryModule {}
