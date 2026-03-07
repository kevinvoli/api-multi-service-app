import { Module } from '@nestjs/common';
import { VehicleCategory } from './entities/vehicle-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleCategoryService } from './vehicle-category.service';
import { VehicleCategoryController } from './vehicle-category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleCategory])],
  controllers: [VehicleCategoryController],
  providers: [VehicleCategoryService],
  exports: [TypeOrmModule.forFeature([VehicleCategory])],
})
export class VehicleCategoryModule {}
