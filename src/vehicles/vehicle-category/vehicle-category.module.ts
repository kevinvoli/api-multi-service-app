import { Module } from '@nestjs/common';
import { VehicleCategoryService } from './vehicle-category.service';
import { VehicleCategoryController } from './vehicle-category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleCategory } from './entities/vehicle-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleCategory])],
  controllers: [VehicleCategoryController],
  providers: [VehicleCategoryService],
})
export class VehicleCategoryModule {}