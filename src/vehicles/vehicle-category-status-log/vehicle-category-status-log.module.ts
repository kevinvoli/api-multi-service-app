import { Module } from '@nestjs/common';
import { VehicleCategoryStatusLog } from './entities/vehicle-category-status-log.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleCategoryStatusLogService } from './vehicle-category-status-log.service';
import { VehicleCategoryStatusLogController } from './vehicle-category-status-log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleCategoryStatusLog])],
  controllers: [VehicleCategoryStatusLogController],
  providers: [VehicleCategoryStatusLogService],
  exports: [TypeOrmModule.forFeature([VehicleCategoryStatusLog])],
})
export class VehicleCategoryStatusLogModule {}
