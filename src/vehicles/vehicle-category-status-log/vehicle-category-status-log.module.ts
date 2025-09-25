import { Module } from '@nestjs/common';
import { VehicleCategoryStatusLogService } from './vehicle-category-status-log.service';
import { VehicleCategoryStatusLogController } from './vehicle-category-status-log.controller';

@Module({
  controllers: [VehicleCategoryStatusLogController],
  providers: [VehicleCategoryStatusLogService],
})
export class VehicleCategoryStatusLogModule {}
