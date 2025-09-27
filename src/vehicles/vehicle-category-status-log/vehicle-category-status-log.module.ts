import { Module } from '@nestjs/common';
import { VehicleCategoryStatusLogService } from './vehicle-category-status-log.service';
import { VehicleCategoryStatusLogController } from './vehicle-category-status-log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleCategoryStatusLog } from './entities/vehicle-category-status-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehicleCategoryStatusLog])],
  controllers: [VehicleCategoryStatusLogController],
  providers: [VehicleCategoryStatusLogService],
})
export class VehicleCategoryStatusLogModule {}