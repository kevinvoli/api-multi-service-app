import { Module } from '@nestjs/common';
import { MasterVehicleCategoryService } from './master-vehicle-category.service';
import { MasterVehicleCategoryController } from './master-vehicle-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterVehicleCategory } from './entities/master-vehicle-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterVehicleCategory])],
  controllers: [MasterVehicleCategoryController],
  providers: [MasterVehicleCategoryService],
})
export class MasterVehicleCategoryModule {}