import { Module } from '@nestjs/common';
import { DriverRequestService } from './driver-request.service';
import { DriverRequestController } from './driver-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverRequest } from './entities/driver-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverRequest])],
  controllers: [DriverRequestController],
  providers: [DriverRequestService],
})
export class DriverRequestModule {}
