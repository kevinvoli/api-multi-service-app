import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyCantactDataService } from './emergency-cantact-data.service';
import { EmergencyCantactDataController } from './emergency-cantact-data.controller';

import { EmergencyContactData } from './entities/emergency-cantact-datum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmergencyContactData])],
  controllers: [EmergencyCantactDataController],
  providers: [EmergencyCantactDataService],
  exports: [TypeOrmModule.forFeature([EmergencyContactData])],
})
export class EmergencyCantactDataModule {}
