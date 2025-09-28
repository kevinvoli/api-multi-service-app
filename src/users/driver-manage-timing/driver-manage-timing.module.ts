import { Module } from '@nestjs/common';
import { DriverManageTimingService } from './driver-manage-timing.service';
import { DriverManageTimingController } from './driver-manage-timing.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverManageTiming } from './entities/driver-manage-timing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverManageTiming])],
  controllers: [DriverManageTimingController],
  providers: [DriverManageTimingService],
})
export class DriverManageTimingModule {}
