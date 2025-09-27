import { Module } from '@nestjs/common';
import { DriverDocService } from './driver-doc.service';
import { DriverDocController } from './driver-doc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverDoc } from './entities/driver-doc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverDoc])],
  controllers: [DriverDocController],
  providers: [DriverDocService],
})
export class DriverDocModule {}
