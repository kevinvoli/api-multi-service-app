import { Module } from '@nestjs/common';
import { VehicleType } from './entities/vehicle-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleTypeService } from './vehicle-type.service';
import { VehicleTypeController } from './vehicle-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleType])],
  controllers: [VehicleTypeController],
  providers: [VehicleTypeService],
  exports: [TypeOrmModule.forFeature([VehicleType])],
})
export class VehicleTypeModule {}
