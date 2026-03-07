import { Module } from '@nestjs/common';
import { DriverRequest } from './entities/driver-request.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverRequestService } from './driver-request.service';
import { DriverRequestController } from './driver-request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverRequest])],
  controllers: [DriverRequestController],
  providers: [DriverRequestService],
  exports: [TypeOrmModule.forFeature([DriverRequest])],
})
export class DriverRequestModule {}
