import { Module } from '@nestjs/common';
import { DriverDoc } from './entities/driver-doc.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverDocService } from './driver-doc.service';
import { DriverDocController } from './driver-doc.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverDoc])],
  controllers: [DriverDocController],
  providers: [DriverDocService],
  exports: [TypeOrmModule.forFeature([DriverDoc])],
})
export class DriverDocModule {}
