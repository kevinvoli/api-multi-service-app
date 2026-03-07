import { Module } from '@nestjs/common';
import { DriverManageTiming } from './entities/driver-manage-timing.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverManageTimingService } from './driver-manage-timing.service';
import { DriverManageTimingController } from './driver-manage-timing.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverManageTiming])],
  controllers: [DriverManageTimingController],
  providers: [DriverManageTimingService],
  exports: [TypeOrmModule.forFeature([DriverManageTiming])],
})
export class DriverManageTimingModule {}
